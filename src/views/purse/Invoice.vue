<template>
    <!--    优惠券-->
    <div>
        <van-nav-bar
                title="发票"
                left-arrow
                @click-left="onClickLeft"
                :style="{background:'#009688'}"
        />

        <div>

            <van-submit-bar button-text="下一步">
                <van-checkbox v-model="checked">全选</van-checkbox>
            </van-submit-bar>
        </div>
    </div>

</template>

<script>
    import { NavBar,Divider,SubmitBar,Checkbox  } from 'vant';
    export default {
        name: "Invoice",
        data(){
            return{
                checked:false
            }
        },
        methods:{
            onClickLeft(){
                this.$router.push('/purse');
            }
        },
        components:{
            [NavBar.name]:NavBar,
            [Divider.name]:Divider,
            [SubmitBar.name]:SubmitBar,
            [Checkbox.name]:Checkbox


        }
    }
</script>

<style scoped lang="less">

    .van-nav-bar__title{
        color: #fff;
    }
    .van-nav-bar__left .van-icon , .van-nav-bar__text{
        color:#fff;
    }
    .van-submit-bar__bar{
        position: relative;
        .van-checkbox{
            position: absolute;
            left: 10px;

        }
        .van-button{
            background-color: #009688;
            border-color: #009688;
        }
    }

</style>