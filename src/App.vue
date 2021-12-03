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
};
</script>

<style lang="scss">
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
}
html {
  background-color: #fcfcff;
  color: #2b2d42;
}
input {
  all: unset;
}
</style>
