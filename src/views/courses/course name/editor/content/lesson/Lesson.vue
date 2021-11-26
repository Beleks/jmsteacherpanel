<template>
  <div>
    <component :is="lessonType" :lesson="lesson" />
  </div>
</template>

<script>
import Theory from "@/components/course/edit/content/lesson/Theory.vue";
import Test from "@/components/course/edit/content/lesson/Test.vue";
import Vebinar from "@/components/course/edit/content/lesson/Vebinar.vue";
import Practice from "@/components/course/edit/content/lesson/Practice.vue";

export default {
  data() {
    return {
      lesson: {},
    };
  },
  components: {
    Theory,
    Test,
    Vebinar,
    Practice,
  },
  computed: {
    lessonType() {
      let component = "";
      switch (this.lesson.type) {
        case "video":
          component = "Theory";
          break;
        case "test":
          component = "Test";
          break;
        case "vebinar":
          component = "Vebinar";
          break;
        case "practice":
          component = "Practice";
          break;
      }
      return component;
    },
  },
  mounted() {
    let courseId = this.$route.params.id;
    let lessonId = this.$route.params.lessonId;
    let moduleId = this.$route.query.moduleId;

    this.lesson = this.$store.getters.currentLesson(
      courseId,
      moduleId,
      lessonId
    );
  },
};
</script>

<style>
</style>