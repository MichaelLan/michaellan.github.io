<template>
  <v-footer padless 
  app
  class="mt-3">
    <v-col class="text-center" cols="12">
      <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-4 white--text"
          icon
          :href="icon.url"
        >
          <v-icon 
          color="accent"
          size="24px">
            {{ icon.icon }}
          </v-icon>
          
        </v-btn>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: [
          {icon: "mdi-twitter", url: "https://twitter.com/michaellan_eng"}, 
          {icon:"mdi-linkedin", url: "https://www.linkedin.com/in/michaellan/"},
          {icon: "mdi-github", url: "https://github.com/MichaelLan"},
          ],
    };
  },
};
</script>