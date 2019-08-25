import axios from 'axios'

export default {
    namespaced : true,
    state:{
        items:[],
        item:{}
    },
    actions:{
        fetchBuilding ({state,commit}){
            commit('setItems',{resource: 'buildings', items: []},{root: true})
            return axios.get('http://localhost:3000/api/building/1/user')
            .then(res =>{
                const buildings = res.data
                commit('setItems',{resource: 'buildings', items: buildings},{root: true})
                return state.items
            })
        },
        fetchBuildingById({state,commit},buildingId){
            commit('setItem',{resource:'buildings',item:{}},{root: true})
                return axios.get('/building/'+buildingId)
                .then(res =>{
                    const building = res.data
                    commit('setItem',{resource:'buildings',item: building},{root: true})
                    return state.item
                })
        },
        createBuilding(){
            
        },
        editBuilding(){

        },
        deleteBuilding({state,commit},buildingId){
            return axios.delete('http://localhost:3000/api/building/delete/'+buildingId)
                .then(res =>{
                })
        }
    }
}