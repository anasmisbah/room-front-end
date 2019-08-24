import axios from 'axios'

export default {
    namespaced : true,
    state:{
        items:[],
        item:{}
    },
    actions:{
        fetchRoom ({state,commit}){
            return axios.get()
            .then(res =>{
                const rooms = res.data
                commit('setItem',{resource: 'rooms', item: rooms},{root: true})
                return state.items
            })
        },
        fetchRoomById({state,commit},roomId){
            commit('setItem',{resource:'rooms',item:{}},{root: true})
                return axios.get()
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
        deleteRoom(){

        }
    }
}