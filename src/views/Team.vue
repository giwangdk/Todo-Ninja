<template>
  <div class="team">
    <h1 class="headline grey--text" s>Team</h1>
    <v-container class="my-5">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card flat class="grey lighten-3 text-center">
            <v-img class="pt-4">
              <v-avatar size="100px">
                <img :src="person.avatar" alt="" />
              </v-avatar>
            </v-img>
            <v-card-text>
              <div class="heading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-email</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "The Net Ninja",
          role: "Web developer",
          avatar: "/avatar-1.png",
        },
        { name: "Ryu", role: "Graphic designer", avatar: "/avatar-1.png" },
        { name: "Chun Li", role: "Web developer", avatar: "/avatar-1.png" },
        {
          name: "Gouken",
          role: "Social media maverick",
          avatar: "/avatar-1.png",
        },
        { name: "Yoshi", role: "Sales guru", avatar: "/avatar-1.png" },
      ],
    };
  },
};
</script>

<style>
</style>