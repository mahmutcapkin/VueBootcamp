<template>
    <div class="card competition-list mr-10">
    <div class="card--header">
      <h4>Yakın Zamanda Başlayacak Müsabakalar</h4>
    </div>
    <div class="card--body">
      <competitionItem v-for="match in competitions" :key="match.id" :match="match" @add-match="$emit('add-match',$event)" />
    </div>
  </div>
</template>

<script>
import competitionItem from "@/components/competitionItem"
export default {
    components:{
        competitionItem
    },
    props:["competitions"]



}
</script>