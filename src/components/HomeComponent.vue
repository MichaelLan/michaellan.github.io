<template>
  <v-container fluid class="mx-0 px-0">
    <v-card color="primary" flat>
      <HeraderMe />
      <h1 class="text-center text-h3 pt-2">Michael Lan</h1>

      <v-row>
        <v-col>
          <p class="text-center text-h6 accent--text pt-5">
            <v-icon color="info">mdi-laptop-mac</v-icon> Desarrollador Python
          </p>
          <v-row justify="center">
            <p class="text-h6 accent--text">
              <v-icon color="info">mdi-lightbulb</v-icon> Ingeniero Electricista
              <span class="info--text"> | </span>
              <v-icon color="info">mdi-memory</v-icon> Ingeniero Electrónico
            </p>
          </v-row>
        </v-col>
      </v-row>
    </v-card>

    <v-row justify="space-between"
    class="mt-10">
      
      <v-col>
        <h3 class="text-center text-h3 mt-8">Sobre mí</h3>
        <div class="mx-16 mt-5">
          
          <p class="mx-16 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim eius
            placeat aliquam consequatur natus minima maxime dicta
            exercitationem, quos voluptate illo ab odio. iste aperiam molestias.
            Explicabo expedita in et!
          </p>

        </div>
      </v-col>

      <v-col>
        <Bar></Bar>
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
import HeraderMe from "@/components/HeaderMe.vue";
import Bar from "@/components/Bar.vue";

export default {
  name: "HomeComponent",
  components: {
    HeraderMe,
    Bar,
    
  },
};
</script>
