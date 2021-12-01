<template>
  <div class="container">
    <!-- <div>
      modal ?
    </div> -->
    <div class="menu">
      <div class="fixed">
        <div class="header">
          <div>JMS</div>
          <div>teacher</div>
        </div>
        <component :is="navMenu" />
      </div>
    </div>
    <div class="page">
      <div class="header">
        <div></div>
        <div class="exit">Выйти</div>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from "../components/menus/MainMenu.vue";
import CourseMenu from "../components/menus/CourseMenu.vue";
import EditorMenu from "../components/menus/EditorMenu.vue";

export default {
  data() {
    return {};
  },
  computed: {
    pathParams() {
      let params = Object.assign({}, this.$route.params);
      params.moduleId = this.$route.query.moduleId;
      console.log(params);
      this.$store.commit("setPathParams", params);
    },
    navMenu() {
      let matched = this.$route.matched;
      let matchedLatstEl = matched.length - 1;

      if (matched[matchedLatstEl - 1].path == "") {
        return "MainMenu";
      } else if (matched[matchedLatstEl].path == "/courses/:id") {
        return "CourseMenu";
      } else if (matched[3].path == "/courses/:id/editor") {
        return "EditorMenu";
      } else if (matched) {
      }
    },
  },
  mounted() {
    // let params = Object.assign({}, this.$route.params);
    // console.log(params);
    // this.$store.commit("setPathParams", params);
    this.$store.dispatch('setPathParams')
  },

  components: {
    MainMenu,
    CourseMenu,
    EditorMenu,
  },
};
</script>


<style lang="scss" scoped>
.container {
  display: flex;
}
.menu {
  .fixed {
    position: fixed;
  }
  .header {
    display: flex;
    align-items: center;
    font-size: 1.5em;

    margin-bottom: 2rem;

    > div:last-child {
      font-size: 0.875rem;
      margin-left: 1.875em;
      color: #6f6ff0;
    }
  }
  font-family: "Roboto Medium";
  min-width: 276px;
  min-height: 100vh;
  background-color: #f9f9ff;
  box-shadow: 4px 0px 15px rgba(0, 0, 0, 0.05);

  padding: 30px 50px 30px 30px;
}
.page {
  padding: 30px 50px;
  font-family: "Roboto Medium";
  width: 100%;
  .header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 2.8rem;
    .exit {
      color: rgba(43, 45, 66, 0.6);
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>