const app = Vue.createApp({
    data() {
        return {
            // fruitList: ["Elma", "Armut", "Kiraz"],
            fruitList: [{ id : 1, text : "Elma",state:false}, { id : 2, text : "Çay",state:false}, { id : 3, text : "Karpuz",state:false}],
            todoValue: null,
            checkedCount:0,
            notcheckedCount:0,
            value:"",
            
        }
    },
    methods: {
        addNewTodo() {
            this.fruitList.push({
                text : this.todoValue,
                id : new Date().getTime(),
                state:false
            });
            this.todoValue = null;
        },
        press(e){
            console.log(e)
            if(e.keyCode === 13) this.addNewTodo();
        },
        deleteItem(item) {
            console.log(item);
             this.fruitList = this.fruitList.filter(fruit => fruit !== item)
            // this.fruitList.splice(itemIndex, 1);
        },
        
        stateEvent(fruit,event){
            if(event.target.checked){

                fruit.state=true;
                console.log(event)
                this.checkedCount++
                this.notcheckedCount=this.fruitList.length-this.checkedCount 
            }
            else{
                console.log(event)
                this.checkedCount--;
                this.notcheckedCount=this.fruitList.length-this.checkedCount
            }
        },
        borderColor(e){
            if(e){
                return 'green ustu_cizili'  
            }
            else{
                return 'red'
            }
        }

    },
    computed : {
        totalCount(){
            return `${this.fruitList.length} adet kayıt vardır`
        },
        WriteChecked(){
            return `${this.checkedCount} adet işaretli kayıt vardır
                    ${this.notcheckedCount} adet işaretlenmemiş kayıt vardır`
        },

    }
})
app.mount("#app")
