<template>
<v-row>
    <v-col class="pa-10">
    <v-card
      :elevation="elevation"
    >
      <v-img
        class="white--text"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title class="align-end fill-height">
            <v-avatar
          :color="color"
          :size="avatarSize"
        >
          <img
            src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
            alt="avatar"
          >
        </v-avatar></v-card-title>
      </v-img>

      <v-card-text class="headline">Name</v-card-text>
      <v-card-text class="title">Email</v-card-text>
      
      
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-card-actions class="mt-10">
            <v-btn outlined v-on="on">Edit Profile</v-btn>
          </v-card-actions>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Nama" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-file-input display-size counter multiple label="Avatar"></v-file-input>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Update</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
    </v-col>
</v-row>
</template>

<script>
export default {
    data: () => ({
        avatarSize:100,
        color: 'primary',
        actions: true,
        elevation: 999,
         dialog: false,
    }),
}
</script>

<style>

</style>