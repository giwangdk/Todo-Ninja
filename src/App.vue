<template>
  <v-app class="grey darken-4">
    <Navbar />
    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },

  data: () => ({
    
  }),
};
</script>
<style >
</style>
