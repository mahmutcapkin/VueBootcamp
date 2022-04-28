<template>
     <div>
         <div class="card mb-10 comment--item" v-for="commentlike in data" :key="commentlike">
          <p>
           {{commentlike.text}}
          </p>
          <div class="action--button--container text-right mt-10">
            <button class="btn-sm btn-success" @click="commentlike.like++">Beğendim ({{commentlike.like}})</button>
            <button class="btn-sm btn-danger" @click="commentlike.dislike++">Beğenmedim ({{commentlike.dislike}})</button>
          </div>
        </div>
     </div>
</template>

<script>
export default {
    props:["data"]
}
</script>