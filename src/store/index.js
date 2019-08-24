import Vue from 'vue'
import Vuex from 'vuex'

// modules
import buildings from './modules/building'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        buildings,
        rooms,
    },
    mutations:{
        setItems(state,{resource,items}){
            state[resource].items = items
        },
        setItem(state,{resource,item}){
            state[resource.item = item]
        }
    }
})