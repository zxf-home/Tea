<template>
    <div>
        <div class="login-head">
            <van-nav-bar
                    title="登入"
                    left-text="返回"
                    left-arrow
                    @click="onClickLeft"
                    :style="{background:'#299f94'}"
            />
        </div>
        <div class="logo">
            <div>
                <img :src="img" alt="">
            </div>
        </div>
        <div class="verification">
            <van-cell-group>

                <van-field
                        v-model="phone"
                        label="手机号"
                        placeholder="请输入手机号"
                />
                <!--            获取验证码-->
                <van-field
                        v-model="sms"
                        center
                        clearable
                        label="短信验证码"
                        placeholder="请输入短信验证码"

                >
                    <van-button v-if="send" :style="{backgroundColor:'#299f94'}" slot="button" size="small" type="primary" @click="sendVerify" >发送验证码</van-button>
                    <van-button v-else :style="{backgroundColor:'transparent',borderColor:'transparent',fontSize:'16px',fontWeight:'bold'}"  slot="button" size="small" type="default" disabled >{{time}}</van-button>
                </van-field>

            </van-cell-group>
            <div class="login-btn">
                <van-button :style="{backgroundColor: '#299f94'}" type="primary" round size="large" @click="login">登入</van-button>
            </div>
        </div>
    </div>

</template>

<script>
    import { Field,Button,CellGroup,NavBar,Toast } from 'vant';

    export default {
        name: "MineLogin",
        data(){
            return{
                phone:'',
                sms:'',
                send:true,
                time:60,
                img:require('../../assets/images/logo.jpg'),
                reg :/^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[012356789][0-9]{8}|17[012356789][0-9]{8}|14[012356789][0-9]{8}|1349[0-9]{7})$/
            }
        },
        methods:{
            onClickLeft(){
                this.$router.push('/home');
            },
            login(){
                if(this.phone != '' && this.sms != ''){
                    if(!this.reg.test(this.phone)){
                        this.phone = '';
                        Toast('手机号格式错误');
                    }else{
                        if(this.sms == '123'){
                            Toast.success('登录成功');
                            localStorage.userInfo = this.phone;
                            this.$router.push('/home');
                            this.phone = '';
                            this.sms = '';
                        }else{
                            this.sms = '';
                            Toast('验证码错误');
                        }
                    }
                }else{
                    Toast('手机号或验证码不能为空');
                }
            },
            sendVerify(){
                if(this.phone === ''){
                    Toast('手机号不能为空!');
                }else if(!this.reg.test(this.phone)){
                    this.phone = '';
                    Toast('手机号格式错误');
                }else{
                    Toast('验证码已发送请注意接收,未接收到默认123');
                    this.send = false;
                    this.timer = setInterval(()=>{
                        this.time -= 1;
                        if(this.time === 0){
                            clearInterval(this.timer);
                            this.time = 60;
                            this.send = true;
                        }

                    },1000);

                }

            }
        },
        components:{
            [Field.name]:Field,
            [Button.name]:Button,
            [CellGroup.name]:CellGroup,
            [NavBar.name]:NavBar,
            [Toast.name]:Toast ,
        }
    }
</script>

<style scoped lang="less">
    .logo{
        width: 100%;
        text-align: center;
        margin-top: 20%;
        img{
            width:40%;
        }
    }
    .verification{
        margin-top: 20%;
    }
    .login-btn{
        margin:10% 4% 0 4%;

    }
    .van-nav-bar__title{
        color: #fff;
    }
    .van-nav-bar__left .van-icon , .van-nav-bar__text{
        color:#fff;
    }
    .van-nav-bar__text:active{
        background: transparent;
    }
</style>