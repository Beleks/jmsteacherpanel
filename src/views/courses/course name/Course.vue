<template>
  <div>
    <div v-if="path">
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    path(){
      return true;
    },
    PathParams() {
      return this.$route.params.id;
    },
  },
};
</script>

<style>
</style>