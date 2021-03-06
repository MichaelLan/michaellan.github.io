// TODO: Poner el for en el HomeComponent para que se este quien multiplique los Bar
<template>
  <div>
    <v-progress-linear
      v-for="(lang, index) in languages"
      :key="index"
      :value="lang.value"
      rounded
      height="25"
      color="accent"
      class="mt-3"
    >
      <div class="mr-auto">
        <span class="px-5 white--text">{{ lang.language }}</span>
      </div>

      <div class="ml-auto">
        <span class="px-5">{{ lang.value }}%</span>
      </div>
    </v-progress-linear>
  </div>
</template>

<script>
export default {
  name: "Bar",
  props: ["language", "_value"],
  data() {
    return {
      languages: [
        { language: "Python", value: "75" },
        { language: "Django", value: "35" },
        { language: "FastApi", value: "35" },
      ],
    };
  },
  methods: {
    get_value() {
      return this.languages;
    },
  },
};
</script>