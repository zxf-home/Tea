<template>
    <!--    充值-->
    <div>
        <van-nav-bar
                title="充值"
                left-arrow
                @click-left="onClickLeft"
                :style="{background:'#009688'}"
        />
        <div class="title">
            <span>充值</span>
            <div>
                <label>充值金额</label>
                <input type="text" placeholder="¥">
            </div>
        </div>

        <div class="btn">
            <van-button type="primary" round size="large" :style="{background:'#009688',border:'none'}">立即充值</van-button>
        </div>
    </div>

</template>

<script>
    import { NavBar,Divider,Button } from 'vant';
    export default {
        name: "List",
        data(){
            return{

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
            [Button.name]:Button,

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
    .title{
        margin: 0 4%;
        span{
            display: block;
            font-size: 22px;
            font-weight: bold;
            margin-top: 5%;
            margin-bottom: 5%;
        }
        div{
            background: #eee;
            border-radius: 10px;
            height: 100px;

            label{
                display: block;
                padding: 4%;
                color: #666;
                font-weight: 600;
            }
            input{
                border: none;
                outline: none;
                background: transparent;
                margin-left: 4%;
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
    .btn{
        margin-left: 4%;
        margin-right: 4%;
        margin-top: 16%;
    }

</style>