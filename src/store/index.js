import Vue from 'vue'
import Vuex from 'vuex'

// modules
import buildings from './modules/building'
import rooms from './modules/room'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        buildings,
        rooms,
        auth,
    },
    mutations:{
        setItems(state,{resource,items}){
            state[resource].items = items
        },
        setItem(state,{resource,item}){
            state[resource].item = item
        }
    }
})