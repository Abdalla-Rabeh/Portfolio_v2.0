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
          <i class="fa-solid fa-bars-staggered"></i>
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
      <Nuxt />
    </v-main>
    <v-footer>
      <v-col class="text-center" cols="12">
        <ul>
          <li>
            <a href="https://www.facebook.com/AbdallahRabeh.co"
              ><i class="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCxIfoUQN0bVDFN2blluqa2Q"
              ><i class="fab fa-youtube"></i
            ></a>
          </li>
          <li>
            <a href="https://github.com/Abdalla-Rabeh"
              ><i class="fab fa-github"></i
            ></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abdallah-rabeh-ab4b45203"
              ><i class="fab fa-linkedin"></i
            ></a>
          </li>
        </ul>
        <p>+2001148947966 - +2001020328795</p>
        {{ new Date().getFullYear() }} —
        <strong> Abdallah Rabeh. | All Rights Reserved.</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
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
<style lang="scss">
nav {
  .navbar-toggler {
    border: none;
  }
  .navbar-toggler:focus {
    box-shadow: none;
  }
  .navbar-collapse {
    text-align: center;
  }
  .v-input--switch__thumb {
    color: #2196f3 !important;
  }
  .navbar-nav .nav-link.active {
    font-weight: bold;
    color: #fff !important;
  }
  .theme--light.v-input--switch .v-input--switch__track {
    color: #f1f1f1 !important;
  }
  a {
    color: #fff !important;
  }
  .v-input--selection-controls.v-input {
    margin-left: 20px;
  }
}
nav button svg {
  color: #fff !important;
  font-size: 30px;
}
footer {
  background-image: url("/img/B1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff !important;
  font-weight: bold !important;
  ul {
    display: flex;
    justify-content: center;
    margin: auto;
    list-style: none;
    font-size: 20px;
    font-weight: bold;
  }
  li {
    padding: 10px;
    a {
      color: #fff !important;
    }
  }
  p {
    font-weight: bold;
  }
}
</style>
