<template>
  <div>
    <LessonHeader
      :id="lesson.id"
      :title="lesson.title"
      :access="lesson.access"
    />
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
    return {
      loader: true,
    };
  },
  computed: {},
  components: {
    LessonHeader,
  },
 
  mounted() {},
};
</script>

<style>
</style>