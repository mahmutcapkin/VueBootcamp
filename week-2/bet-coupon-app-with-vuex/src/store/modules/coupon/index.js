
const coupon = {
    namespaced: true,
    state: {
         list: []
    },
    getters: {
        _getList(state) {
            return state.list || [];
        },
        _getCouponRatio(state) {
           if(state.list.length>0){
            const totalRatio = state.list.map(x=>x.ratio).reduce((pre, next) => pre * next)
            return totalRatio
           }
           return 0
        }
    },
    mutations: {
        deleteItem(state, id) {
            state.list = state.list.filter(i => i.id !== id)
        },
        addItem(state,coupon){
            console.log(coupon);
            state.list.push(coupon);
        }
    },
    actions: {
         addMatch({commit}, item) {
                console.log(item);
                commit('addItem', item)     
           },
         deleteMatch({commit}, itemId){
             console.log(itemId);
                    commit('deleteItem', itemId)     
            }           
        },

}


export default coupon;