<template>
    <!--    优惠券-->
    <div>
        <div class="login-head">
            <van-nav-bar
                    title="优惠券"

                    left-arrow
                    @click-left="onClickLeft"
                    :style="{background:'#009688'}"
            />
        </div>
        <div>

            <Greenness />

        </div>

    </div>

</template>

<script>
    import {NavBar, Tab, Tabs   } from 'vant';
    import Greenness from './Greenness'
    export default {
        name: "Preferential",
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
            Greenness,
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