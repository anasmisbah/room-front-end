import Vue from 'vue'
import VueRouter from 'vue-router'

// import pages component
import Pagedashboard from '@/pages/PageDashboard.vue'
import PageBuilding from '@/pages/PageBuilding.vue'
import PageRoom from '@/pages/PageRoom.vue'
import PageUser from '@/pages/PageUser.vue'
import PageLogin from '@/pages/PageLogin.vue'
import PageRegister from '@/pages/PageRegister.vue'
import PageOtpInputNumber from '@/pages/PageInputNumberOtp.vue'
import PageOtpSendCode from '@/pages/PageSendCodeOtp.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path : '/dashboard',
            name : 'dashboard',
            component : Pagedashboard
        },
        {
            path : '/building',
            name : 'building',
            component : PageBuilding
        },
        {
            path : '/room',
            name : 'room',
            component : PageRoom
        },
        {
            path : '/user',
            name : 'user',
            component : PageUser
        }
        ,
        {
            path : '/login',
            name : 'login',
            component : PageLogin
        }
        ,
        {
            path : '/register',
            name : 'register',
            component : PageRegister
        }
        ,
        {
            path : '/OTP/inputphone',
            name : 'otp',
            component : PageOtpInputNumber
        }
        ,
        {
            path : '/OTP/inputcode',
            name : 'otpcode',
            component : PageOtpSendCode
        }
    ],
    mode : 'history'
})

export default router