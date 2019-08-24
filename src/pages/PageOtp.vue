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
        prepend-icon="person"
        type="text"
        ></v-text-field>
    </v-form>
    </v-card-text>
    <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="info">Send Code</v-btn>
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