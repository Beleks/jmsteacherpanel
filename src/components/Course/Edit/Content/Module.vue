<template>
  <div>
    <div class="icons">
      <div>
        <SvgTeacher></SvgTeacher>
      </div>
      <div>
        <SvgTeacher></SvgTeacher>
      </div>
    </div>
    
    <div class="module_heading">

      <div class="icon">
        <div class="module_title">Название модуля</div>
        <div>
          <SvgTeacher></SvgTeacher>
        </div>

        <div class="icon">
          <SvgTeacher></SvgTeacher>
        </div>
      </div>
    
      <div class="module_heading-capture">Добавить описание модуля</div>
      
    </div>

    <div class="module_list">
      <div class="module_list-item">
      <div class="module_lesson-name">Название урока</div>
      <div class="module_lesson-edit">редактировать</div>
      <div class="icon">
          <SvgTeacher></SvgTeacher>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgTeacher from "@/components/svg/SvgTeacher.vue";
// import SvgCourse from '../../../svg/'

export default {
  components: {
    SvgTeacher,
  },
};
</script>

<style lang="scss" scoped>
</style>