<template>
  <v-app app>
    
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
          <nuxt-link class="navbar-brand" to="/">Abdallah Rabeh</nuxt-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarid"
            aria-controls="navbarid"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarid">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item" v-for="(Link, i) in Links" :key="i">
                <nuxt-link
                  class="nav-link active"
                  aria-current="page"
                  :to="Link.router"
                  >{{ Link.title }}</nuxt-link
                >
              </li>
            </ul>
          </div>
          <v-switch class="grey--text" @click="ThmemDartMode()"></v-switch>
        </div>
      </nav>
    

    <v-main app>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app :absolute="!fixed">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong> Abdallah Rabeh </strong>
      </v-col>
    </v-footer>
  </v-app>
</template>
<script>
import "~/scss/index.scss";
export default {
  data() {
    return {
      fixed: true,
      close: false,
      Dark: false,
      Links: [
        { title: "Home", router: "/" },
        { title: "About", router: "/about" },
        { title: "MyWork", router: "/portfolio" },
      ],
    };
  },
  methods: {
    ThmemDartMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
