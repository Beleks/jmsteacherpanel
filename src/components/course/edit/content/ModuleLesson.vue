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
    </div>
    <div v-else>
      <AddLessonPanel
        :moduleId="moduleId"
        :lessonIndex="lessonIndex"
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
            <component :is="lesson.icon" />
          </div>
          <div class="title">{{ lesson.title }}</div>
          <router-link tag="div" class="edit" :to="lessonPath" append>
            редактировать
          </router-link>
        </div>
        <div class="icon" @click="deleteLesson()">
          <SvgTrash />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgTeacher from "@/components/svg/SvgTeacher.vue";
import SvgVideo from "@/components/svg/SvgVideo.vue";
import SvgTask from "@/components/svg/SvgTask.vue";
import SvgEdit from "@/components/svg/SvgEdit.vue";
import SvgVebinar from "@/components/svg/SvgVebinar.vue";
import SvgTrash from "@/components/svg/SvgTrash.vue";
import SvgMove from "@/components/svg/SvgMove.vue";
import AddLessonPanel from "./AddLessonPanel.vue";

export default {
  props: {
    lesson: Object,
    lessonIndex: Number,
    moduleId: String,
  },
  data() {
    return {
      addBlock: "addLine",
    };
  },
  computed: {
    lessonPath() {
      let routeParams = {
        name: "lesson",
        params: { lessonId: this.lesson.id },
        query: { moduleId: this.moduleId },
      };
      return routeParams;
    },
  },
  methods: {
    deleteLesson() {
      this.$store.dispatch("deleteLesson", {
        moduleId: this.moduleId,
        lessonIndex: this.lessonIndex,
      });
    },
  },
  components: {
    AddLessonPanel,
    SvgTeacher,
    SvgVideo,
    SvgTask,
    SvgEdit,
    SvgVebinar,
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