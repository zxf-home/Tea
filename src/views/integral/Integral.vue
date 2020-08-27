<template>
    <!--    优惠券-->
    <div>
        <van-nav-bar
                title="积分"
                left-arrow
                @click-left="onClickLeft"
                :style="{background:'#009688'}"
        />
        <div class="integral">
            <div class="more"><span><router-link to="/more">更多</router-link></span></div>
            <div>当前积分</div>
            <div>0</div>
        </div>

    </div>

</template>

<script>
    import { NavBar,Divider } from 'vant';
    export default {
        name: "integral",
        data(){
            return{

            }
        },
        methods:{
            onClickLeft(){
                this.$router.push('/mine');
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
    .integral{
        width: 100%;
        height: 100px;
        background-color:#009688 ;
        border-top: 1px solid #fff;
        text-align: center;
        .more{
            position: relative;
            height: 36px;
            line-height: 36px;
            span{
                position: absolute;
                right: 4%;
                a{
                    color: #fff;
                }
            }
        }
        div:nth-child(2){
            color: #fff;
            margin-bottom: 2%;
        }
        div:nth-child(3){
            color: #fff;
            font-size: 17px;
            font-weight: bold;
        }
    }
</style>