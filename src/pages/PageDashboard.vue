<template>
<v-row>
    <v-col class="mx-auto">
        <v-card
      :width="width"
    >
      <v-img
        class="white--text"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title class="align-end fill-height"><v-icon x-large dark>people</v-icon></v-card-title>
      </v-img>

      <v-card-text>User Data</v-card-text>
      <v-card-actions>
            <v-btn :to="{name:'user'}" outlined>List User</v-btn>
      </v-card-actions>
    </v-card>
    </v-col>

    <v-col class="mx-auto">
        <v-card
      :width="width"
    >
      <v-img
        class="white--text"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title class="align-end fill-height"><v-icon x-large dark>home_work</v-icon></v-card-title>
      </v-img>

      <v-card-text>Building Data</v-card-text>
      <v-card-actions>
            <v-btn :to="{name:'building'}" outlined>List Building</v-btn>
      </v-card-actions>
    </v-card>
    </v-col>

    <v-col class="mx-auto">
        <v-card
      :width="width"
    >
      <v-img
        class="white--text"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title class="align-end fill-height"><v-icon x-large dark>business</v-icon></v-card-title>
      </v-img>

      <v-card-text>Room Data</v-card-text>
      <v-card-actions>
            <v-btn :to="{name:'room'}" outlined>List Room</v-btn>
      </v-card-actions>
    </v-card>
    </v-col>
    
</v-row>
</template>

<script>
export default {
    data: () => ({
      width: 344,
    }),
}
</script>

<style scoped>
</style>