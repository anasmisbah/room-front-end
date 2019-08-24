import axios from 'axios'

export default {
    namespaced : true,
    state:{
        items:[],
        item:{}
    },
    actions:{
        fetchBuilding ({state,commit}){
            return axios.get()
            .then(res =>{
                const buildings = res.data
                commit('setItem',{resource: 'building', item: buildings},{root: true})
                return state.items
            })
        },
        fetchBuildingById({state,commit},buildingId){
            commit('setItem',{resource:'buildings',item:{}},{root: true})
                return axios.get()
                .then(res =>{
                    const building = res.data
                    commit('setItem',{resource:'buildings',item: building},{root: true})
                    return state.item
                })
        },
        createBuilding(){
            
        }
    }
}