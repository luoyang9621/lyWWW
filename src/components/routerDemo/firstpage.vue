<template>
  <div>
      日历插件demo
      <div class="calendar">
          <div class="calendar-title">
                <span @click="getCurDate(-1,0)">上年</span>
                <span @click="getCurDate(0,-1)">上月</span>
                <div class="today"> {{ cur_Month }} </div> 
                <span @click="getCurDate(0,1)">下月</span> 
                <span @click="getCurDate(1,0)">下年</span> 
                <span @click="toToday()">今</span> 
          </div>  
          <div class="calendar-body">
              <table>
                <thead>
                  <tr>
                    <th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th><th>日</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item , index ) in DateArr"  :key="index">
                      <td v-for="(day , i ) in item" :key="i" @click="checkedDate(day.date)" :class="[day.date==cur_date?'is-select':'',!day.isCur?'is-cur':'', FormatDate(new Date(),'YYYY-MM-DD')==day.date?'act':'']">
                            {{ day.date | fmtDate }}
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
  data() {
    return {
      cur_date:'',
      cur_Month:'',
      DateArr:[]
    }
  },
  mounted(){
      this.cur_date=this.FormatDate(new Date(),'YYYY-MM-DD');
      this.cur_Month=this.cur_date.substring(0,7);
      this.getCurDate();
  },
  filters:{
      fmtDate(val){
          if(val && new Date(val) !='Invalid Date'){
             return new Date(val).getDate();
          }
      }
  },
  methods:{
    toToday(){
        this.cur_date=this.FormatDate(new Date(),"YYYY-MM-DD");
        this.cur_Month=this.FormatDate(new Date(),"YYYY-MM");
        this.getCurDate();
    },
    getCurDate(difYear=0,difMonth=0){
      let dateOfArr=[],
          curYear=parseInt(this.FormatDate(new Date(this.cur_Month+'-01'),'YYYY'))+difYear,     //当年  2018
          curMonth=parseInt(this.FormatDate(new Date(this.cur_Month+'-01'),'MM'))+difMonth-1,    //当月 1
          curDate=parseInt(this.FormatDate(new Date(this.cur_Month+'-01'),'DD')),
          curM=this.FormatDate(new Date(curYear,curMonth,1),'YYYY-MM'),
       
          curMind=new Date(curYear,curMonth,1).getDay(),          //当月第一天星期数  new Date(2018，3，12) 是表示2018-04-12  
          curMaxD=new Date(curYear,curMonth+1,0).getDate(),            //当月最后一天  new Date(2018，3，0) 是表示2018-02最后一天
          curMaxd=new Date(curYear,curMonth+1,0).getDay(),            //当月最后一天星期数

          preMonth=this.FormatDate(new Date(curYear,(curMonth-1),1),'YYYY-MM'),   //上月 
          preMaxD=new Date(curYear,curMonth-1+1,0).getDate(),         //上月最后一天
          preMaxd=new Date(curYear,curMonth-1+1,0).getDay(),        //上月最后一天星期数

          nextMonth=this.FormatDate(new Date(curYear,(curMonth+1),1),'YYYY-MM'),    //下月
          nextMind=new Date(curYear,(curMonth+1),1).getDay();                     //下月第一天星期数
     // console.log("curYear=",curYear,"curMonth=",curMonth,"curDate=",curDate)
    // console.log("curMind=",curMind,"curMaxD=",curMaxD,"curMaxd=",curMaxd,"preMaxD=",preMaxD,"preMaxd=",preMaxd,"nextMind=",nextMind);
          curMind=curMind==0?7:curMind;
          nextMind=nextMind==0?7:nextMind;
          for(let i=1;i<curMind;i++){             //上月
            let odate=preMaxD-curMind+i;
              odate=odate<10?'0'+odate:odate;
              dateOfArr.push({
                  date:preMonth+'-'+odate,
                  isCur:false,
              });
          }
         // console.log("dateOfArrlength11111=",dateOfArr.length);
          for(let i=1;i<curMaxD+1;i++){             //本月 
              dateOfArr.push({
                  date:curM+'-'+(i<10?'0'+i:i),
                  isCur:true,
              });
          }
          // console.log("dateOfArrlength222222=",dateOfArr.length);
      let nextMinD=1;
          for(let i=1;i<(8-nextMind)+1;i++){              //下月
              nextMinD+=1;
              dateOfArr.push({
                  date:nextMonth+'-'+(i<10?'0'+i:i),
                  isCur:false,
              });
          }
          //console.log("dateOfArrlength3333333=",dateOfArr.length);
          if((dateOfArr.length/7)==5){
            for(let i=1;i<7+1;i++){
                dateOfArr.push({
                    date:nextMonth+'-'+(nextMinD<10?'0'+nextMinD:nextMinD),
                    isCur:false,
                });
                nextMinD+=1;
            }
          }
          for(let i=0;i<6;i++){
              this.DateArr[i]=[];
          }
         // console.log('dateOfArr=',dateOfArr)
          dateOfArr.forEach((ele,index) =>{
              let i=Math.floor(index/7);
              this.DateArr[i].push(ele)
          });
          this.cur_Month=this.FormatDate(new Date(curYear,curMonth),"YYYY-MM");
    },
    checkedDate(val){
       let _y=this.FormatDate(val,"YYYY"),
           y=this.FormatDate(this.cur_Month,"YYYY"),
           _m=this.FormatDate(val,"M"),
           m=this.FormatDate(this.cur_Month,"M"),
           dify=_y-y,
           difm=_m-m;
        this.curMonth=val.substring(0,7);  
        this.cur_date=val;
        if(!(difm==0&&dify==0)){
           this.getCurDate(dify,difm);  
        }
        // if(difm!=0){
        //    this.getCurDate(0,difm);  
        // }
        // if(difm!=0){
        //    this.getCurDate(dify,0); 
        // }
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar-title{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #e0e0e0;
    .today{
        display: inline-block;
        padding: 0 20px;
        font-size: 16px;
    }
    span{
        display: inline-block;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border:1px solid #ea1dff;
        cursor: pointer;
    }
}
    table{
      tr{
        background-color: #fff!important;
        td{
            cursor: pointer;
            &.act{
              background-color: #a2c9ff ;
            }
            &.is-cur{
              background-color: #f3f3f3;
            }
            &.is-select{
              background-color: #63a3f3;
            }
            &:active{
              background-color: #63a3f3 ;
            }
        }
      }
    }
</style>

