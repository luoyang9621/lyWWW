<template>
  <div class="schedule">
      <div class="sch-title">
          这是第jsonp页面的内容输出
      </div>
      <div class="sch-body">
          <input type="text" v-model="t1" @keyup="get($event)" placeholder="请输入您要搜索的关键词" class="input_s">
          <ul class="ul_se">
              <li v-for="(value,$index) in myData" :class="{gray:$index==now}" @click="clickChose($index)">
                  {{value}}
              </li>
          </ul>
          <p v-show="myData.length==0">暂无数据...</p>
      </div>
  </div>
</template>
<script>
// let jsonp = require('jsonp');
import jsonp from 'jsonp'
export default {
    data () {
      return {
          myData:[],
          t1:'',
          now:-1,
      }
    },
    watch:{

    },
    mounted(){
      console.log("$jsonp=",jsonp)
      this.deab();
    },
    methods:{
      deab(){
        jsonp('http://www.baidu.com/s', { params:{ wd : '111'}}, function (err, data) {
          if (err) {
            console.error(err.message);
          } else {
            console.log(data);
          }
        });
      },
      get(ev){ //键盘操作
        if(ev.keyCode==38 || ev.keyCode==40)
              return;
        if(ev.keyCode==13){
              window.open('https://www.baidu.com/s?wd='+this.t1);
              this.t1='';
        }
        this.$jsonp("https://www.baidu.com/s", //跨域请求接口
            {
            params: {
                wd:this.t1,
            },
            jsonp:'cb'
        }).then(function(res){
            this.myData = JSON.parse(res.bodyText).s;
        },function(){
            console.log("请求失败！！！")
        });
      },
   }
}
</script>
<style scoped>
.ul_se{ background: #fff; border: 1px solid #ccc; width: 100%;}
.ul_se li{list-style: none; height: 30px; line-height: 30px; cursor: pointer;}
.input_s{width: 400px; height: 30px; padding-left: 10px;}
.gray{background: deepskyblue; color: #fff;}
.ul_se li:hover{background: deepskyblue; color: #fff;}
</style>

