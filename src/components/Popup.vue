<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on" class="grey lighten-5"> add new project </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h3 class="pa-2 grey--text">Add a New Project</h3>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          ></v-textarea>

          <v-menu>
            <template v-slot:activator="{ on }">
              <v-text-field
                v-on="on"
                label="Due Date"
                prepend-icon="mdi-calendar-range"
                :value="formattedDate"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-btn
            text
            class="grey darken-4 white--text"
            center
            @click="submit"
            :loading="loading"
            >Add Project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import db from "@/fb";
export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [(v) => v.length >= 3 || "minimum length is 3 characters"],
      loading: false,
      dialog: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        const project = {
          title: this.title,
          content: this.content,
          due: format(parseISO(this.due), "do MMMM yyyy"),
          person: "The Net Ninja",
          ongoing: "ongoing",
        };
        db.collection("projects")
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit('projectAdded')
          });
      }
    },
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), "do MMMM yyyy") : "";
    },
  },
};
</script>

<style>
</style>