<template>
    <!--    优惠券-->
    <div>
        <van-nav-bar
                title="选择茶室"
                left-arrow
                @click-left="onClickLeft"
                :style="{background:'#009688'}"
        />
        <div class="listTea">
            <div class="main" v-for="(item,index) in lists" :key="index" >
                <div class="item" :style="{backgroundImage: 'url(' + item.bgImg + ')',backgroundSize:'cover'}" @click="isShow(index)">
                        <div class="top">
                            <div>{{item.title}}</div>
                            <div>
                                <span>营业时间{{item.time}}</span>
                                <span>距您{{item.distance}}千米</span>
                            </div>
                        </div>
                </div>
                <div class="centent" v-for="(i,index2) in item.list" :key="index2" v-show="item.cur" @click="$router.push('/detail')">
                    <div class="imgLeft" :style="{backgroundImage: 'url(' + i.bgImg + ')',backgroundSize:'cover'}"></div>
                    <div class="rightIfo">
                        <div class="name">{{i.name}}</div>
                        <p class="assess">
                            <span><van-rate v-model="i.value" readonly size="15"/></span><span :style="{color:'#666'}">{{i.acquired}}已售</span>
                        </p>
                        <p class="money">
                            <span>¥{{i.money}} /<span :style="{color: '#666'}">小时</span></span>
                            <span>推荐{{i.recommend}}人</span>
                        </p>
                    </div>
                </div>
                <div class="bottom" @click="isShow(index)"><span>查看茶厅</span><van-icon :name="item.cur?'arrow-up':'arrow-down'"  :style="{verticalAlign:'middle'}"/></div>
            </div>

        </div>
    </div>

</template>

<script>
    import { NavBar,Divider,Rate,Icon } from 'vant';
    export default {
        name: "ReservTea",
        data(){
            return{
                activeNames: ['1'],
                cur:false,
                lists:[
                    {
                        title:'6茶新景中心店',
                        bgImg:require('../../assets/images/3.jpg'),
                        time:'0:00-24:00',distance:15.0,
                        cur:false,
                        list: [
                            {bgImg:require('../../assets/images/2.jpg'),name:'沫厘①',value:5,acquired:134,money:68.00,recommend:'3-6'},
                            {bgImg:require('../../assets/images/3.jpg'),name:'沫厘②',value:4,acquired:67,money:68.00,recommend:'3-6'},
                            {bgImg:require('../../assets/images/4.jpg'), name:'沫厘③',value:3,acquired:35,money:68.00,recommend:'3-6'}
                        ]
                    },
                    {
                        title:'6茶新景中心店',
                        bgImg:require('../../assets/images/4.jpg'),
                        time:'0:00-24:00',distance:15.0,
                        cur:false,
                        list: [
                            {bgImg:require('../../assets/images/2.jpg'),name:'沫厘①',value:5,acquired:134,money:68.00,recommend:'3-6'},
                            {bgImg:require('../../assets/images/3.jpg'),name:'沫厘②',value:4,acquired:67,money:68.00,recommend:'3-6'},
                            {bgImg:require('../../assets/images/4.jpg'), name:'沫厘③',value:3,acquired:35,money:68.00,recommend:'3-6'}
                        ]
                    },
                    {
                        title:'6茶新景中心店',
                        bgImg:require('../../assets/images/5.jpg'),
                        time:'0:00-24:00',distance:15.0,
                        cur:false,
                        list: [
                            {bgImg:require('../../assets/images/2.jpg'),name:'沫厘①',value:5,acquired:134,money:68.00,recommend:'3-6'},
                            {bgImg:require('../../assets/images/3.jpg'),name:'沫厘②',value:4,acquired:67,money:68.00,recommend:'3-6'},
                            {bgImg:require('../../assets/images/4.jpg'), name:'沫厘③',value:3,acquired:35,money:68.00,recommend:'3-6'}
                        ]
                    }
                ]
            }
        },
        methods:{
            onClickLeft(){
                this.$router.push('/home');
            },
            isShow(index){
                    this.lists.forEach((item,i)=>{
                        if(index === i){
                            item.cur = !item.cur;
                        }else{
                            item.cur = false;
                        }

                    });
            }
        },
        components:{
            [NavBar.name]:NavBar,
            [Divider.name]:Divider,
            [Rate.name]:Rate,
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
    .teahouse{
        height: 100px;
        img{
            width: 100%;
        }
    }
    .listTea{
        width: 90%;
        margin: 5% auto;
       .main{
           margin-bottom: 16px;
           border-radius:14px;
           box-shadow: 2px 2px 4px #ccc;
           .item{
               height: 130px;
               border-radius:14px 14px 0 0;
               position: relative;

               .top{

                   font-size: 14px;
                   position: absolute;
                   bottom: 0;
                   width: 100%;
                   background-color: rgba(0,0,0,.4);
                   color: #fff;
                   div:nth-child(1){
                       font-weight: bold;
                       margin:2px 0;
                       margin-left: 3%;

                   }
                   div:nth-child(2){
                       margin-left: 3%;
                       margin-right: 3%;
                       margin-bottom: 5px;

                       span:nth-child(2){
                           float: right;

                       }

                   }

               }

           }
            .centent{
                font-size: 14px;
                margin-top: 20px;
                margin-left: 14px;
                vertical-align: top;
                border-bottom: 1px solid #ccc;
                position: relative;
                height: 100px;
                .imgLeft{
                    width: 90px;
                    height: 90px;
                    border-radius: 15px;
                    display: inline-block;
                    vertical-align: top;
                    position: absolute;
                }
                .rightIfo{
                    width: 100%;
                    padding-left: 110px;
                    display: inline-block;
                    padding-right: 5%;
                    box-sizing: border-box;
                    .name{
                        margin-bottom: 14px;
                    }
                    .assess{
                        span{
                            /*vertical-align:top;*/

                        }
                    }
                    .money{
                        margin-top: 14px;
                        span:nth-child(2){
                            float: right;
                        }
                    }
                }
            }
           .bottom{
               background-color: #fff;
               color: #009688;
               border-radius:0 0 14px 14px;
               height: 26px;
               font-size: 14px;
               text-align: center;
               line-height: 26px;
           }
       }
    }




</style>