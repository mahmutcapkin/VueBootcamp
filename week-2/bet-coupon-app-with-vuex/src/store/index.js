import { createStore } from "vuex";
import competition from '@/store/modules/competition'
import coupon from '@/store/modules/coupon'
const store = createStore({
    state: {
    },
    getters: {
    },
    mutations:{
    },
    modules: {
        competition,
        coupon
    }
});
export default store;