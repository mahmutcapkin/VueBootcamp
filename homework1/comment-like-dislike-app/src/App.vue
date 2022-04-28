<template>
  <div>
     <header>Comment Like/Dislike App</header>
    <div class="container">
      <div class="comment--like--dislike--app">
       <commentLike :data="commentLikeList"/>
      </div>
    </div>
  </div>
</template>

<script>
import commentLike from "@/components/commentLike";

export default {
  components:{
    commentLike
  },
  data(){
    return{
      commentLikeList:[
        {id:1,text:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,.", like:5,dislike:5},
        {id:2,text:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,", like:6,dislike:6},
        {id:3,text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words", like:7,dislike:7},
        {id:4,text:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ", like:4,dislike:4},     
      ]
    }
  }
}
</script>

<style>
</style>
