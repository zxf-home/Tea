<template>
    <!--    加盟合作-->
   <div>
       <div>
           <van-nav-bar
                   title="加盟合作"
                   left-arrow
                   @click-left="onClickLeft"
                   :style="{background:'#009688'}"
           />
       </div>
       <div class="center">
           <ul class="info">
               <li>
                   <label>所在城市(或意向开店城市)</label>
                   <input type="text" placeholder="请输入" v-model="city" @blur="show" @focus="hide">
               </li>
               <li>
                   <label>您的姓名</label>
                   <input type="text" placeholder="请输入" v-model="name" @blur="show" @focus="hide">
               </li>
               <li>
                   <label>您的电话</label>
                   <input type="text" placeholder="请输入" v-model="phone" @blur="show" @focus="hide">
               </li>
               <li>
                   <label>留言建议(可不填)</label>
                   <input type="text" placeholder="请输入" v-model="suggest" @blur="show" @focus="hide">
               </li>
           </ul>
           <div class="apply" v-show="isShow">
               <van-button type="primary" round size="large" :style="{background:'#009688',border:'none'}">提交申请</van-button>

           </div>
       </div>
    </div>
</template>

<script>
    import {NavBar,Button  } from 'vant';
    export default {
        name: "encrypt",
        data(){
            return{
                city:'',
                name:'',
                phone:'',
                suggest:'',
                isShow:true
            }
        },
        components:{
            [NavBar.name] : NavBar,
            [Button.name] : Button,
        },
        methods:{
            onClickLeft(){
                this.$router.push('/mine');
            },
            hide(){
                this.isShow = false
            },
            show(){
                this.isShow = true
            }
        },
    }
</script>

<style scoped lang="less">
    .van-nav-bar__title{
        color: #fff;
    }
    .van-nav-bar__left .van-icon , .van-nav-bar__text{
        color:#fff;
    }
    .center{
        width: 92%;
        height: 100%;
        margin: 0 auto;
        margin-top: 6%;
        .info{
            li{
                margin-bottom: 3%;
                label{
                    display: block;

                }
                input{
                    border: none;
                    outline: none;
                    border-bottom: 1px solid #ccc;
                    width: 100%;
                    height: 30px;
                    padding-bottom: 6px;
                    background-color: transparent;
                }
            }

        }
        .apply{
            position: absolute;
            width: 92%;
            bottom: 10px;
        }
    }

</style>