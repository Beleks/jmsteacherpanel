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
          />
          <!-- <div class="lesson">
            <div class="lesson-icon">
              <SvgTeacher />
            </div>

            <div class="content">
              <div class="inner-box">
                <div class="icon">
                  <SvgVideo />
                </div>
                <div class="title">Название урока</div>
                <div class="edit">редактировать</div>
              </div>

              <div class="icon">
                <SvgTrash />
              </div>
            </div>
          </div> -->

          <div class="add_lesson_icons">
            <div class="icon">
              <SvgVideo />
            </div>
            <div class="icon">
              <SvgTask />
            </div>
            <div class="icon">
              <SvgEdit />
            </div>
            <div class="icon">
              <SvgVebinar />
            </div>
          </div>
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
import SvgVideo from "@/components/svg/SvgVideo.vue";
import SvgTask from "@/components/svg/SvgTask.vue";
import SvgEdit from "@/components/svg/SvgEdit.vue";
import SvgVebinar from "@/components/svg/SvgVebinar.vue";

// import SvgCourse from '../../../svg/'

export default {
  props: {
    module: Object,
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
  },
  components: {
    ModuleLesson,
    SvgTeacher,
    SvgAddModule,
    SvgTrash,
    SvgArrow,
    SvgVideo,
    SvgTask,
    SvgEdit,
    SvgVebinar,
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
  // max-width: 1002px;
  width: 100%;
}

.icons {
  display: flex;
  flex-direction: row;
  max-width: 72px;
  margin-top: 9px;
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
  max-width: 1002px;
  background-color: #f1f1fe;
  border-radius: 5px;
  min-height: 39px;
  .icon {
    margin-right: 9px;
  }
}

.title_inner-box {
  align-items: center;
  display: flex;
  flex-direction: row;
}

.module_title {
  width: 150px;
  display: block;
  margin: 0 10px 0 15px;
  font-family: "Roboto Medium";
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
}

.module_heading-capture {
  display: block;
  margin: 0 0 0 15px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: regular;
  color: #2b2d42;
  opacity: 0.8;
}

/* MODULE_LIST start*/

.module_list {
  max-width: 1002px;
}

/* LESSON start */
.lesson {
  display: flex;
  flex-direction: row;
  max-width: 100%;
}

.lesson_icon {
  margin-right: 15px;
}

.content {
  display: flex;
  flex-direction: row;
  max-width: 100%;
}

.inner-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
}

/* LESSON end */

.add_lesson_icons {
  margin-left: 51px;
  display: flex;
  flex-direction: row;

  .icon {
    margin-right: 20px;
  }
}

/* MODULE_LIST end*/
</style>