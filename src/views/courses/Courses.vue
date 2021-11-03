<template>
  <div>
    <div v-if="path">
      <div class="page_title">Ваши курсы</div>
      <div class="content">
        <div class="notice">
          <div class="right_block"></div>
          <div class="notice_content">
            <div class="offer">
              <div class="svg">
                <SvgLamp />
              </div>
              <div class="text">
                Посмотрите наши рекомендации по созданию курса
              </div>
            </div>
            <div class="button"></div>
          </div>
        </div>
        <div class="courses">
          <div v-for="(course, index) in courses" :key="index" class="course">
            <div class="logo">лого</div>
            <div class="info">
              <div class="title">{{ course.title }}</div>
              <div class="edit">редактировать</div>
            </div>
          </div>
          <div class="create_сourse">Создать курс</div>
        </div>
      </div>
    </div>
    <div v-else><router-view></router-view></div>
  </div>
</template>

<script>
import SvgLamp from "../../components/svg/SvgLamp.vue";

export default {
  data() {
    return {
      courses: [
        { id: "123", title: "Курс от Профи до 0" },
        { id: "123", title: "Курс от Профи до 0" },
        { id: "123", title: "Курс от Профи до 0" },
      ],
    };
  },
  computed: {
    // Что делать если путь равен '/courses/' ??
    path() {
      if (this.$route.path == "/courses") {
        return true;
      } else {
        return false;
      }
    },
  },
  components: {
    SvgLamp,
  },
};
</script>

<style lang="scss" scoped>
.page_title {
  font-size: 1.125em;
}
.courses {
  display: flex;
}
.notice {
  height: 76px;
  border-radius: 5px;
  overflow: hidden;
  background: rgba(111, 111, 240, 0.1);

  .right_block {
    height: 100%;
    width: 10px;
    background: rgba(111, 111, 240, 0.6);
  }
  .notice_content{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>