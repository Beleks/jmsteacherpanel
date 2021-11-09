<template>
  <div>
    <div class="icons">
      <div>
        <SvgCourse></SvgCourse>
      </div>
      <div>
        <SvgCourse></SvgCourse>
      </div>
    </div>

    <div class="module_heading">

      <div class="icon">
        <div class="module_title"></div>
        <div>
          <SvgCourse></SvgCourse>
        </div>

        <div class="icon">
          <SvgCourse></SvgCourse>
        </div>
      </div>
    
      <div class="module_heading-capture"></div>
      <div>
      
      </div>
    </div>
  </div>
</template>

<script>
import SvgCourse from "@/components/svg/SvgCourse.vue";
// import SvgCourse from '../../../svg/'

export default {
  components: {
    SvgCourse,
  },
};
</script>

<style lang="scss" scoped>
</style>