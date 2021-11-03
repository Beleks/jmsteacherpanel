<template>
  <div>{{ PathParams }}</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    PathParams() {
      return this.$route.params.id;
    },
  },
};
</script>

<style>
</style>