<template>  
    <div class="container css--class--app">
      <div class="card text-center">
        <ul class="css--palette text-center" >
            <li @click="changeCss(css)" v-for="css in cssList" :key="css.name">{{css.name}}</li>
        </ul>
        <div class="result-box" :style="{backgroundColor:color}"></div>
      </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
         cssList:[
              {name:"red",state:"false"},
              {name:"blue",state:"false"},
              {name:"green",state:"false"},
           ],
           color:""
        }
    },
    methods:{
        changeCss(e){
            if(e.state){
              this.color=e.name;
              e.state=false;
            }
            e.state=true;

        }
    }
}

</script>
