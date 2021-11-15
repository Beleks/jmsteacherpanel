<template>
  <div class="module">
    <div class="module_heading">
      <div class="icons">
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
            <div class="module_title">{{ module.title }}</div>
            <div class="icon">
              <SvgArrow />
            </div>
          </div>
          <div class="icon" @click="deleteModule()">
            <SvgTrash />
          </div>
        </div>
        <div class="module_heading-capture">Добавить описание модуля</div>

        <div class="module_list">
          <ModuleLesson
            v-for="(lesson, index) in module.lessons"
            :key="index"
            :lesson="lesson"
            :moduleIndex="moduleIndex"
            :lessonIndex="index"
            @deleteLesson="deleteLesson"
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
    // редактирование названия модуля
    deleteModule() {
      this.$emit("deleteModule", this.module.id);
    },
    addLesson() {
      this.$store.commit("addLesson", {});
    },
    deleteLesson: function (lessonIndex) {
      this.$store.commit("deleteLesson", {
        courseId: this.courseId,
        moduleIndex: this.moduleIndex,
        lessonIndex,
      });
    },
  },
  components: {
    ModuleLesson,
    AddLessonPanel,
    SvgTeacher,
    SvgAddModule,
    SvgTrash,
    SvgArrow,
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
}

.module_heading-capture {
  display: block;
  margin: 0 0 10px 15px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #2b2d42;
  opacity: 0.8;
}

/* MODULE_LIST start*/

/* MODULE_LIST end*/

/* LESSON start */

// style in ModuleLesson.vue

/* LESSON end */
</style>