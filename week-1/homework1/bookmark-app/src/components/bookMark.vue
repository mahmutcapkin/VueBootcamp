<template>
     <div class="container">
      <div class="bookmark--app--container">

        <div class="bookmark-item" v-for="bookmark in dataList" :key="bookmark.id" >

            <div v-if="!bookmark.edit">
                 <div class="header">
            <h3>{{bookmark.title}}</h3>
            <button class="btn-sm btn-danger" @click="$emit('delete-bookmark',bookmark)">Kaydı Sil</button>
          </div>
          <p class="mt-20 mb-20">{{bookmark.description}}</p>
          <button class="btn-primary btn-sm" @click="openLink(bookmark.link,bookmark.target)">Göster</button>
           <button class="btn-danger btn-sm ml-10" @click="bookmark.edit=!bookmark.edit">Update</button>
            </div>

             <div v-else>
              <div class="header">
           <input type="text" placeholder="title giriniz..." v-model="bookmark.title">
            <button class="btn-sm btn-danger" @click="$emit('delete-bookmark',bookmark)">Kaydı Sil</button>
          </div>
          <textarea rows="5" class="mt-20 mb-20 " v-model="bookmark.description"></textarea>
         <input type="text" placeholder="link giriniz..." v-model="bookmark.link">
           <button class="btn-danger btn-sm ml-10" @click="$emit('update-bookmark',bookmark)">Save</button>
         </div>
        </div>


      </div>
    </div>
</template>

<script>
export default {
    props:["dataList"],
    data(){
        return{
        }
    },
    methods:{
        openLink(link,target){
            window.open(link,target);
        }
    },
}
</script>