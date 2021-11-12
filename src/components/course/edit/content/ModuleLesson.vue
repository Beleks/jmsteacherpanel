<template>
  <div>
    <div class="lesson">
      <div class="lesson-icon">
        <SvgTeacher />
      </div>

      <div class="content">
        <div class="inner-box">
          <div class="icon">
            <SvgVideo />
          </div>
          <div class="title">{{lesson.title}}</div>
          <div class="edit">редактировать</div>
        </div>

        <div class="icon">
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

export default {
  props: {
    lesson: Object
  },
  components: {
    SvgTeacher,
    SvgVideo,
    SvgTrash,
  },
};
</script>

<style lang="scss" scoped>
.icon{
  cursor: pointer;
}
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
</style>