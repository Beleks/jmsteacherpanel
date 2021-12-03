<template>
  <div>
    <div class="description_editor"></div>
    <div class="video_loader">
      <div>Загрузить видео</div>
      <div class="video">
        <SvgVideo />
      </div>
    </div>
  </div>
</template>

<script>
import LessonHeader from "./LessonHeader.vue";
import SvgVideo from "@/components/svg/SvgVideo.vue";

export default {
  props: {
    lesson: Object,
  },
  data() {
    return {
      loader: true,
    };
  },
  computed: {},
  components: {
    LessonHeader,
    SvgVideo,
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.description_editor {
  height: 180px;
  background-color: rgba(128, 128, 128, 0.2);
  border-radius: 5px;
  margin-bottom: 1.8em;
}
.video_loader {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: 100px;
  background-color: rgba(43, 45, 66, 0.03);
  >:first-child{
    margin-right: 1em;
  }
}
</style>