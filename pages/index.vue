<template>
  <div>
    <v-app>
      <v-container>
        <v-row class="align-items-center">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <v-card class="card-header">
              <v-card-title>{{ title }}</v-card-title>
              <v-card-subtitle>{{ text }}</v-card-subtitle>
              <v-card-text>
                <p>{{ caption }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn>Read More</v-btn>
              </v-card-actions>
            </v-card>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <v-card>
              <img :src="img" class="img-fluid" />
            </v-card>
          </div>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import "~/scss/index.scss";
export default {
  data() {
    return {
      title: "Abdallah Rabeh",
      text: "Front End Vue.js",

      caption: `
                Hi I'm Abdallah,I work in front-end web development, and I have experience in dealing with programming and modern web technologies, and I have built a lot of projects that have increased my experience and trained a lot, I am a fast learner and always love to develop myself`,

      img: "/img/Home.png",
    };
  },
};
</script>

<style></style>
