<template>
      <div class="container">
      <div class="class--list--app">
        <div class="card">
          <ul class="class-list">
              <li v-for="style in styles" :key="style.name">
              <label>
                <input v-model="style.state" class="mr-5" type="checkbox" />
                <span>{{style.name}}</span>
              </label>
            </li>
          </ul>
          <textarea rows="5" :class="changeTextArea"></textarea>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            styles:[    
                { name:"Background Color", state:false},
                { name:"Border", state:false},
                { name:"Border Radius", state:false},
                { name: "Color", state:false},
                { name:"Font Bold", state:false},
                { name:"Font Italic", state:false},   
                ]
        }
    },
    computed:{
        changeTextArea(){
            return{
                backgroundColor:this.styles[0].state,
                border:this.styles[1].state,
                radius:this.styles[2].state,
                color:this.styles[3].state,
                bold:this.styles[4].state,
                italic:this.styles[5].state,
            }
        }
    }
}
</script>

<style >
.backgroundColor{
    background-color: aquamarine;
}
.border{
    border:3px solid violet;
}
.radius{
    border-radius: 8px;
}
.color{
    color:crimson;
}
.bold{
    font-weight: bold;
}
.italic{
    font-style: italic;
}
</style>
