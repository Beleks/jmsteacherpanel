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

     
      <div class="title-box">
        <div>
          <div class="module_title">Название модуля</div>
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
</style>