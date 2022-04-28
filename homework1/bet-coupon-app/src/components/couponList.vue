<template>
 
<div class="coupon--total--container">
    <div class="card my-coupon">
        <div class="card--header">
            <h4>Kuponum</h4>
        </div>
            <div class="card--body">
                <couponInfo v-for="coupon in couponList" :key="coupon.id" :coupon="coupon"/>
            </div>
    </div>
            <couponResult :couponratio="ratio" />
</div>

</template>

<script>
import couponInfo from "@/components/couponInfo"
import couponResult from "@/components/couponResult"
export default {
    props:["couponList","ratio"],
    components:{
        couponInfo,
        couponResult
    }
}
</script>