<template>
  <div class="dashboard">
    <h1 class="headline grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-row class="ma-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort Project by Project Name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort Project by Person Name</span>
        </v-tooltip>
      </v-row>
      <v-card
        flat
        class="grey lighten-4 ma-3 pa-3"
        v-for="project in projects"
        :key="project.title"
      >
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col xs="6" cols="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col xs="6" cols="4" md="2">
            <div class="caption grey--text">Due Date</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col xs="6" cols="4" md="2">
            <div clasS="right" id="chip-container">
              <v-chip :class="project.status" class="white--text caption my-2">
                {{ project.status }}
              </v-chip>
            </div>
          </v-col>
          <v-divider></v-divider>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb.js";

export default {
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  created() {
    db.collection("projects").onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid red;
}

.v-chip {
  background: none;
}

.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: red !important;
}
</style>