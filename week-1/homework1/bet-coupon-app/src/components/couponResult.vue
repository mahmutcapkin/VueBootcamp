<template>
          <div class="card card-light multiply--container mt-20">
            <h4 class="text-center mb-10">Mislini Seç</h4>
            <div class="multiply--buttons mb-10 d-flex justify-content-center align-items-center">
              <button class="btn-sm" v-for="money in moneys" :key="money" @click="defaultMoney=money">{{money}}</button>
            </div>
            <div class="coupon--total--container mt-20">
              <div class="d-flex justify-content-between align-items-center font-weight-bold">
                <span>Toplam Oran</span>
                <span class="text-info">{{couponratio.toFixed(2)}}</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-5">
                <span>Kupon Tutarı</span>
                <span class="font-weight-bold">{{defaultMoney}} TL</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-5">
                <span>Tahmini Kazanç</span>
                <span class="font-weight-bold text-info">{{estimateEarning.toFixed(2)}} TL</span>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  props:["couponratio"],
  data(){
    return{
      moneys:[5,10,20,30,50,100,200,500,1000,1500,2500],
      defaultMoney:10
    }
  },
  computed:{
    estimateEarning(){
      return this.couponratio.toFixed(2) * this.defaultMoney;
    }
  }
}
</script>