<template>
    <div>
        <div class="login-head">
            <van-nav-bar
                    title="附近茶室"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
                    :style="{background:'#299f94'}"
            />
        </div>
        <div>
            <van-tabs>
                <van-tab title="附近茶室">内容 1</van-tab>
                <van-tab title="历史茶室">内容 2</van-tab>
            </van-tabs>
        </div>

    </div>

</template>

<script>
    import {NavBar, Tab, Tabs   } from 'vant';

    export default {
        name: "Neighbour",
        data(){
            return{

            }
        },
        methods:{
            onClickLeft(){
                this.$router.push('/');
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