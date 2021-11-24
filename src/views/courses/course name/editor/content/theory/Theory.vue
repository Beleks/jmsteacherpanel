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
      console.log(this.$route, 'lesson теория');
      return this.$route;
    },
  },
};
</script>

<style>
</style>