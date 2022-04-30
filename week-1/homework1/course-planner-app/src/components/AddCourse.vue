<template>
 <div class="card">
    <div class="user--action--container">
        <div class="form-group">
            <label>Kursun Adı</label>
            <input type="text" v-model="courseText" @keydown.enter="sendCourse" />
        </div>
        <button class="btn-primary"  @click="sendCourse">Kurs Ekle</button>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            courseText:null
        }
    },
    methods:{
        sendCourse(){
            this.$emit("add-course-item",this.courseText);
            this.courseText="";
        }
    }
}
</script>

<style >

</style>