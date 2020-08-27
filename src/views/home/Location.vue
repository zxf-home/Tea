<template>
    <div>
        <div class="top">
            <div class="login-head">
                <van-nav-bar
                        title="城市定位"
                        left-arrow
                        @click-left="onClickLeft"
                        :style="{background:'#299f94'}"
                />
            </div>
            <div class="head">
                <div class="search">
                    <van-search placeholder="请输入搜索关键词" :style="{backgroundColor: '#299f94'}"/>
                </div>
                <van-button type="primary" size="mini" :style="{backgroundColor:'#299f94',borderColor:'#fff'}">搜索</van-button>
            </div>
        </div>

        <div class="location">
            <div class="curloca">
                <p>定位城市</p>
                <van-button type="primary" :style="{backgroundColor:'#fff',borderColor:'#fff',padding:'0 20px',height:'36px',lineHeight:'36px',color:'#000'}">泉州市</van-button>
            </div>
            <City />
        </div>
    </div>

</template>

<script>
    // import '../../assets/js/jquery-1.11.1.min';
    import City from "./City";
    import {NavBar,Search,Button} from 'vant';

    export default {
        name: "location",
        data(){
            return{

            }
        },
        mounted(){

        },
        methods:{
            onClickLeft(){
                this.$router.push('/');
            }
        },
        components:{
            [NavBar.name]:NavBar,
            [Search.name]:Search,
            [Button.name]:Button,
            City

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
    .top{
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 200;
        .head{
            background-color: #299f94;
            .search{
                width: 80%;
                display: inline-block;
                vertical-align: middle;
            }
        }
        .van-search{
            background-color: #299f94;
            border: none;


        }
        .van-button{
            height: 36px;
            margin-top: 5px;
            font-size: 14px;
            padding:0 16px;
        }

    }
    .location{
        margin-top: 100px;
        .curloca{
            padding: 4%;
            height: 70px;
            background-color: #eeeeee;
            p{
                margin-bottom: 10px;
                color: #888;
                font-size: 14px;
            }
        }
    }

</style>