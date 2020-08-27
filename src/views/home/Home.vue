<template>
    <div class="m_layout">
        <!--    搜索区-->
        <HomeSearch />
        <!--   通知广告-->
        <NotifyAd />
        <!--    地图内容-->
        <HomeContent />
        <!--    底部区-->
        <HomeFooter />

    </div>
</template>

<script>
    import HomeSearch from "./HomeSearch";
    import HomeContent from "./HomeContent";
    import HomeFooter from "./HomeFooter";
    import NotifyAd from "./NotifyAd";
    export default {
        data(){
            return{

            }
        },
        mounted(){
            if(!localStorage.getItem('userInfo')){
                this.$router.push('/login');
            }
        },
        components:{
            HomeSearch,
            HomeContent,
            HomeFooter,
            NotifyAd
        }
    }
</script>

<style scoped>

</style>