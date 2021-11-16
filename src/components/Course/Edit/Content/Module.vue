<template>
  <div class="module">
    <div class="module_heading">
      <div class="icons">
        <div class="icon_move">
          <SvgMove />
        </div>
        <div class="icon">
          <SvgTeacher />
        </div>
        <div class="icon">
          <SvgAddModule />
        </div>
      </div>

      <div class="full-heading">
        <div class="title-box">
          <div class="title_inner-box">
            <div class="module_title" @click="openEditModal()">
              {{ module.title }}
            </div>
            <div class="icon">
              <SvgArrow />
            </div>
          </div>
          <div class="icon" @click="deleteThisModule()">
            <SvgTrash />
          </div>
        </div>
        <div class="module_heading-capture" @click="deleteThisModule()">
          Добавить описание модуля
        </div>

        <div class="module_list">
          <ModuleLesson
            v-for="(lesson, index) in module.lessons"
            :key="index"
            :lesson="lesson"
            :moduleIndex="moduleIndex"
            :lessonIndex="index"
            :courseId="courseId"
          />
          <AddLessonPanel :moduleIndex="moduleIndex" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModuleLesson from "./ModuleLesson.vue";
//
import SvgTeacher from "@/components/svg/SvgTeacher.vue";
import SvgAddModule from "@/components/svg/SvgAddModule.vue";
import SvgTrash from "@/components/svg/SvgTrash.vue";
import SvgArrow from "@/components/svg/SvgArrow.vue";
// import SvgVideo from "@/components/svg/SvgVideo.vue";
// import SvgTask from "@/components/svg/SvgTask.vue";
// import SvgEdit from "@/components/svg/SvgEdit.vue";
// import SvgVebinar from "@/components/svg/SvgVebinar.vue";
import SvgMove from "@/components/svg/SvgMove.vue";
import SvgCross from "@/components/svg/SvgCross.vue";
import AddLessonPanel from "./AddLessonPanel.vue";

// import SvgCourse from '../../../svg/'

export default {
  props: {
    module: Object,
    moduleIndex: Number,
    courseId: String,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    //  Открытие модального окна
    openEditModal() {
      this.$store.commit("openModal");
    },
    // редактирование названия модуля
    deleteThisModule() {
      let courseId = this.courseId;
      let moduleId = this.module.id;
      this.$store.commit("deleteModule", { courseId, moduleId });
    },
  },
  components: {
    ModuleLesson,
    AddLessonPanel,
    SvgTeacher,
    SvgAddModule,
    SvgTrash,
    SvgArrow,
    SvgMove,
    SvgCross,
  },
};
</script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
}

.module {
  margin-bottom: 1.8em;
}

.module_heading {
  display: flex;
  flex-direction: row;
  // position: relative;
}

.full-heading {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.icons {
  display: flex;
  margin-top: 0.5em;
  position: relative;
  .icon {
    margin-right: 15px;
  }
}

.title-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: #f1f1fe;
  border-radius: 5px;
  padding: 0.5em 1em;
}

.title_inner-box {
  align-items: center;
  display: flex;
  flex-direction: row;
}

.module_title {
  display: block;
  margin-right: 15px;
  font-family: "Roboto Medium";
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  //временно когда нет иконки редактирования
  cursor: pointer;
}

.module_heading-capture {
  cursor: pointer;
  margin: 0 0 10px 15px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #2b2d42;
  opacity: 0.8;
}
</style>