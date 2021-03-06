<template>
  <v-app>
    <v-app-bar app color="white" elevation="1" light>
      <router-link
        to="/"
        class="text-h5 font-weight-medium accent--text"
      >
        <v-img src="@/assets/logo.png" width="80"> </v-img>
      </router-link>

      <router-link to='/blog' class="ml-15 text-decoration-none accent--text">Blog</router-link>
      <router-link to='/projects' class="ml-5 text-decoration-none accent--text">Proyectos</router-link>
    </v-app-bar>

    <v-main>

      <!-- If using vue-router -->
      <router-view></router-view>

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
    
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

</style>