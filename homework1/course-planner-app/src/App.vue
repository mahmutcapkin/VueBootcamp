<template>
  <div>
       <header>Kurs Planlaması</header>
    <div class="container">
      <div class="course--planner-app--container">
        <addCourse @add-course-item="addNewCourse"/>
        <viewCourse :data="courseList" @change-status="changeStatus"/>
        <resultCourse :courseCount="this.courseList.length" :saveCount="this.courseList.filter(x=>x.status==true).length" :notsaveCount="this.courseList.filter(x=>x.status==false).length" />
      </div>
    </div>
  </div>
</template>

<script>
import AddCourse from "@/components/AddCourse";
import ResultCourse from "@/components/ResultCourse";
import ViewCourse from "@/components/ViewCourse";
export default{
  components:{
    AddCourse,
    ResultCourse,
    ViewCourse
  },

  data(){
    return{
      courseList:[
       {id:1,text:"Course 1",status:false},
       {id:2,text:"Course 2",status:false},
       {id:3,text:"Course 3",status:false},
       {id:4,text:"Course 4",status:false},
       {id:5,text:"Course 5",status:false}
      ],
          saveCount:0,
          notSaveCount:0,
          course:0
       
    }
  },
  methods:{
      addNewCourse(todo){
        console.log(todo);
          this.courseList.push({
            id:new Date().getTime(),
            text:todo,
            status:false
          });
        },
      changeStatus(course){
      const index =this.courseList.findIndex(x=>x.id==course.id);
      //  console.log(this.courseList[index]);
      //  console.log("****");
        this.courseList[index].status=!this.courseList[index].status;
        // console.log(this.courseList[index].status);
        }
    }
}

</script>

<style>

</style>
