<template>
    <div>
        <div class="login-head">
            <van-nav-bar
                    title="收银台"
                    left-arrow
                    @click-left="onClickLeft"
                    :style="{background:'#299f94'}"
            />
        </div>
        <div class="centent">
            <div class="top">
                <van-cell-group >
                    <van-cell title="订单编号" value="LC190925150840177" :style="{fontSize:'16px'}"/>
                    <van-cell title="订单金额" value="¥68.00" :style="{fontSize:'16px'}"/>
                </van-cell-group>
            </div>

            <div class="bottom">
                <van-cell icon="wechat" title="微信支付" @click="show=true" :style="{fontSize:'16px'}">
                    <van-icon
                            slot="right-icon"
                            name="arrow"
                            style="line-height: inherit;"
                    />
                </van-cell>

                <van-cell icon="card" title="钱包支付" @click="show=true" :style="{fontSize:'16px'}">
                    <van-icon
                            slot="right-icon"
                            name="arrow"
                            style="line-height: inherit;"
                    />
                </van-cell>
            </div>

        </div>

    </div>

</template>

<script>
    import {NavBar,Cell,CellGroup,Icon} from 'vant';

    export default {

        data(){
            return{

            }
        },
        methods:{
            onClickLeft(){
                this.$router.push('/detail');
            }
        },
        components:{
            [NavBar.name]:NavBar,
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup,
            [Icon.name]:Icon,

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
    .bottom{
        margin-top: 10px;
    }
</style>