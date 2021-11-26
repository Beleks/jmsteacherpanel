<template>
  <div>{{ path.params }}</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    path() {
      console.log(this.$route, "lesson");
      return this.$route;
    },
  },
};
</script>

<style>
</style>