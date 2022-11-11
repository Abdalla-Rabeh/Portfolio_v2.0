<template>
  <div>
    <v-app>
      <v-container>
        <v-row class="align-items-center">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <v-card class="card-header">
              <v-card-title
                ><h1>{{ title }}</h1></v-card-title
              >
              <v-card-subtitle>{{ text }}</v-card-subtitle>
              <v-card-text>
                <p>{{ caption }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn>
                  <nuxt-link to="/about" class="navbar-brand"
                    >Read More</nuxt-link
                  >
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <img :src="img" class="img-fluid img" alt="Abdallah Rabeh img website" />
          </div>
        </v-row>
      </v-container>
        <div class="full">
        <div class="row align-items-center">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="full-box">
              <h4>I'm Ready For your Projects. Hire Me Now</h4>
              <div>
                <v-btn>
                  <a href="https://www.linkedin.com/in/abdallah-rabeh-ab4b45203"  target="_blank"
                    >Contact me on Linkedin</a
                  >
                </v-btn>
                <v-btn>
                  <a
                    href="https://wa.me/2001148947966?text=Hello, I am talking to you about recruitment. Would you like to work with us as a web developer with Vue.js" target="_blank"
                    >Contact me on WhatApp
                  </a>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
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

      img: "img/Home.png",
    };
  },
};
</script>

<style scoped>
img {
  position: relative;
  padding: 60px;
  margin: 50px auto;
  display: block;
  margin: auto;
}
</style>












