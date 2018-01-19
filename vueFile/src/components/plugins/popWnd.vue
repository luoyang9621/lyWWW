<template>
    <div class="pop-wnd">
        <div class="pop-title">{{title}} <span class="pop-close">&#10005;</span></div>
        <div class="pop-content">
            <p>{{content}}</p>
        </div>
        <div class="pop-foot">
            <input type="button" value="确定" @click="okEvent"><input type="button" value="取消" class="cancel-btn" @click="cancel">
        </div>
    </div>
</template>
<script>
export default {
   props:{
        'title':{
            type: String,
        },
        'content':{
            type: String,
        }
    },
   methods:{
       okEvent(){
           let content=this.content;
           console.log("11111")
           this.$emit('ok-event',content)
       },
       cancel(){
           this.$emit('cancel-event')
       }
   }
}
</script>

<style lang="scss" scoped>
    .pop-wnd{
        width: 400px;
        height: 300px;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius:10px;
        box-shadow: 0 0 30px #666; 
        background-color: #fff;
        .pop-title{
            height: 35px;
            line-height: 35px;
            background-color: #d1d2d3;
            padding-left: 35px;
            .pop-close{
                float: right;
                height: 35px;
                width: 35px;
                color: #fff;
                cursor: pointer;
                &:hover{
                    background-color: #d6a8a8;
                    color:#d1d2d3; 
                }
            }
            
        }
        .pop-content{
            width: 100%;
            text-align: center;
            height: auto;
            p{
                width: 80%;margin:20px auto;
            }

        }
        .pop-foot{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 60px;
            line-height: 60px;
            text-align: right;
            border-top: 1px solid #e0e0e0;
            box-sizing: border-box;
            input[type=button]{
                margin-right: 10px;
                &:last-child{
                    margin-right: 20px;
                }
            }
        }
    }
</style>
