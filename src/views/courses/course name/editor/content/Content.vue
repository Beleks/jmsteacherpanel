<template>
  <div>
    <div>
      <div class="title">Содержание курса {{ courseId }}</div>
      <Module v-for="(module, index) in courseModules" :key="index" />
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Module from "@/components/course/edit/content/Module.vue";
export default {
  computed: {
    courseId() {
      return this.$route.params.id;
    },
    courseModules() {
      return this.$store.getters.currentCourse(this.courseId);
    },
  },
  components: {
    Module,
  },
};
</script>

<style lang="scss" scoped>
</style>