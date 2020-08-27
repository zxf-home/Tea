<template>
    <!--    优惠券-->
    <div>
        <van-nav-bar
                title="我的钱包"
                left-arrow
                @click-left="onClickLeft"
                :style="{background:'#009688'}"
        />
        <div class="integral">
            <div class="more"><span><router-link to="/list">明细</router-link></span></div>
            <div>总资产(元)</div>
            <div>0.00</div>
        </div>
        <div>
            <router-link to="/adequate"><van-cell title="账户充值" is-link /></router-link>
            <router-link to="/invoice"><van-cell title="申请发票" is-link /></router-link>
        </div>
        <van-row type="flex" justify="space-around">
            <van-col span="6">
                <div class="active">
                    <span>每充值1000</span>
                    <span>送100元</span>
                </div>
            </van-col>
            <van-col span="6">
                <div class="active">
                    <span>每充值2000</span>
                    <span>送200元</span>
                </div>
            </van-col>
            <van-col span="6">
                <div class="active">
                    <span>每充值3000</span>
                    <span>送300元</span>
                </div>
            </van-col>
        </van-row>
    </div>

</template>

<script>
    import { NavBar,Divider, Cell, CellGroup,Row, Col } from 'vant';
    export default {
        name: "Purse",
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
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup,
            [Row.name]:Row,
            [Col.name]:Col,

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
            height: 26px;
            line-height: 30px;
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
            font-size: 22px;
            font-weight: 500;
            margin-bottom: 2%;
        }
        div:nth-child(3){
            color: #fff;
            font-size: 20px;
            font-weight: 500;
        }
    }
    .active{
        border: 1px solid #ccc;
        width: 100%;
        height: 70px;
        text-align: center;
        span:nth-child(1){
            display: block;
            line-height: 40px;
        }
    }
</style>