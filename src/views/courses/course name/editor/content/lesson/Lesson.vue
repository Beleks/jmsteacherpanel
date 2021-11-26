<template>
  <div>
    <div>{{ lessonData }}</div>
    <component :is="'Theory'" />
  </div>
</template>

<script>
import Theory from "@/components/course/edit/content/lesson/Theory.vue";
import Test from "@/components/course/edit/content/lesson/Test.vue";
import Vebinar from "@/components/course/edit/content/lesson/Vebinar.vue";
import Practice from "@/components/course/edit/content/lesson/Practice.vue";

export default {
  components: {
    Theory,
    Test,
    Vebinar,
    Practice,
  },
  computed: {
    lessonData() {
      let courseId = this.$route.params.id;
      let lessonId = this.$route.params.lessonId;
      let moduleId = this.$route.query.moduleId;

      return this.$store.getters.currentLesson(courseId, moduleId, lessonId);
    },
    // lessonType() {
    //   let paramsLesson = this.$route.params.lessonId;
    //   let component = "";
    //   switch (paramsLesson) {
    //     case "theory":
    //       component = "Theory";
    //       break;
    //     case "test":
    //       component = "Test";
    //       break;
    //     case "vebinar":
    //       component = "Vebinar";
    //       break;
    //     case "practice":
    //       component = "Practice";
    //       break;
    //   }
    //   return component;
    // },
  },
};
</script>

<style>
</style>