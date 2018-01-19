<template>
<div>
    <div class="formli">
      姓名：<span>{{people.name}}</span>
    </div>
    <div class="formli">
      性别：<span>{{people.age}}</span>
    </div>
    <div class="formli">
      年龄：<span>{{people.sex}}</span>
    </div>
    <div class="formli">
      家庭住址：<span>{{people.address}}</span>
    </div>
    <input type="button" value="打开滑动块" @click="openToggle">
    <transition name="fade">
            <h2 v-if="flag">这是滑动快的标题</h2>
    </transition>
</div>
</template>
<script>
    export default{
        name:'info',
        data() {
            return {
               people:{
                   name:'Alice',
                   age:"11",
                   sex:"1",
                   address:"xxxxxjasdasdaa"
               },
               flag:false
            }
        },
        methods:{
            openToggle(){
                if(!this.flag){
                    this.flag=true;
                }else{
                    this.flag=false;
                }
                
            }
        }
    }
</script>
<style lang="scss">
  .formli{
        height: 30px;line-height: 30px;
        text-align: left;
        display: flex;
        span{
            display: inline-block;
            flex: 1
        }
        &.name{
            color:red;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        opacity: 0
    }
</style>

