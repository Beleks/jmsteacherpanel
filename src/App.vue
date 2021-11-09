<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  beforeMount() {
    // let lastEl = this.$route.matched.length - 1;
    // console.log(this.$route.matched);
    // console.log(this.$route.matched[lastEl]);

    // if (this.$route.matched[lastEl].path == "") {
    //   this.$router.replace({ path: "/profile" });
    // }
  },
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
@font-face {
  font-family: "Roboto Medium";
  src: url("./assets/fonts/Roboto/Roboto-Medium.ttf");
}
@font-face {
  font-family: "Roboto Regular";
  src: url("./assets/fonts/Roboto/Roboto-Regular.ttf");
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  // $mainColor: #6F6FF0;
}
html {
  background-color: #fcfcff;
}
</style>
