<template>
    <div class="main">
        <div class="main_left">
          <ul>
              <router-link tag="li" to="/">首页</router-link>
          </ul>
        </div>
        <div class="main_content">
            
            <div class="main_content_title">
                <div class="mc_title">{{ msg }}</div>
                    <ul>
                        <router-link to="/study/first" tag="li">第一个页面的链接</router-link>
                        <router-link to="/study/second" tag="li">第二个页面的链接</router-link>
                        <router-link to="/study/jsonp" tag="li">jsonp的测试页面</router-link>
                    </ul>
            </div>
            <div class="main_content_body">
                <router-view></router-view>
            </div>
        </div>
  </div>
</template>
<script>
    export default{
        name:'first',
        data() {
            return {
                msg:'这是第主页面的标题'
            }
        }
    }
</script>
<style lang="scss" scoped>
.main{
    display: flex;
    height: 100%;
    .main_left{
        width: 200px;
        border-right: 1px solid #e0e0e0;
        box-sizing: border-box;
        text-align: center;
        overflow: auto;
        ul{
            width: 100%;
            li{
               cursor: pointer;
               padding: 5px 10px;
               border: 1px solid #f0e0a0;

            }
        }
    }
    .main_content{
        padding: 20px;
        width: 100%;
        height: 100%;
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        flex-direction: column;
        flex: 1;
        .main_content_title{
            line-height: 60px;
            border-bottom: 1px solid #e0e0e0;
            .mc_title{
                line-height: 60px;
            }
            ul{
                overflow: hidden;
                li{
                    line-height: normal;
                    float: left;
                    cursor: pointer;
                    padding: 5px 10px;
                    border:1px solid #00cf54;
                    &.router-link-active{
                        color: #00cf54;
                        border-bottom: none;
                    }
                    &:last-child{
                        border-left:none; 
                    }
                }
            }
        }
        .main_content_body{
            height: auto;
            flex: 1;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            -moz-box-flex: 1;
        }
    }
}
</style>
