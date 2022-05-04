<template>
    <div class="coupon-item">
        <div class="w-100 mb-5 d-flex justify-content-between align-items-center">
            <button @click="$store.dispatch('coupon/deleteMatch',coupon.id)">x</button>
            <span class="font-weight-bold">{{coupon.homeowner }} x {{coupon.away }}</span>
            <span class="font-weight-bold text-info">{{coupon.ratio}}</span>
        </div>
        <div class="w-100 d-flex justify-content-between align-items-center">
            <small class="mt-5">Maç Sonucu : <span class="font-weight-bold">{{coupon.side}}</span></small>
            <small class="text-muted">Saat : {{coupon.hour }}</small>
         
        </div>
        
    </div>
</template>

<script>
export default {
     props:["coupon"]
}
</script>