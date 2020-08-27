<template>
<!--    我的订单-->
    <div>
        <div class="login-head">
            <van-nav-bar
                    title="我的订单"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
                    :style="{background:'#009688'}"
            />
        </div>
        <div>
            <van-tabs v-model="active">
                <van-tab title="未支付">内容 1</van-tab>
                <van-tab title="已预约">内容 2</van-tab>
                <van-tab title="已使用">内容 3</van-tab>
                <van-tab title="已过期">内容 4</van-tab>
            </van-tabs>
        </div>

    </div>

</template>

<script>
    import {NavBar, Tab, Tabs   } from 'vant';

    export default {
        name: "Orderform",
        data(){
            return{
                active:0
            }
        },
        methods:{
            onClickLeft(){
                this.$router.push('/mine');
            }
        },
        components:{
            [NavBar .name]:NavBar,
            [Tab.name]:Tab,
            [Tabs.name]:Tabs,
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
</style>