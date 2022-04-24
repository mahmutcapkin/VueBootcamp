const app= Vue.createApp({
    data() {
      return {
        name:"Mahmut",
        age:22,
        link:"https://i.cnnturk.com/i/cnnturk/75/740x416/607fff202af1071684b468cc.jpg"
      }
    },
    methods:{
        random(){
            return Math.random();
        },
        changeName(event){
            this.name=event.target.value;
        }
    }
  }).mount('#exercise')