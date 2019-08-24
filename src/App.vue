<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items" >
           <router-link :key="item.text" :to="item.url">
          <v-list-item
            
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          
          </v-list-item>
          </router-link>
        </template>
        
      </v-list>
      <template v-slot:append>
          <div class="pa-2">
            <v-btn :to="{name:'login'}" block color="warning">Logout</v-btn>
          </div>
        </template>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down">Room<v-icon large dark>business</v-icon></span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          >
          </v-img>
          </v-avatar>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container
      >
        <v-row
        >
        <v-col>
          <router-view></router-view>
        </v-col>
        
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'dashboard', text: 'Dashboard',url:{name: 'dashboard'} },
        { icon: 'people', text: 'User' , url:{name: 'user'}},
        { icon: 'home_work', text: 'Building',url:{name: 'building'} },
        { icon: 'room', text: 'Room' , url:{name: 'room'}},
      ],
    }),
  }
</script>