<template>
    <!--    优惠券-->
    <div>
        <van-nav-bar
                title="更多积分"
                left-arrow
                @click-left="onClickLeft"
                :style="{background:'#009688'}"
        />
    </div>

</template>

<script>
    import { NavBar,Divider} from 'vant';
    export default {
        name: "integral",
        data(){
            return{

            }
        },
        methods:{
            onClickLeft(){
                this.$router.push('/integral');
            }
        },
        components:{
            [NavBar.name]:NavBar,
            [Divider.name]:Divider,

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