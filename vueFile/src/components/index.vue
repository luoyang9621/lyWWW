<template>
  <div class="warp">
      <div class="section">
          <ul class="demo_ul">
            <router-link to="/list" tag="li">vue的v-for和computed</router-link>
            <router-link to="/info" tag="li">demo info</router-link>
            <router-link to="/study" tag="li">vue 的router demo和页面</router-link>
        </ul>
          <dl>
              <dt>姓名：</dt>
              <dd>{{ info.name}}</dd>
          </dl>
          <dl>
              <dt>性别：</dt>
              <dd>{{ info.sex |sex}}</dd>
          </dl>
          <dl>
              <dt>年龄：</dt>
              <dd>{{ info.age}}</dd>
          </dl>
          <dl>
              <dt>现居住地：</dt>
              <dd>{{ info.address}}</dd>
          </dl>  
          <dl>
              <dt>手机号：</dt>
              <dd>{{ info.mobile}}</dd>
          </dl> 
          <dl>
              <dt>邮箱：</dt>
              <dd>{{ info.email}}</dd>
          </dl> 
      </div>
      <div class="section bg_green">
          这是第二个板块
      </div>
      <div class="section bg_bule">
          这是第三个的板块
      </div>
      <div class="section bg88529a">
          这是第四个的板块
      </div>
  </div>
</template>
<style scoped lang="scss">
    .warp{width:80%;min-width:996px;height:auto; margin:0 auto;background: #008079;opacity: .8;position: relative;top: 0;left: 0;}
    .section{height: 100%;min-height: 632px;}
    .section dl{
        height: 30px;line-height: 30px;margin:10px 0;background-color: #a0a0a0;overflow: hidden;clear: both;
        dt{float: left;width:80px;text-align: right;}
        dd{float: left;}
    }
    .demo_ul{
        position: absolute;width:400px;height: 80px;right: 0;top:20px;
        width:200px;height: auto; background-color: #fff;border:1px solid #f0f0f0;box-shadow: 0  0 20px #333;
        li{
            text-align: center;height: 30px;line-height: 30px;cursor: pointer;
            &:hover{
                background-color: #f0f;
            }
        }
    }
</style>
<script>
export default {
  name:'index',
  data () {
      return {
          info: {
              name:"反恐精英",
              age:"92",
              sex:"1",
              address:"xx省xx市xxx区xxx大道xxx号",
              mobile:'13879121111' ,
              email:'999911112@foxmail.com'
          }
      }
  },
  filters:{
      sex:function(val){
          if(val==1){
              val="男";
          }else if(val==2){
              val="女"
          }
          return val;
      }
  }
}
</script>


