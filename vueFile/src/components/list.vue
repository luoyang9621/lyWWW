<template>
  <div>
      <h4>这是一个可以新增、删除和编辑的表格</h4>
      <div class="filter">
          <input type="text" class="mr10" placeholder="请输入名称搜索" v-model="search"><input type="button" value="新增" @click="add">
      </div>
      <table>
          <thead>
              <tr><th>水果名称</th><th>单价</th><th>数量</th><th>操作</th></tr>
          </thead>
          <tbody>
                <tr v-for="( item , index) in isIn" :class="{'act':editObj.key===item.name}" :key="item.name">
                    <td width='200'>
                      <span>{{ item.name }}</span>
                      <input  class="show_data"type="text" v-model="editObj.name" >
                    </td>
                    <td width='200'>
                        <span>{{ item.price }}</span>
                        <input class="show_data" type="text" v-model="editObj.price" >元
                    </td>
                    <td width='200'>
                        <span>{{ item.num }}</span>
                        <input class="show_data" type="text" v-model="editObj.num" >吨
                    </td>
                    <td>
                        <input type="button" value="修改" class="di" @click="edit(item,index)">
                        <input type="button" value="删除" class="di" @click="delet(index)">
                        <input type="button" class="show_data" value="保存" @click="sure(item,index)">
                        <input type="button" class="show_data"value="取消" @click="cancel(item,index)">
                    </td>
              </tr>
          </tbody>
      </table>
    <components-slot>
        11111111111
    </components-slot>
      <ul>
          <li v-for="item in nums" :key="item.name">
              <span>
                  {{item.num}}
              </span>
              <span class="name">
                  {{item.name}}
              </span>
          </li>
      </ul>
    <slot-name>
        <h2>父33333组件标题</h2>
        <p slot="header111">这是头部</p>
        <p slot="footer222">这是尾部</p>
        <p>这是中间内容</p>
    </slot-name>
      <input type="text" v-model="title" placeholder="请输入窗口标题">
      <input type="text" v-model="content" placeholder="请输入窗口内容">
      <input type="button" value="打开窗口" @click="openPop">
     <pop-wnd :title="title" :content="content" v-show="showStatus" @ok-event='getSon' @cancel-event='closePop'  ref="popwnd">
         
    </pop-wnd>  
  </div>
</template>
<script>
import popWnd from '@/components/plugins/popWnd.vue';
import componentSolt from '@/components/plugins/componentSolt.vue';
import slotName from '@/components/plugins/slotname.vue';
    export default{
        name:'list',
        components:{ 'pop-wnd': popWnd ,'components-slot': componentSolt ,'slot-name': slotName},
        data() {
            return {
                nums:[
                    {
                        num:1,
                        name:"a"
                    },
                    {
                        num:2,
                        name:"b"
                    },
                    {
                        num:3,
                        name:"c"
                    },
                    {
                        num:4,
                        name:"d"
                    },
                    {
                        num:5,
                        name:"e"
                    }
                ],
                fruits:[
                    {
                        name:'香蕉',
                        num:'10',
                        price:'8'
                    },
                    {
                        name:'苹果',
                        num:'22',
                        price:'12'
                    },
                    {
                        name:'荔枝',
                        num:'6',
                        price:'28'
                    },
                    {
                        name:'西瓜',
                        num:'11',
                        price:'8'
                    },
                    {
                        name:'草莓',
                        num:'10',
                        price:'8'
                    },
                    {
                        name:'菠萝',
                        num:'10',
                        price:'8'
                    }
                ],
                search:'',
                editObj:{
                    
                },
                title:'',
                content:'',
                showStatus:false
            }
        },
        mounted(){
            console.log(this.$refs.popwnd)
        },
        computed:{
            isIn:function(str){
                let search=this.search.trim();
                let parObj=this.fruits,
                    arr=[];
                console.log("search=",search);
                if(search){
                    console.log("111");
                    parObj.forEach(function(user){
                        if(user.name.indexOf(search)>-1){
                            arr.push(user);
                        }
                        console.log("parObj=",parObj);
                    })
                }else{
                    arr=parObj;
                }
                return arr;
            }
        },
        methods:{
            add(){
                this.fruits.unshift({name:'',num:'',price:''});
                this.editObj.key='';
            },
            delet(index){
                this.fruits.splice(index,1);
            },
            edit(item,index){
                this.editObj=JSON.parse(JSON.stringify(item));
                this.editObj.key=item.name;
            },
            sure(item,index){
                let flag=true,
                    that=this;
                this.fruits.forEach(function(value){
                    if(value.name==that.editObj.name&&that.editObj.key==''){
                        alert("名称已存在，请重新填写");
                        flag=false;
                        return;
                    }
                });
                if(this.editObj.name&&this.editObj.num&&this.editObj.price&&flag){
                    this.$set(this.fruits,index,this.editObj);
                    this.editObj={};
                }
            },
            cancel(item,index){
                if(this.editObj.key==''){
                   this.fruits.shift();
                }else{
                    this.editObj={};
                }
                
            },
            getSon(value){
                alert(value);
                this.showStatus=false;
            },
            closePop(){
                alert("取消了啊啊啊")
                this.showStatus=false;
            },
            openPop(){
                if(this.title.trim()&&this.content.trim()){
                    this.showStatus=true;
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    h4{
        font-size: 18px;
        width: 60%;
        color: #333;
        margin: 20px auto;
    }
    ul{
        li{
            height: 30px;line-height: 30px;
            text-align: left;
            display: flex;
            background-color: #aaaa0f;
            margin: 10px 0;
            span{
                display: inline-block;
                flex: 1;
                text-align: center;
                &.name{
                    color:red;
                }
            }
        }
        
    }
    .filter{width: 60%;margin: 0 auto;}
    table{
        margin: 20px auto;
        min-width: 60%;
        tr{
            input{
                display: none;
                margin-right: 10px;
            }
            &.act{
                .show_data{display: inline;}
                span{display: none;}
                .di{display: none!important;}
            }
        }
    }
</style>

