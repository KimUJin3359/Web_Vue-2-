import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter: 0
    },
    // state 값을 변경시킬 때 사용
    getters: {
        doubleCounter: function(state) {
            return state.counter * 2;
        },
        getCounter: function(state) {
            return state.counter;
        },
    },
    //동기적 로직, 다른 이름으로 setters
    mutations: {
        addCounter: function(state) {
            return state.counter++;
        }
    },
    //비동기 로직
    actions: {
        addCounter: function(context) {
            return setTimeout(() => {
                context.commit('addCounter')
            }, 1000);
        }
    },
    modules: {
    }
})
