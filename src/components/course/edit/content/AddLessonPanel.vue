<template>
  <div class="add_lesson_icons">
    <div class="icons">
      <div
        class="icon"
        v-for="(icon, index) in icons"
        :key="index"
        @click="addLesson(icon)"
      >
        <component :is="icon.svg" />
      </div>
    </div>
    <div
      class="cancle"
      v-if="!(lessonIndex === undefined)"
      @click="$emit('closeAddPanel')"
    >
      Отмена
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
    moduleId: String,
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
    addLesson(icon) {
      this.$store.dispatch("addLesson", {
        moduleId: this.moduleId,
        lessonIndex: this.lessonIndex,
        lessonType: icon.type,
        svgIcon: icon.svg,
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
  align-items: center;
  justify-content: space-between;
  .icons {
    display: flex;
  }
  .icon {
    cursor: pointer;
    margin-right: 20px;
  }
  .cancle {
    cursor: pointer;
    color: #8989f3;
  }
}
</style>
