<template>
  <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <router-link :to="{name: 'dashboard'}">
          <v-list-item>
            <v-list-item-action>
              <v-icon>dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link :to="{name: 'building'}">
          <v-list-item>
            <v-list-item-action>
              <v-icon>home_work</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Building</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link :to="{name: 'room'}">
          <v-list-item>
            <v-list-item-action>
              <v-icon>room</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Room</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
      <template v-slot:append>
          <div class="pa-2">
            <v-btn block>Logout</v-btn>
          </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
export default {
data: () => ({
      drawer: null,
    }),
}
</script>

<style>

</style>