<template>
  <div>
    <div>{{ lesson.type }}</div>
  </div>
</template>

<script>
import LessonHeader from "./LessonHeader.vue";

export default {
  props: {
    lesson: Object,
  },
  data() {
    return {};
  },
  computed: {},
  components: {
    LessonHeader,
  },
};
</script>

<style>
</style>