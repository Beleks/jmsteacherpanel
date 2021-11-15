<template>
  <div class="lesson">
    <div class="icon_move">
      <SvgMove />
    </div>
    <div class="lesson-icon">
      <SvgTeacher />
    </div>
    <div class="inner-box">
      <div class="box">
        <div class="icon">
          <SvgVideo />
        </div>
        <div class="title">{{ lesson.title }}</div>
        <div class="edit">редактировать</div>
      </div>
      <div class="icon" @click="deleteLesson()">
        <SvgTrash />
      </div>
    </div>
  </div>
</template>

<script>
import SvgTeacher from "@/components/svg/SvgTeacher.vue";
import SvgVideo from "@/components/svg/SvgVideo.vue";
import SvgTrash from "@/components/svg/SvgTrash.vue";
import SvgMove from "@/components/svg/SvgMove.vue";

export default {
  props: {
    lesson: Object,
    lessonIndex: Number,
  },
  methods: {
    deleteLesson() {
      this.$emit("deleteLesson", this.lessonIndex);
    },
  },
  components: {
    SvgTeacher,
    SvgVideo,
    SvgTrash,
    SvgMove,
  },
};
</script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
}
.lesson {
  display: flex;
  margin-bottom: 10px;
  position: relative;
}

.lesson-icon {
  padding-right: 1em;
  padding-top: 0.4em;
}

.inner-box {
  font-family: "Roboto Regular";
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1fe;
  padding: 0.4em 1em;
  border-radius: 5px;
  .icon:first-child {
    margin-right: 1em;
  }
  .title {
    margin-right: 1.2em;
  }
}

.box {
  display: flex;
  align-items: center;
}

.edit {
  font-size: 0.8rem;
  color: #8989f3;
  cursor: pointer;
}

.icon_move {
  position: absolute;
  left: -36px;
  padding-top: 0.4em;
}
/* LESSON end */
</style>