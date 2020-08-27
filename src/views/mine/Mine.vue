<template>
    <div>
        <div class="login-head">
            <van-nav-bar
                    title="个人中心"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
                    :style="{background:'#009688'}"
            />
        </div>
        <div class="userInfo">
            <router-link tag="div" to="/modify" :style="{color:'#272822'}">
                <div class="userName">{{value}}</div>
                <div class="userImg"><img :src="userImg" alt="" :style="{width:'32px',heigth:'32px'}"></div>
            </router-link>
        </div>
        <div class="member">

        </div>
        <div>
            <van-grid :column-num="3">

                    <van-grid-item
                        icon="coupon"
                        text="我的订单"
                        @click="$router.push('/orderform')"
                        :style="{color:'#009688'}"
                />
                <van-grid-item
                        icon="balance-pay"
                        text="钱包"
                        @click="$router.push('/purse')"
                        :style="{color:'#009688'}"
                />
                <van-grid-item
                        icon="points"
                        text="积分"
                        @click="$router.push('/integral')"
                        :style="{color:'#009688'}"
                />
                <van-grid-item
                        icon="debit-pay"
                        text="优惠券"
                        @click="$router.push('/preferential')"
                        :style="{color:'#009688'}"
                />
                <van-grid-item
                        icon="good-job-o"
                        text="加盟合作"
                        @click = "$router.push('/encrypt')"
                        :style="{color:'#009688'}"
                />
                <van-grid-item
                        icon="service"
                        text="联系我们"
                        @click = "callPhone"
                        :style="{color:'#009688'}"
                />
            </van-grid>
        </div>
    </div>

</template>

<script>
    import {NavBar,Grid, GridItem,Skeleton  } from 'vant';

    export default {
        name: "Mine",
        data(){
            return{
                value:'观月',
                userImg:require('../../assets/images/logo.jpg')
            }
        },
        methods:{
            onClickLeft(){
                this.$router.push('/');
            },
            callPhone(){
                window.location.href = 'tel://15979309317';
            }
        },
        components:{
            [NavBar.name]:NavBar,
            [Grid.name]:Grid,
            [GridItem.name]:GridItem,
            [Skeleton.name]:Skeleton,

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
    .member{
        height: 140px;
        background-image:url("../../assets/images/1.jpg");
        background-size: cover;
        border-radius: 10px;
        margin: 0 4% 10% 4%;
    }
    .userInfo{
        position: relative;
        height: 50px;
        margin-top: 8%;
        .userName{
            position: absolute;
            left: 10%;
        }
        .userImg{
            position: absolute;
            right: 10%;
        }
    }
</style>