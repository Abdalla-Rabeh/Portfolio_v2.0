<template>
  <div>
    <v-app>
      <v-container>
        <v-row class="align-items-center">
          <v-col
            cols="12"
            lg="12"
            md="12"
            sm="12"
            class="d-flex justify-content-center"
          >
            <div class="title text-center">
              <h3>{{ titleTemplate }}</h3>
              <p>
                In this section, allow me to show you some of my work for a
                closer look
              </p>
            </div>
          </v-col>
          <v-col>
            <div class="custom-tab">
              <ul class="tabs-choose">
                <li
                  @click="activeTab = '1'"
                  :class="[activeTab === '1' ? 'active' : '']"
                >
                  All
                </li>
                <li
                  @click="activeTab = '2'"
                  :class="[activeTab === '2' ? 'active' : '']"
                >
                  JavaScript
                </li>
                <li
                  @click="activeTab = '3'"
                  :class="[activeTab === '3' ? 'active' : '']"
                >
                  Vue.js
                </li>
              </ul>
              <div class="tabs-content">
                <div class="content-one" v-if="activeTab === '1'">
                  <v-row>
                    <v-col
                      cols="12"
                      lg="4"
                      md="6"
                      sm="12"
                      v-for="(All, i) in Alls"
                      :key="i"
                      class="d-flex justify-content-center"
                    >
                      <v-card>
                        <v-hover>
                          <template v-slot:default="{ hover }">
                            <v-card>
                              <v-img :src="All.img" :alt="All.alt"></v-img>

                              <v-fade-transition>
                                <v-overlay
                                  v-if="hover"
                                  absolute
                                  color="#036358"
                                >
                                  <ul>
                                    <li>
                                      <a :href="All.link">{{ All.Review }}</a>
                                    </li>
                                  </ul>
                                </v-overlay>
                              </v-fade-transition>
                            </v-card>
                          </template>
                        </v-hover>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
                <div class="content-two" v-if="activeTab === '2'">
                  <v-row>
                    <v-col
                      cols="12"
                      lg="4"
                      md="6"
                      sm="12"
                      v-for="(JavaScript, i) in JavaScripts"
                      :key="i"
                      class="d-flex justify-content-center"
                    >
                      <v-hover>
                        <template v-slot:default="{ hover }">
                          <v-card>
                            <v-img
                              :src="JavaScript.img"
                              :alt="JavaScript.alt"
                            ></v-img>

                            <v-fade-transition>
                              <v-overlay v-if="hover" absolute color="#036358">
                                <ul>
                                  <li>
                                    <a :href="JavaScript.link">{{
                                      JavaScript.Review
                                    }}</a>
                                  </li>
                                </ul>
                              </v-overlay>
                            </v-fade-transition>
                          </v-card>
                        </template>
                      </v-hover>
                    </v-col>
                  </v-row>
                </div>
                <div class="content-three" v-if="activeTab === '3'">
                  <v-row>
                    <v-col
                      cols="12"
                      lg="4"
                      md="6"
                      sm="12"
                      v-for="(Vue, i) in Vues"
                      :key="i"
                      class="d-flex justify-content-center"
                    >
                      <v-card>
                        <v-hover>
                          <template v-slot:default="{ hover }">
                            <v-card>
                              <v-img :src="Vue.img" :alt="Vue.alt"></v-img>

                              <v-fade-transition>
                                <v-overlay
                                  v-if="hover"
                                  absolute
                                  color="#036358"
                                >
                                  <ul>
                                    <li>
                                      <a :href="Vue.link">{{ Vue.Review }}</a>
                                    </li>
                                  </ul>
                                </v-overlay>
                              </v-fade-transition>
                            </v-card>
                          </template>
                        </v-hover>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleTemplate: "Abdallah Rabeh | Porfolio",
      overlay: false,

      Alls: [
        {
          img: "img/1.png",
          link: "https://abdalla-rabeh.github.io/Admin-Dashboard-test/",
          Review: "Review",
          alt: "Admin-Dashboard",
        },
        {
          img: "img/6.png",
          link: "https://first-herbal-eg.online/",
          Review: "Review",
          alt: "first-herbal",
        },
        {
          img: "img/2.png",
          link: "https://abdalla-rabeh.github.io/L10N-House/",
          Review: "Review",
          alt: "L10N-House",
        },
        {
          img: "img/3.png",
          link: "https://github.com/Abdalla-Rabeh/Task_vue",
          Review: "Review",
          alt: "Task Vue.js",
        },
        {
          img: "img/4.png",
          link: "/",
          Review: "Review",
          alt: "Abdallah Rabeh website",
        },
      ],
      JavaScripts: [
        {
          img: "img/1.png",
          link: "https://abdalla-rabeh.github.io/Admin-Dashboard-test/",
          Review: "Review",
          alt: "Admin-Dashboard",
        },
        {
          img: "img/2.png",
          link: "https://abdalla-rabeh.github.io/L10N-House/",
          Review: "Review",
          alt: "L10N-House",
        },
      ],
      Vues: [
        {
          img: "img/3.png",
          link: "https://github.com/Abdalla-Rabeh/Task_vue",
          Review: "Review",
          alt: "Task Vue",
        },
        {
          img: "img/4.png",
          link: "/Portfolio_v2.0/",
          Review: "Review",
          alt: "Abdallah Rabeh website",
        },
      ],

      activeTab: "1",
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
<style lang="scss" scoped>
.row {
  padding-top: 100px;
  background-color: #f1f1f1 !important;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
}

.title {
  color: #000;
}

.tabs-choose {
  margin-bottom: 20px;

  li {
    display: inline-block;
    padding: 10px 20px;
    background-color: #2196f3;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.5s;
    opacity: 0.3;

    &.active {
      opacity: 1;
      border-radius: 50%;
    }
  }
}

.tabs-content {
  background-color: #eee;
  margin: 0 auto;
  padding: 20px;

  .v-image {
    position: relative;
    margin-bottom: 100px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    color: #fff;

    li {
      padding: 10px;
      margin: 10px;
      text-align: center;
      background: #2196f3;

      a {
        text-align: center;
        text-decoration: none;
        color: #fff !important;
      }
    }
  }
}

.v-card {
  margin-top: -50px;
}
</style>
