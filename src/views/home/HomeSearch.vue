<template>
    <div>
        <van-search
                v-model="value"
                placeholder="搜索附近位置查找附近茶室"
                shape="round"
                show-action
                background = "#299f94"
                @click="onSearch"
        >
            <div slot="label" ><router-link to="/mine"><van-icon name="manager" size="26px" color="#fff"/></router-link></div>
            <div slot="action"><router-link to="/neighbour"><van-icon name="fire" size="26px" color="#fff" /></router-link></div>
        </van-search>
    </div>
</template>

<script>
    import { Search,Icon } from 'vant';

    export default {
        name: "HomeSearch",
        data(){
            return{
                value:''
            }
        },
        components:{
            [Search.name]:Search,
            [Icon.name]:Icon,

        },
        methods:{
            onSearch(){
                console.log('ok');
            }
        }

    }
</script>

<style scoped>
    .van-search__content{
        background-color: #fff;
    }
    .van-search__content{
        margin-left: 40px;
        box-sizing: border-box;
    }
    .van-search__label>div{
        position: absolute;
        left: 10px;
        top: 15px;
    }
    .van-search__action >div{
        position: relative;
        top: 4px;
        font-size: 16px;
    }
</style>