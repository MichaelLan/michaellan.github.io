<template>
  <v-container fluid class="mx-0 px-0">
    <v-card color="primary" flat>
      <HeraderMe />
      <h1 class="text-center text-h3 pt-2">Michael Lan</h1>

      <v-row justify="center">
        <v-col cols="12" class="text-center text-h6 accent--text pt-5">
          <span
            ><v-icon color="info">mdi-laptop-mac</v-icon> Desarrollador Python</span
          >
          </v-col>
<!-- TODO:  Hacer que esta vaina sea response -->
        <v-row justify="center">

          <v-col cols="12" sm="4" class="text-center text-md-right text-h6 accent--text">
            <span><v-icon color="info">mdi-lightbulb</v-icon> Ingeniero Electricista</span>
          </v-col>
          <v-col cols="12" sm="4" class="text-center text-md-left pt-0 pt-sm-3 text-h6 accent--text">
            <!-- <span class="info--text"> | </span> -->
            <span><v-icon color="info">mdi-memory</v-icon> Ingeniero Electrónico</span>
          </v-col>
        </v-row>
        
      </v-row>
    </v-card>

    <v-row justify-lg="space-between" justify-sm="center" class="mt-10">
      <v-col cols="12" sm="6" md="6">
        <h3 class="text-center text-h3">Sobre mí</h3>
        <div class="mx-8">
          <p class="text-center text-justify mx-8 mx-sm-16 mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim eius
            placeat aliquam consequatur natus minima maxime dicta
            exercitationem, quos voluptate illo ab odio. iste aperiam molestias.
            Explicabo expedita in et!
          </p>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <Bar
          v-for="(lang, index) in languages"
          :key="index"
          :language="lang.language"
          :value="lang.value"
        />
      </v-col>
    </v-row>

    <Footer></Footer>
  </v-container>
</template>

<script>
import HeraderMe from "@/components/HeaderMe.vue";
import Bar from "@/components/Bar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeComponent",
  components: {
    HeraderMe,
    Bar,
    Footer,
  },
  data() {
    return {
      languages: [
        { language: "Python", value: "70" },
        { language: "Django", value: "30" },
        { language: "FastApi", value: "35" },
        // { language: "Numpy", value: "38" },
      ],
    };
  },
};
</script>
