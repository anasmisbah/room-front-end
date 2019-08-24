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
      <v-card-actions class="mt-10">
        <v-btn outlined>Edit Profile</v-btn>
      </v-card-actions>
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
    }),
}
</script>

<style>

</style>