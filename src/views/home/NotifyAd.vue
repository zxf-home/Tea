<template>
    <van-notice-bar mode="closeable">
        通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容
    </van-notice-bar>
</template>

<script>
    import { NoticeBar } from 'vant';
    export default {
        name: "NotifyAd",
        components:{
            [NoticeBar.name]:NoticeBar
        }
    }
</script>

<style scoped>

</style>