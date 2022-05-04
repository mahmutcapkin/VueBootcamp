<template>
 <div class="bet--coupon--app d-flex justify-content-between align-items-start">
    <competitionList :competitions="matches"/>
    <couponList :couponList="coupons" />
 </div>
</template>

<script>
import { mapGetters} from "vuex"
import competitionList from "@/components/competitionList"
import couponList from "@/components/couponList"
export default {
  components:{
    competitionList,
    couponList
  },
  data(){
    return{
      
    }
  },
  computed:{
    ...mapGetters({
        matches:"competition/_getList",
        coupons:"coupon/_getList"
    })
  }


}
</script>