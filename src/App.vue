<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <router-link to="">
          <v-list-item>
            <v-list-item-action>
              <v-icon>dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="">
          <v-list-item>
            <v-list-item-action>
              <v-icon>home_work</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Building</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="">
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

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ROOM ADMIN</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; ROOM ADMIN 2019</span>
    </v-footer>

    
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>