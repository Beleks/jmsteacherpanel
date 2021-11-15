<template>
  <div class="add_lesson_icons">
    <div
      class="icon"
      v-for="(icon, index) in icons"
      :key="index"
      @click="addLesson(icon.type, lessonIndex)"
    >
      <component :is="icon.svg" />
    </div>
  </div>
</template>

<script>
import SvgVideo from "@/components/svg/SvgVideo.vue";
import SvgTask from "@/components/svg/SvgTask.vue";
import SvgEdit from "@/components/svg/SvgEdit.vue";
import SvgVebinar from "@/components/svg/SvgVebinar.vue";

export default {
  props: {
    // newLessonIndex: Number,
    moduleIndex: Number,
    lessonIndex: Number,
  },
  data() {
    return {
      icons: [
        { type: "video", svg: "SvgVideo" },
        { type: "test", svg: "SvgTask" },
        { type: "practice", svg: "SvgEdit" },
        { type: "vebinar", svg: "SvgVebinar" },
      ],
    };
  },
  computed: {
    courseId() {
      return this.$route.params.id;
    },
  },
  methods: {
    addLesson(type, index) {
      console.log("тип урока: ", type);
      let courseId = this.courseId;
      console.log(this.moduleIndex);
      let moduleIndex = this.moduleIndex;
      this.$store.commit("addLesson", {
        courseId,
        lessonType: type,
        moduleIndex,
        lessonIndex: index,
      });
      this.$emit("closeAddPanel");
    },
  },
  components: {
    SvgVideo,
    SvgTask,
    SvgEdit,
    SvgVebinar,
  },
};
</script>

<style lang="scss" scoped>
.add_lesson_icons {
  margin: 0.8em 3.5em;
  display: flex;
  .icon {
    cursor: pointer;
    margin-right: 20px;
  }
}
</style>
