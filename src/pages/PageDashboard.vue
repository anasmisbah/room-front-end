<template>
<v-row>
    <v-col class="mx-auto">
        <v-card
    max-width="344"
    class="mx-auto"
  >
    <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title class="headline">Name</v-list-item-title>
            <v-list-item-subtitle>Email</v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>

        <v-card-actions>
        <v-btn
            text
            color="deep-purple accent-4"
            :to="{name: 'user'}"
        >
            Profile
        </v-btn>
        <v-btn
            text
            color="deep-purple accent-4"
        >
            Logout
        </v-btn>
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