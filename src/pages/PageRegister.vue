<template>
  <v-card class="elevation-12 mx-auto" :width="width">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Register Room</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Nama"
                    name="nama"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>

                  <v-text-field
                    id="password confirmation"
                    label="password confirmation"
                    name="password_confirmation"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn :to="{name:'otp'}" color="info">Login With OTP</v-btn>
                <v-btn :to="{name:'login'}" color="warning">Login</v-btn>
                <div class="flex-grow-1"></div>
                <v-btn color="primary">Register</v-btn>
              </v-card-actions>
            </v-card>
</template>

<script>
export default {
    data() {
        return {
            width:500,
        }
    },
}
</script>

<style>

</style>