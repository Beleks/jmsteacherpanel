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
      return this.$route;
    },
  },
};
</script>

<style>
</style>