
import axios from 'axios'

export default {
    namespaced:true,
    state:{
        user:{},
        key:'',
        response:{},
        phone:''
    },
    actions:{
        loginWithEmailAndPassword ({commit}, userData) {
            return axios.post('/api/v1/users/login', userData)
              .then(res => {
                const user = res.data
                localStorage.setItem('meetuper-jwt', user.token)
                commit('setAuthUser', user)
              })
          },

          loginWithOtp({commit},phone){
              const pkey = Math.random().toString(36).substring(7)
              const data ={
                "phoneNum":phone,
                "expireIn":300,
                "digit":4
              }
              const headers = {
                'Content-Type': 'application/json',
                'x-api-key':'2dLMFw5DXoZPyInktCEh9QvXajbg0tOJ'
              }

              return axios.put('https://api.thebigbox.id/sms-otp/1.0.0/otp/'+pkey,data,
              {
                    headers: headers
              })
              .then(res => {
                const response = res.data
                console.log(response);
                commit('setKeyState', pkey)
                commit('setPhoneNumber',phone)
              })
          },

          sendCodeOtp({commit},code){
              const data={
                "maxAttempt": 0,
                "otpstr": code,
                "expireIn": 300,
                "digit": 4
              }

              const headers = {
                'Content-Type': 'application/json',
                'x-api-key':'2dLMFw5DXoZPyInktCEh9QvXajbg0tOJ'
              }

              return axios.put('https://api.thebigbox.id/sms-otp/1.0.0/otp/'+state.pkey+'/verifications',data,
              {
                    headers: headers
              })
              .then(res => {
                const response = res.data
              })

          }
    },
    mutations:{
        setKeyState(state,key){
            return state.key = key
        },
        setPhoneNumber(state,phone){
            return state.phoneNum = phone
        }

    }

}