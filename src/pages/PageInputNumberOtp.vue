<template>
  <v-card class="elevation-12 mx-auto" :width="width">
    <v-toolbar
    color="primary"
    dark
    flat
    >
    <v-toolbar-title>Login With OTP</v-toolbar-title>
    <div class="flex-grow-1"></div>
    </v-toolbar>
    <v-card-text>
    <v-form>
        <v-text-field
        label="Nomor Hp/telepon"
        name="phone"
        prepend-icon="contacts"
        type="text"
        v-model="phone"
        ></v-text-field>
    </v-form>
    </v-card-text>
    <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn @click="loginOtp" color="info">Send Phone Number</v-btn>
    </v-card-actions>
    <router-view></router-view>
</v-card>
</template>

<script>
import { mapActions,mapState } from 'vuex'
export default {
data() {
    return {
         width:500,
         phone:""
    }
},
methods: {
    ...mapActions('auth',['loginWithOtp']),
    loginOtp (){
        this.loginWithOtp(this.phone)
        
    }
},

}
</script>

<style>

</style>