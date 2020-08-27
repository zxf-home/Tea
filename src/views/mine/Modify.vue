<template>
<!--    查看修改个人信息-->
    <div class="modify">
        <div class="login-head">
            <van-nav-bar
                    title="个人信息"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
                    :style="{background:'#009688'}"
            />
        </div>
        <div class="user">
            <van-row>
                <van-col span="6">
                    <van-image
                            width="50px"
                            height="50px"
                            :src="img"
                    />
                </van-col>
                <van-col span="8">
                    <p>{{username}}</p>
                </van-col>
                <van-col span="8"></van-col>
            </van-row>
        </div>
        <div class="userInfo">
            <van-cell-group>
                <van-field
                        v-model="username"
                        label="用户名"
                        placeholder="请输入用户名"
                />
                <van-field
                        v-model="phone"
                        label="手机号"
                />
            </van-cell-group>
        </div>
        <div class="logout">
            <van-button @click="logout" type="primary" round size="large" :style="{background:'#009688',border:'none'}">安全退出</van-button>
        </div>

    </div>
</template>

<script>
    import { Image,NavBar, Row, Col, Field,CellGroup,Button} from 'vant';
    export default {
        name: "Modify",
        data(){
           return {
               username:'观月',
               phone:'',
               img:require('../../assets/images/logo.jpg')
           }
        },
        mounted(){
          this.phone = localStorage.userInfo;
        },
        methods:{
            onClickLeft(){
                this.$router.push('/mine');
            },
            logout(){
                sessionStorage.userInfo = '';
                this.$router.push('/');
            }
        },
        components:{
            [Image.name] :Image,
            [NavBar.name] :NavBar,
            [Row.name] :Row,
            [Col.name] :Col,
            [Field.name] :Field,
            [CellGroup.name] :CellGroup,
            [Button.name] :Button,
        }
    }
</script>

<style scoped lang="less">
    .modify{
        .van-nav-bar__title{
            color: #fff;
        }
        .van-nav-bar__left .van-icon , .van-nav-bar__text{
            color:#fff;
        }
        .user{
            margin :6% 4% 4%;
        }
        .logout{
            margin:10% 4%;
        }
    }



</style>