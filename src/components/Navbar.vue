<template>
  <nav>
    <v-snackbar
      :timeout="4000"
      v-model="snackbar"
      color="grey"
      class="black--text"
      top
    >
      <span center>awesome!! you added a new project</span>
    </v-snackbar>

    <v-app-bar text elevation="0" app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>

      <!--dropdown menu-->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text color="grey" v-on="on">
            <v-icon>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn plain class="grey lighten-4">
        <span>Sign Out</span>
        <v-icon right>mdi-dialpad</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" class="grey darken-3" app>
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar-1.png" alt="" />
          </v-avatar>
          <p class="white--text heading mt-1">The Net Ninja</p>
        </v-flex>
        <v-flex class="my-3">
          <Popup @projectAdded="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon color="white">mdi-{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "@/components/Popup.vue";
export default {
  components: {
    Popup,
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "view-dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "account", text: "Team", route: "/team" },
      ],
      snackbar: false,
    };
  },
};
</script>

<style>
</style>