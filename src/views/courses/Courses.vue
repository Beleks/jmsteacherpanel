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
            <div class="button">Посмотреть</div>
          </div>
        </div>
        <div class="courses">
          <div v-for="(course, index) in courses" :key="index" class="course">
            <div class="logo">лого</div>
            <div class="info">
              <div class="title">
                <router-link tag="span" :to="{ path: `${course.id}` }" append>
                  {{ course.title }}
                </router-link>
              </div>
              <div class="edit">
                <!-- Убрать эффект ссылки / tag="span" - будет убран в 4v -->
                <router-link
                  tag="span"
                  :to="{ path: `${course.id}/editor/main` }"
                  append
                >
                  редактировать
                </router-link>
              </div>
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
    return {};
  },
  computed: {
    path() {
      let lastEl = this.$route.matched.length - 1;
      if (this.$route.matched[lastEl].path == "/courses") {
        return true;
      } else {
        return false;
      }
    },
    courses() {
      // Получать только title, id
      return this.$store.state.courses;
    },
  },
  methods: {
    editCourse() {
      // this.$router.push({ name: "courses", params: { id: "1" } });
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
  margin-bottom: 1.875em;
}
.notice {
  display: flex;
  height: 76px;
  border-radius: 5px;
  overflow: hidden;
  background: rgba(111, 111, 240, 0.1);

  margin-bottom: 1em;
  .right_block {
    height: 100%;
    width: 10px;
    background: rgba(111, 111, 240, 0.6);
  }
  .notice_content {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0 21px;
    > div {
      display: flex;
      align-items: center;
      .svg {
        margin-right: 21px;
      }
    }
    .button {
      padding: 6px 2.375em;
      background-color: #6f6ff0;
      cursor: pointer;
      user-select: none;
      border-radius: 5px;
      color: #f1f1fd;
    }
  }
}
// Блок курсов
.courses {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    width: 48%;
    height: 80px;
    border-radius: 5px;
    margin-bottom: 1em;
  }
  .course {
    display: flex;
    background-color: #ffffff;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    .logo {
      background-color: #c4c4c4;
      width: 80px;
      height: 100%;
      text-align: center;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 20px;
      .title {
        cursor: pointer;
        font-size: 1.125rem;
      }
      .edit {
        text-decoration-line: underline;
        color: #6f6ff0;
        font-size: 0.85rem;
        cursor: pointer;
        user-select: none;
      }
    }
  }
  .create_сourse {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(43, 45, 66, 0.6);
    background-color: rgba(43, 45, 66, 0.05);
    border: 2px dashed rgba(196, 196, 196, 0.4);
    cursor: pointer;
    transition: border 0.3s ease-in-out, color 0.3s ease-in-out;
  }
  .create_сourse:hover {
    border: 2px dashed #6f6ff0;
    color: #6f6ff0;
  }
}
</style>