<template>
  <div>
    <v-progress-linear
      :value="value"
      rounded
      height="25"
      color="accent"
      class="mt-3"
    >
      <div class="mr-auto">
        <span class="px-5 white--text">{{ language }}</span>
      </div>

      <div class="ml-auto">
        <span class="px-5">{{ value }}%</span>
      </div>
    </v-progress-linear>
  </div>
</template>

<script>
export default {
  name: "Bar",
  props: ["language", "value"],
  
};
</script>