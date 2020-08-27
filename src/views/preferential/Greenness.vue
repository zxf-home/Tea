<template>
    <div>
        <van-coupon-cell
                :coupons="coupons"
                :chosen-coupon="chosenCoupon"
                @click="showList = true"
        />

        <!-- 优惠券列表 -->
        <van-popup v-model="showList" position="bottom">
            <van-coupon-list
                    :coupons="coupons"
                    :chosen-coupon="chosenCoupon"
                    :disabled-coupons="disabledCoupons"
                    @change="onChange"
                    @exchange="onExchange"
            />
        </van-popup>

    </div>
</template>

<script>
    const coupon = {
        available: 1,
        condition: '无使用门槛\n最多优惠12元',
        reason: '',
        value: 500,
        name: '优惠券名称',
        startAt: 1550014000,
        endAt: 1585019000,
        valueDesc: '5',
        unitDesc: '元'
    };
    const coupon2 = {
        available: 1,
        condition: '无使用门槛\n最多优惠12元',
        reason: '',
        value: 600,
        name: '优惠券名称',
        startAt: 1540014000,
        endAt: 1541119000,
        valueDesc: '6',
        unitDesc: '元'
    };
    import { CouponCell, CouponList,Popup } from 'vant';
    export default {
        name: "Greenness",
        data(){
            return{
                showList:false,
                chosenCoupon: -1,
                coupons: [coupon],
                disabledCoupons: [coupon2]
            }
        },
        components:{
            [CouponCell.name]:CouponCell,
            [CouponList.name]:CouponList,
            [Popup.name]:Popup,
        },
        methods: {
            onChange(index) {
                this.showList = false;
                this.chosenCoupon = index;
            },
            onExchange(code) {
                this.coupons.push(coupon);
            }
        }
    }
</script>

<style scoped>

</style>