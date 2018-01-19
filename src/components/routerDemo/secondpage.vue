<template>
  <div class="schedule">
      <div class="sch-title">
          这是第二个页面的内容输出
      </div>
      <div class="sch-body">
          <div class="body-title">
             按住鼠标左键移动框选表格
          </div>
          <div class="body-table">
            <table>
              <thead>
                <tr>
                  <th>姓名</th>
                  <th v-for="( item , index) in headArr" :key="index">
                    {{ item.week }}
                  </th>
                </tr>
              </thead>
              <tbody @mousedown="startMove($event)"  @mouseover="onMove($event)"  @mouseup="endMove($event)" @mouseleave="leaveMove">
                <tr v-for="( obj , i ) in peopleList" :key="i">
                  <td class="name">{{ obj.name }}</td>
                  <td v-for="( item , index) in headArr" :key="index"  :date="item.date" :data-id="obj.id"> 
                      
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
  </div>
</template>
<script>
export default {
   data () {
     return {
        headArr:[],
        peopleList:[
          {
            name:'张三',
            id:'1'
          },
          {
            name:'李四',
            id:'2'
          },
          {
            name:'王五',
            id:'3'
          },
          {
            name:'刘麻子',
            id:'4'
          }
        ],
        moveStatus:false,
        startX:'',
        startY:'',
        pageX:'',
        pageY:'',
     }
   },
   watch:{
     pageX:function(n,o){

     },
     pageY:function(n,o){

     }
   },
   mounted(){
      this.getSchDate();
   },
   methods:{
     getWeek(date){
       if(date && new Date(date) !="Invalid Date"){
          let s=['日','一','二','三','四','五','六'];
          return s[new Date(date).getDay()];
       }
     },
     getSchDate(){
        let  y=this.FormatDate(new Date(),"YYYY"),
            m=parseInt(this.FormatDate(new Date(),"MM")),
            maxD=new Date(y,m,0).getDate();   // m-1+1
          //console.log("maxD=",maxD,m)
        for(let i=1;i<maxD+1;i++){
         // console.log(y,m,i)
            this.headArr.push({
                week:this.getWeek(new Date(y,m-1,i)),
                date:this.FormatDate(new Date(y,m-1,i),"YYYY-MM-DD")
            })
        }
     },
     startMove(event){
       console.log('start')
       this.moveStatus='1';
       this.startX=event.x;
       this.startY=event.y; 
     },
     onMove(event){
       if(this.moveStatus=='1' || this.moveStatus=='2'){
          console.log(event)
          this.moveStatus='2';
          this.pageX=event.x;
          this.pageY=event.y; 
       }
     },
     endMove(){
        console.log("end")
        this.moveStatus=false;
        this.pageX='';
        this.pageY=''; 
     },
     leaveMove(){
        console.log("leave")
        if(this.moveStatus=='1' || this.moveStatus=='2'){
            this.moveStatus=false;
            this.pageX='';
            this.pageY='';
        }
     }
   }
}
</script>
<style lang="scss" scoped>
  table{
    tr{
      background-color: #fff!important;
      td{
        cursor: pointer;
        &.name{
          background-color: #F5F5F5;
        }
      }
    }
  }
</style>
