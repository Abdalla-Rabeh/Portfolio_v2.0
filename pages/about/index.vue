<template>
  <div>
    <v-app>
      <div class="container p-5">
        <div class="row align-items-center">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="box">
              <img :src="img"  class="img-fluid" alt="Abdallah Rabeh"/>
              <h2>Abdallah Rabeh</h2>
              <p>Front End Developer Vue.js & Nuxt.js</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container p-5">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-7 col-sm-12">
            <section>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  class="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  About Me
                </button>
                <button
                  class="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Why Me
                </button>
                <button
                  class="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  My Vision
                </button>
              </div>
            </section>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
                tabindex="0"
              >
                <div class="item-box">
                  <h3>About Me</h3>
                  <p>
                    Hello, Iam Abdallah Rabeh, Front-End Developer with 3 years
                    of experience rapidiously productize wireless results.
                    whereas multidisciplinary intellectual capital.
                    Distinctively synergize market-driven innovation and
                    prospective channels. Dramatically drive an expanded array
                    of expertise with distinctive technology. Completely
                    cultivate standardized manufactured.
                  </p>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
                tabindex="0"
              >
                <div class="item-box">
                  <h3>WHY TO CHOOSE ME</h3>
                  <p>
                    Assertively target cooperative experiences whereas tactical
                    total linkage. Intrinsicly transition end-to-end synergy via
                    low-risk high-yield internal or "organic" sources.
                    Assertively synergize dynamic scenarios through user
                    friendly services. Seamlessly communicate. Competently
                    exploit just in time synergy and competitive human capital.
                    Efficiently maintain functionalized "outside the box"
                    thinking for cooperative channels. Energistically.
                  </p>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
                tabindex="0"
              >
                <div class="item-box">
                  <h3>HERE IS MY VISION</h3>
                  <p>
                    Seamlessly administrate team building opportunities after
                    sustainable portals. Phosfluorescently incentivize cost
                    effective action items without innovative meta-services.
                    Globally monetize backward-compatible portals and
                    performance based bandwidth. Distinctively underwhelm cost
                    effective.
                  </p>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-disabled"
                role="tabpanel"
                aria-labelledby="nav-disabled-tab"
                tabindex="0"
              >
                lorem222222222keqmk kjrw nvjc jea vjwa hjv bch bwohj ojvbwqijvb
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-5 col-sm-12">
            <v-simple-table>
              <template v-slot:default>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </div>
      </div>
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
      <div class="contaier">
        <skills-code></skills-code>
      </div>
    </v-app>
  </div>
</template>
<script>
import  SkillsCode  from "~/components/Skills-Code.vue";
import "~/scss/about.scss";
export default {
  components:{
    SkillsCode
  },
  data() {
    return {
      titleTemplate: "Abdallah Rabeh | About ",
      img: "img/1.jpeg",
      desserts: [
        {
          name: "Name",
          calories: "Abdallah Mahmmed",
        },
        {
          name: "Phone",
          calories: +2001148947966,
        },
        {
          name: "The Address",
          calories: "Wasta Beni Suef",
        },
        {
          name: "Date of Birth",
          calories: "27/8/2001",
        },
        {
          name: "Age",
          calories: 21,
        },
      ],
    };
  },
  head() {
    return {
      titleTemplate: this.titleTemplate,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My About Abdallah Rabeh in Skills",
        },
      ],
    };
  },
};
</script>
