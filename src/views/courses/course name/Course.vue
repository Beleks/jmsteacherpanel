<template>
  <div>
    <div></div>
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
  computed: {},
  mounted() {
    let courseId = this.$route.params.id;
    if (courseId) {
      
    } else {
      // Переход на страницу Курс не найден
      this.$router.replace("/courses/");
    }
  },
};
</script>

<style>
</style>