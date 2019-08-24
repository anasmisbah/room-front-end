import Vue from 'vue'
import VueRouter from 'vue-router'

// import pages component
import Pagedashboard from '@/pages/PageDashboard.vue'
import PageBuilding from '@/pages/PageBuilding.vue'
import PageRoom from '@/pages/PageRoom.vue'
import PageUser from '@/pages/PageUser.vue'

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
    ],
    mode : 'history'
})

export default router