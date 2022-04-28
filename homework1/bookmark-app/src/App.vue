<template>
 <div>
     <header>Bookmark App</header>
      <addBookmark  @add-bookmark="addNewBookMark" />
      <bookMark  :dataList="bookmarkList"  @delete-bookmark="deleteBookMark"  @update-bookmark="updateBookMark" />
 </div>
</template>

<script>
import bookMark from "@/components/bookMark";
import addBookmark from "@/components/addBookmark";
export default {
    components:{
      bookMark,
      addBookmark
    },
    data(){
      return{
         bookmarkList:[
           {id:1,title:"Bookmark1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",link:"https://www.google.com.tr", target:"_blank",edit:false},
           {id:2,title:"Bookmark2",description:"uae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas",link:"https://www.youtube.com", target:"_blank",edit:false},
           {id:3,title:"Bookmark3",description:"ationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to in which",link:"https://www.github.com" , target:"_blank",edit:false},
           {id:4,title:"Bookmark4",description:"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum solit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est",link:"https://www.vuejs.org" , target:"_blank",edit:false},   
         ],
      }
    },
    methods:{
      addNewBookMark(bookmark){
          console.log(bookmark);
          this.bookmarkList.push({
            id:new Date().getTime(),
            title:bookmark.title,
            description:bookmark.description,
            link:bookmark.link,
            target:"_blank",
            edit:false
          });
      },
      deleteBookMark(item){
        this.bookmarkList=this.bookmarkList.filter(x=>x !==item);
      },
      updateBookMark(item){
        console.log(item);
        const index = this.bookmarkList.findIndex(x=>x===item);
        this.bookmarkList[index].title=item.title;
        this.bookmarkList[index].description=item.description;
        this.bookmarkList[index].link=item.link;
        this.bookmarkList[index].edit=false;
        console.log(this.bookmarkList[index]);

      }
    }

}
</script>

<style>

</style>
