const app = Vue.createApp({
  data() {
    return {
      value: "",
    };
  },
  methods:{
    showAlert(){
      alert("alert gösterildi")
    },
    writeText(event){
      this.value=event.target.value
    }
  }
});
app.mount("#exercise");
