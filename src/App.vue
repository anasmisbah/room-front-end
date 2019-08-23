<template>
  <v-app id="inspire">
    <!-- nav -->
    <TheNavDrawer/>
    
    <!-- App Bar -->
    <TheAppBar/>

    <!-- content -->
    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- footer -->

    <TheFooter/>
  </v-app>
</template>

<script>
  import TheNavDrawer from '@/components/shared/TheNavDrawer'
  import TheFooter from '@/components/shared/TheFooter'
  import TheAppBar from '@/components/shared/TheAppBar'
  export default {
    components:{
      TheNavDrawer,
      TheFooter,
      TheAppBar
    },
    props: {
      source: String,
    },
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>