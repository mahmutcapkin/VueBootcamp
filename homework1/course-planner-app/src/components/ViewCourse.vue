<template>
    <div class="card card-light mt-20">
          <h3>Aktif Kurslarım</h3>
          <ul class="list mt-20">
            <viewCourseItem v-for="todoItem in data" :key="todoItem.id" :item="todoItem"  @change-status="$emit('change-status',$event)" />
          </ul>
    </div>
</template>

<script>
import viewCourseItem from "@/components/ViewCourseItem";
export default {
    props:["data"],
    components:{
      viewCourseItem
    }
}
</script>

<style >

</style>