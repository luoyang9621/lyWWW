// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

Vue.config.productionTip = false

Vue.prototype.FormatDate = function ( date , fmt) {
    if(new Date(date) == 'Invalid Date'){
      return ;
    }
    let fdate=new Date(date);
    var o = {
        "Y+": fdate.getFullYear(),
        "M+": fdate.getMonth() + 1, //月份 
        "D+": fdate.getDate(), //日 
        "H+": fdate.getHours(), //小时 
        "m+": fdate.getMinutes(), //分 
        "S+": fdate.getSeconds(), //秒 
        "q+": Math.floor((fdate.getMonth() + 3) / 3), //季度 
        "s": fdate.getMilliseconds() //毫秒 
    };
    if (/(Y+)/.test(fmt)){
      fmt = fmt.replace(RegExp.$1, (fdate.getFullYear() + "").substr(4 - RegExp.$1.length));
    } 
    for (var k in o){
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return fmt;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
