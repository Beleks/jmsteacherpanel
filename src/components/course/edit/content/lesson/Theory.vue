<template>
  <div>
    <LessonHeader/>
    <div></div>
  </div>
</template>

<script>
import LessonHeader from "./LessonHeader.vue";

export default {
  props: {
    // lesson: Object
  },
  data() {
    return {};
  },

  computed: {
    path() {
      // console.log(this.$route, "from t");
      // return this.$route;
    },
  },
  components: {
    LessonHeader,
  },
};
</script>

<style>
</style>