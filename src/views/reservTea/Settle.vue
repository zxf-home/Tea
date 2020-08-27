<template>
    <div>
        <div class="login-head">
            <van-nav-bar
                    title="订单结算"
                    left-arrow
                    @click-left="onClickLeft"
                    :style="{background:'#299f94'}"
            />
        </div>
        <div class="main">
            <div class="content">
                <div class="title">
                    <div class="imgLeft" :style="{backgroundImage: 'url(' + bgImg + ')',backgroundSize:'cover'}"></div>
                    <div>沫厘①</div>
                </div>
                <p>服务时间: <span>09月25日 14:00-09月25日 15:00</span></p>
                <p>市长费: <span>¥68.00</span></p>
                <p>服务时长: <span>共1小时</span></p>
                <p>会员优惠: <span>普通会员减¥0.00</span></p>
            </div>
            <div class="preferential">
                <van-cell icon="shop-o" title="优惠券" value="一张可用" :style="{color:'#f60',backgroundColor: 'transparent'}" @click="show=true">
                    <van-icon
                            slot="right-icon"
                            name="arrow"
                            style="line-height: inherit;"
                    />
                </van-cell>
                <van-popup
                        v-model="show"
                        position="bottom"
                        :style="{ height: '30%' }"
                />
            </div>
            <div class="prompt">
                <h2>温馨提示</h2>
                <p>1.如茶室无占用情况.可提前15分钟扫描进入.</p>
                <p>2.茶室设有自动售货机,如有需要可自行扫码购买.</p>
                <p>3.请把我号使用时间,茶室将在时间结束后断开电源.</p>
            </div>
            <div class="pay">
                <p>已优惠<span>¥0.00</span></p>
                <van-button @click="$router.push('/pony')" type="primary" round :style="{position: 'absolute',right:'10px',bottom:'8px',backgroundColor:'#299f94'}">去支付¥68.00</van-button>
            </div>
        </div>

    </div>

</template>

<script>
    import {NavBar, Tab, Tabs,Cell,Popup,Icon,Button} from 'vant';

    export default {
        data(){
            return{
                show:false,
                bgImg:require('../../assets/images/5.jpg')
            }
        },
        methods:{
            onClickLeft(){
                this.$router.push('/detail');
            }
        },
        components:{
            [NavBar .name]:NavBar,
            [Tab.name]:Tab,
            [Tabs.name]:Tabs,
            [Cell.name]:Cell,
            [Popup.name]:Popup,
            [Icon.name]:Icon,
            [Button.name]:Button,
        }
    }
</script>

<style scoped lang="less">
    .main{
        width: 94%;
        margin: 0 auto;
        .content{
            width: 96%;
            margin: 20px auto;
            border-radius: 16px;
            box-shadow: 1px 3px 4px #ccc;
            padding: 14px 0 16px 12px;
            box-sizing: border-box;
            .title{
                div{
                    display: inline-block;
                }
                div:nth-child(1){
                    width: 90px;
                    height: 90px;
                    border-radius: 15px;
                    vertical-align: middle;
                }
                div:nth-child(2){
                    margin-left: 20px;
                    color: #009688;
                    font-size: 19px;
                }

            }
            p{
                margin-top: 14px;
                color: #888888;
                font-size: 14px;
                span{
                    color: #272822;
                }
            }
        }
        .preferential{
            width: 96%;
            margin: 20px auto;
            border-radius: 16px;
            box-shadow: 1px 3px 2px #ccc;
            padding: 10px 0 10px 10px;
            box-sizing: border-box;
        }
        .prompt{
            width: 96%;
            margin: 20px auto;
            border-radius: 16px;
            box-shadow: 1px 3px 4px #ccc;
            padding: 14px 0 12px 12px;
            box-sizing: border-box;
            h2{
                font-size: 20px;
                margin-top: 5px;
                margin-bottom: 18px;
            }
            p{
                color: #888888;
                font-size: 14px;
                margin: 6px 0;
            }
        }
        .pay{
            width: 100%;
            position: absolute;
            left: 0;
            right: 0;
            bottom:0;
            height: 60px;
            background-color: #eee;
            line-height: 60px;
            p{
                display: inline-block;
                span{
                    color: #f00;
                }
            }
        }
    }
    .van-nav-bar__title{
        color: #fff;
    }
    .van-nav-bar__left .van-icon , .van-nav-bar__text{
        color:#fff;
    }
</style>