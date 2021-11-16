<template>
  <div class="list">
    <div
      class="add-line"
      v-if="addBlock === 'addLine'"
      @click="addBlock = 'addIcons'"
    >
      <div class="line"></div>
      <div>Добавить урок</div>
      <div class="line"></div>
      <!-- <div>icons</div> -->
    </div>
    <div v-else>
      <AddLessonPanel
        :lessonIndex="lessonIndex"
        :moduleIndex="moduleIndex"
        @closeAddPanel="addBlock = 'addLine'"
      />
    </div>
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
        <div class="icon" @click="deleteThisLesson()">
          <SvgTrash />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgTeacher from "@/components/svg/SvgTeacher.vue";
import SvgVideo from "@/components/svg/SvgVideo.vue";
import SvgTrash from "@/components/svg/SvgTrash.vue";
import SvgMove from "@/components/svg/SvgMove.vue";
import AddLessonPanel from "./AddLessonPanel.vue";

export default {
  props: {
    lesson: Object,
    lessonIndex: Number,
    moduleIndex: Number,
    courseId: String,
  },
  data() {
    return {
      addBlock: "addLine",
    };
  },
  methods: {
    deleteThisLesson() {
      this.$store.commit("deleteLesson", {
        courseId: this.courseId,
        moduleIndex: this.moduleIndex,
        lessonIndex: this.lessonIndex,
      });
    },
  },
  components: {
    AddLessonPanel,
    SvgTeacher,
    SvgVideo,
    SvgTrash,
    SvgMove,
  },
};
</script>

<style lang="scss" scoped>
.list {
  text-align: center;
  .add-line {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.2em 0;
    opacity: 0;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    color: #8989f3;
    font-family: "Roboto Regular";
    .line {
      width: 80%;
      border-radius: 5px;
      height: 0.5px;
      background-color: #8989f3;
      opacity: 0.7;
    }
    div:nth-child(2n) {
      margin: 0 1em;
    }
    // word-wrap: normal;
    white-space: nowrap;
    font-size: 12px;
  }
  .add-line:hover {
    opacity: 1;
  }
}
.icon {
  cursor: pointer;
}
.lesson {
  display: flex;
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
  display: none;
  position: absolute;
  left: -36px;
  padding-top: 0.4em;
}
/* LESSON end */
</style>