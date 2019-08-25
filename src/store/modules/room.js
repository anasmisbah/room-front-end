import axios from 'axios'

export default {
    namespaced : true,
    state:{
        items:[],
        item:{}
    },
    actions:{
        fetchRoom ({state,commit}){
            commit('setItems',{resource: 'rooms', items: []},{root: true})
            return axios.get('http://localhost:3000/api/room')
            .then(res =>{
                const rooms = res.data
                commit('setItems',{resource: 'rooms', items: rooms},{root: true})
                return state.items
            })
        },
        fetchRoomById({state,commit},roomId){
            commit('setItem',{resource:'rooms',item:{}},{root: true})
                return axios.get('/room/'+roomId)
                .then(res =>{
                    const room = res.data
                    commit('setItem',{resource:'rooms',item: room},{root: true})
                    return state.item
                })
        },
        createRoom(){
            
        },
        editRoom(){

        },
        deleteRoom({state,commit},roomId){
            return axios.delete('http://localhost:3000/api/room/delete/'+roomId)
                .then(res =>{
                })
        }
    }
}