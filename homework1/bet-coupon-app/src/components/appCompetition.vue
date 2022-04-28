<template>
 <div class="bet--coupon--app d-flex justify-content-between align-items-start">
    <competitionList :competitions="matches" @add-match="addCoupon" />
    <couponList :couponList="coupons" :ratio="couponratio"/>
 </div>
</template>

<script>
import competitionList from "@/components/competitionList"
import couponList from "@/components/couponList"
export default {
  components:{
    competitionList,
    couponList
  },
  data(){
    return{
        matches:[
          {id:1,homeowner:"Fenerbahçe", away:"Galatasaray",homewin:1.50,draw:2.2,awaywin:1.7,hour:"17.30"},
          {id:2,homeowner:"Beşiktaş", away:"Trabzon",homewin:1.40,draw:2.3,awaywin:1.9,hour:"21.45"},
          {id:3,homeowner:"Trabzon", away:"Fenerbahçe",homewin:1.3,draw:1.5,awaywin:2.3,hour:"19.30"},
          {id:4,homeowner:"Bursa", away:"Galatasaray",homewin:3.4,draw:2.7,awaywin:1.45,hour:"20.30"}     
      ],
      coupons:[],
      couponratio:1
    }
  },
  methods:{
    addCoupon(item){
      this.coupons.push(item)
      this.couponratio*=item.ratio;
    }
  }


}
</script>