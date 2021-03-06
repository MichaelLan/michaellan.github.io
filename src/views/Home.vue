<template>
  <HomeComponent />
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";

export default {
  title() {
    return "Foo Page";
  },
  name: "Home",
  components: {
    HomeComponent,
  },
};
</script>
