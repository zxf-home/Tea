<template>
    <div>
        <div class="head">
            <van-nav-bar
                    title="茶室详情"
                    left-arrow
                    @click-left="onClickLeft"
                    :style="{background:'#009688'}"
            />
        </div>

        <div class="banner">
            <van-swipe @change="onChange" :autoplay="3000">
                <van-swipe-item v-for = "item in imgs"><img :src="item" alt=""></van-swipe-item>

                <div class="custom-indicator" slot="indicator">
                    {{ current + 1 }}/{{imgs.length}}
                </div>
            </van-swipe>
        </div>
        <div class="shop">
            <p>沫厘①</p>
            <p>
                <span><van-rate v-model="value" readonly size="18"/><span>34已售</span></span>
                <span>68.00元/小时</span>
            </p>
        </div>
        <div class="addr">
            <van-row>
                <van-col span="2" :style="{lineHeight:'60px',textAlign:'center',color:'#1bbaab'}"><van-icon name="location-o" size="24"/></van-col>
                <van-col span="17" :style="{padding:'0 5px'}">
                    <div style="line-height: 26px">厦门市思明区嘉禾路23号101号新景中B栋沫厘咖啡店</div>
                    <div style="line-height: 26px">距离您<span :style="{color:'#1bbaab'}">18.0千米</span>驾车<span :style="{color:'#1bbaab'}">35.1分钟</span></div>
                </van-col>
                <van-col span="5" :style="{lineHeight:'60px',textAlign:'center',color:'#1bbaab', borderLeft:'1px solid #ccc'}">
                    <a href="tel:15979309317" :style="{color:'#009688'}"><van-icon name="phone-o" size="24"/></a>
                </van-col>
            </van-row>
        </div>
        <div class="changeTime">
            <div>
                <div><van-icon name="clock-o"  :style="{verticalAlign:'middle',color:'#1bbaab',fontWeight:'bold'}"/> 选择预定时间</div>
                <div @click="show = true">
                    <span>{{t1}}</span>--<span>{{t2}}</span>
                </div>
                <van-popup
                        v-model="show"
                        position="bottom"
                        round
                        :close-on-click-overlay=false
                        :style="{ height: '76%' }"
                >
                <div class="btn">
                    <div class="title">
                        <van-icon name="volume-o" :style="{verticalAlign: 'top'}"/>灰色为已被预订~另外选择时间必须是连续的哦~
                    </div>
                        <p class="active1">
                            <button  v-for="(item,index) in date" @click="change(index,item.checked)"  :key="index" :class="{'d1':item.checked}" :title="item.flag">{{item.time}}</button>
                        </p>

                    <div class="bottom">
                        <p><van-button type="primary" size="large" :style="{backgroundColor:'#aaf',border:'none'}" @click="show=false">取消</van-button></p>
                        <p><van-button type="primary" size="large" :style="{backgroundColor:'#009688',border:'none'}" @click="confirm">确认</van-button></p>
                    </div>
                </div>
                </van-popup>
            </div>

        </div>
        <div class="explain">
            <img src="../../assets/images/explain.jpg" alt="">
        </div>

        <div class="accounts">
            <div>
                <p>
                    <span>¥{{sum}} &nbsp;&nbsp;&nbsp;共{{totol}}小时</span>
                </p>
                <p @click="settle">
                    <span>去结算</span>
                </p>
            </div>

        </div>
    </div>
</template>

<script>
    import { NavBar,Swipe, SwipeItem,Rate,Icon,Row, Col,Popup,Button,Toast } from 'vant';
    export default {
        name: "Detailed",
        data() {
            return {
                current: 0,
                show:false,
                value:4,
                d1:{backgroundColor:'blue'},
                d2:'{}',
                start:0,
                end:0,
                t1:'',
                t2:'',
                money:68,
                imgs:[
                    require('../../assets/images/1.jpg'),
                    require('../../assets/images/2.jpg'),
                    require('../../assets/images/3.jpg'),
                    require('../../assets/images/4.jpg'),
                ],
                date:[]
            }
        },
        computed:{
            totol(){
                return (this.end-this.start)/2;
            },
            sum(){
                return ((this.end-this.start)/2)*this.money;
            }
        },
        components:{
            [NavBar.name]:NavBar,
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem,
            [Rate.name]:Rate,
            [Icon.name]:Icon,
            [Row.name]:Row,
            [Col.name]:Col,
            [Popup.name]:Popup,
            [Button.name]:Button,
            [Toast.name]:Toast,


        },
        mounted(){
            this.auto1();
        },
        methods:{
            onClickLeft(){
                this.$router.push('/reservtea');
            },
            onChange(index) {
                this.current = index;
            },
            auto1(){
                this.t1 = sessionStorage.getItem('startTime2');
                this.t2 = sessionStorage.getItem('endTime2');
                var arr = [];
                var s = this.t1.match(/\d+/g);
                var t1 = parseInt(s[0])-3;
                var t2 = parseInt(s[1]);
                s = t1+':'+t2;
                for(var i=0;i<50;i++){
                    var s1 = parseInt(s.split(':')[0]);
                    var s2 = parseInt(s.split(':')[1])+30;
                    if(s2 == 60){
                        s1+=1;
                        s2 = "00"
                    }
                    if(s1 == 24){
                        s1= "0";
                    }
                    s1 = s1<10?'0'+s1:s1;
                    s = s1+":"+s2;
                    arr.push(s1+":"+s2);
                }
                arr.forEach(item=>{
                    if(item=='00:00'){
                        this.date.push({time:item,checked:false,flag:'two'});
                    }else{
                        this.date.push({time:item,checked:false});
                    }

                });
                var s2 = this.t1.match(/\d+/g);

                var h1 = s2[0];
                var m1 = s2[1];
                s2 = h1+':'+m1;

                var s3 = this.t2.match(/\d+/g);

                var h2 = s3[0];
                var m2 =s3[1];
                s3 = h2+':'+m2;


                this.date.map((item,index)=>{
                    if(item.time==s2){
                        this.start = index;
                    }
                    if(item.time==s3){
                        this.end = index;
                        return;
                    }
                });
                for (var j=this.start;j<=this.end;j++){
                    this.date[j].checked = true;
                }


            },
            change(index2,checked){
                    var len =this.date.filter((val,key)=>{
                       if(val.checked == false){
                           return val;
                       }
                    });
                    if(len.length<50){
                        if(index2>this.end){
                            this.end = index2;
                        }else if(index2<=this.end && index2>=this.start){
                            this.end = index2-1;
                        }else if(index2<this.start){
                            this.start = index2;
                        }
                    }else if(len.length==50){
                        this.start = index2;
                        this.end = index2;
                    }
                    this.date.map((item,index)=>{
                        if(index>=this.start && index<=this.end){
                            this.date[index].checked = true;
                        }else{
                            this.date[index].checked = false;
                        }
                    });
                    console.log(this.start+','+this.end);

            },
            confirm(){
                var first,last,next;
                this.date.forEach((item,index)=>{
                    if(item.flag){
                        next = index;
                    }
                });
                console.log(next);
                this.date.map((item,index)=>{
                   if(index==this.start){

                       first= this.start>next?'明天 '+item.time:'今天 '+item.time;
                   }
                    if(index==this.end){
                        last= this.end>next?'明天 '+item.time:'今天 '+item.time;
                    }

                });
                [this.t1,this.t2]=[first,last];

                if(this.start<5){
                    Toast('所选时间段已过期,或部分过期');
                }else{
                    this.show = false;
                }
                console.log(this.t1+','+this.t2);
            },
            settle(){
                this.$router.push('/settle');

            }
        }
    }
</script>

<style scoped lang="less">
    .accounts{
        &>div{
            width: 100%;
            position: fixed;
            bottom: 1%;
            padding: 0 3%;
            p{
                width: 40%;
                display: inline-block;
                background-color: #009688;
                height: 50px;
                line-height: 50px;
            }
            p:nth-child(1){
                width: 70%;
                border-radius: 25px 0 0 25px;
                background-color: #333;
                color: #fff;
                padding-left: 10px;
                font-size: 17px;
                box-sizing: border-box;
            }
            p:nth-child(2){
                width: 24%;
                border-radius: 0 25px 25px 0;
                padding-left: 20px;
                box-sizing: border-box;
                color: #fff;
                font-size: 17px;
                font-weight: bold;
            }
        }


    }
    .van-nav-bar__title{
        color: #fff;
    }
    .van-nav-bar__left .van-icon , .van-nav-bar__text{
        color:#fff;
    }
    .head{
        position: fixed;
        width: 100%;
        z-index: 100;
        top: 0;
    }
    .banner{

        height: 200px;
        width: 96%;
        margin: 0 auto;
        margin-top: 50px;
        border-radius: 14px;
        img{
            width: 100%;
            height: 200px;
            border-radius: 14px;

        }
        .custom-indicator {
            position: absolute;
            right: 8px;
            bottom: 8px;
            padding: 4px 8px;
            color: #fff;
            font-size: 12px;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 10px;
        }
    }
    .shop{
        width: 96%;
        margin: 12px auto;
        border-bottom: 1px solid #ccc;
        p:nth-child(1){
            text-align: center;
            margin: 4% 0;
        }
        p:nth-child(2){
            margin-bottom: 3%;
            span:nth-child(1){
                margin-left: 5%;
                span{
                    vertical-align: top;
                    margin-left: 5px;
                }
            }
            &>span:nth-child(2){
                float: right;
                margin-right: 5%;
            }
        }

    }
    .addr{
          border-radius: 12px;
          width: 96%;
          margin: 10px auto;
          &>div{
              display: inline-block;
          }
      }
    .changeTime{
        width: 96%;
        margin: 10px auto;

        &>div{
            border-radius: 10px;
            text-align: center;
            div{
                padding: 6px 0;
            }
            div:nth-child(2){
                color: #009688;
            }
        }

    }
    .explain{
        width: 100%;
        img{
            width: 100%;
        }
    }
    .btn{
        position: relative;


        .active1{
            margin-top: 30px;
            button{
                border: none;
                padding: 8px 12px;
                margin: 4px;
                background-color:#f0eeee;
                border-radius: 5px;
            }
        }
        .title{
            position: absolute;
            top: -5px;
            height: 26px;
            background-color: #eee;
            border-radius: 15px 15px 0 0;
            color: #ADADAD;
            width: 100%;
        }
        .bottom{
            p{
                width: 50%;
                display: inline-block;
            }
        }

    }
    .d1{
        background-color: #009688!important;
        color: #fff;
    }
</style>