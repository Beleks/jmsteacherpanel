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
            <div class="module_title">Название&nbsp;модуля</div>
            <div class="icon">
              <SvgArrow />
            </div>
          </div>
          <div class="icon">
            <SvgTrash />
          </div>
        </div>

        <div class="module_heading-capture">Добавить описание модуля</div>
      </div>
    </div>
    <div class="module_list">
      <div class="lesson">
        <div class="icon">
          <SvgTeacher />
        </div>

        <div class="lesson_content">
          <div class="icon">
            <SvgVideo />
          </div>
          <div class="title">Название урока</div>

          <div class="edit">редактировать</div>
          <div class="icon">
            <SvgTrash />
          </div>
        </div>
      </div>

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
</template>

<script>
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
  components: {
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
.module {
   max-width: 1074px;
  margin: 0 auto;
  
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
  background-color: #F1F1FE;
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
  max-width: 178px;
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
</style>