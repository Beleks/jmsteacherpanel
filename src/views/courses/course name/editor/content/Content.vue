<template>
  <div>
    <div class="main">
      <!--POPUP start-->
      <div class="popup">
        <div class="popup__container">
          <div class="popup__svg">
            <SvgCross />
          </div>

          <div class="form">
            <input type="text" class="form__name" placeholder="Название" />
            <p class="form__text">Описание модуля</p>
            <div class="text_edit_panel">Панель редактирования текста</div>
            <input
              type="textarea"
              class="form__description"
              placeholder="Описание модуля"
            />

            <input type="submit" class="form__button" value="Сохранить" />
          </div>
        </div>

        <div class="popup__background"></div>
      </div>

      <!--POPUP end-->

      <!--  -->
      <div class="title">Содержание курса {{ courseId }}</div>
      <Module
        v-for="(module, index) in courseModules.content"
        :key="index"
        :module="module"
        :moduleIndex="index"
        :courseId="courseId"
        @deleteModule="deleteModule"
      />
      <div class="create_module">
        <div @click="addModule()" class="add_module">
          <SvgAddSquare />
        </div>
        <div class="module_title">
          <!-- input -->
          <input
            v-model="moduleTitle"
            placeholder="Название модуля"
            @keyup.enter="addModule()"
          />
          <!-- <div class="bg_title" v-show="!moduleTitle">Название модуля</div> -->
        </div>
      </div>
    </div>
    <!-- <div>
      <router-view></router-view>
    </div> -->
  </div>
</template>

<script>
import Module from "@/components/course/edit/content/Module.vue";
import SvgAddSquare from "@/components/svg/SvgAddSquare.vue";

export default {
  data() {
    return {
      moduleTitle: "",
    };
  },
  computed: {
    courseId() {
      return this.$route.params.id;
    },
    courseModules() {
      return this.$store.getters.currentCourse(this.courseId);
    },
  },
  methods: {
    addModule() {
      // Убрать переменные ?
      let title = this.moduleTitle;
      let courseId = this.courseId;
      let newModule = {
        title,
      };
      this.$store.commit("addModule", { courseId, newModule });
      this.moduleTitle = "";
    },
    deleteModule: function (moduleId) {
      let courseId = this.courseId;
      this.$store.commit("deleteModule", { courseId, moduleId });
    },
  },
  components: {
    Module,
    SvgAddSquare,
  },
};
</script>

<style lang="scss" scoped>
.main {
  max-width: 1074px;
  margin: 0 auto;
  .title {
    margin-bottom: 1.8em;
  }
}
.create_module {
  display: flex;
  align-items: center;
  .add_module {
    cursor: pointer;
  }
  .module_title {
    margin-left: 15px;
    position: relative;
    min-width: 100%;
    input {
      width: 300px;
    }
  }
}

/*POPUP start*/
.popup {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup__container {
  display: flex;
  flex-direction: column;

  width: 770px;
  height: 600px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  z-index: 10;
}

.popup__svg {
  position: absolute;
  width: 32px;
  height: 32px;
  right: -40px;
  top: -40px;
}

.popup__svg:hover {
  cursor: pointer;
  opacity: 0.6;
}

.form {
  display: flex;
  flex-direction: column;
  width: 358px;
  margin: 59px 0 21px 45px;
}

.form__name {
  border: none;
  border-bottom: 1px solid #f7f7fa;
  font-size: 24px;
  line-height: 17px;
  padding: 0;

  margin-bottom: 34px;
}

.form__text {
  font-size: 24px;
  margin-bottom: 18px;
}

.text_edit_panel {
  margin-bottom: 10px;
}

.form__description {
  border: 1px solid #bebfc7;
  font-size: 14px;
  line-height: 17px;
  padding: 15px;
  padding-bottom: 13px;
  margin-bottom: 18px;
  width: 187%;
  height: 150%;
}

.form__button {
  position: absolute;
  width: 165px;
  height: 32px;
  right: 45px;
  bottom: 21px;
  text-align: center;
  background-color: #6f6ff0;
  color: white;
  font-size: 15px;
  border-radius: 6px;
  padding: 7px 45px;
}

.form__button:hover {
  cursor: pointer;
  opacity: 0.8;
}

.popup__background {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.5;
  // z-index: -1;
}

/*POPUP end*/
</style>