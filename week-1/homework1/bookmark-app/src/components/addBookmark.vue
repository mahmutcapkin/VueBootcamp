<template>
   <div class="container">
        <label for="title">Title</label>
    <input type="text" id="title"  class="mr-5 ml-5" v-model="bookMark.title" />
    <hr>
      <label for="description">Description</label>
    <input type="text" id="description"   class="mr-5 ml-5"   v-model="bookMark.description"/>
    <hr>
    <label for="link">Link</label>
     <input type="text" id="link"   class="mr-5 ml-5"  v-model="bookMark.link" />
      <hr>
    <button class="btn btn-primary btn-sm" @click="sendBookmark"> Ekle</button>
   </div>
</template>

<script>
export default {
    data(){
        return{
            bookMark:[{
                title:null,
                description:null,
                link:null
            }]
        }
    },
    methods:{
        sendBookmark(){
            this.$emit('add-bookmark',this.bookMark);
            this.bookMark.title=null,
            this.bookMark.description=null,
            this.bookMark.link=null
        }
    }
}
</script>