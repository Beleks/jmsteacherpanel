<template>
  <div>
    <div class="main">
      <!--POPUP start-->
      <div class="popup" v-if="modal.isOpen">
        <div class="popup__container">
          <div class="popup__svg" @click="closeModal()">
            <SvgCross />
          </div>

          <div class="form">
            <input
              type="text"
              class="form__name"
              placeholder="Название"
              v-model="modal.title"
            />
            <p class="form__text">Описание модуля</p>
            <div class="text_edit_panel">Панель редактирования текста</div>
            <textarea
              class="form__description"
              placeholder="Описание модуля"
              v-model="modal.desc"
            >
            </textarea>

            <input
              type="submit"
              class="form__button"
              value="Сохранить"
              @click="saveChange()"
            />
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
      />
      <AddModulePanel />
    </div>
    <!-- <div>
      <router-view></router-view>
    </div> -->
  </div>
</template>

<script>
import Module from "@/components/course/edit/content/Module.vue";
import SvgCross from "@/components/svg/SvgCross.vue";

import AddModulePanel from "@/components/course/edit/content/AddModulePanel.vue";

export default {
  data() {
    return {};
  },
  computed: {
    // === popup

    modal() {
      return this.$store.state.modal;
    },

    // =====
    courseId() {
      return this.$route.params.id;
    },
    courseModules() {
      return this.$store.getters.currentCourse(this.courseId);
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("closeModal");
    },
    saveChange() {
      this.$store.commit("saveChangeFromModal", { modal: this.modal });
      this.$store.commit("closeModal");
    },
  },
  components: {
    AddModulePanel,
    Module,
    SvgCross,
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
  background-color: rgba(black, 0.5);
}

.popup__container {
  display: flex;
  flex-direction: column;
  width: 60%;
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
  color: white;
}

.popup__svg:hover {
  cursor: pointer;
  opacity: 0.6;
}

.form {
  display: flex;
  flex-direction: column;
  margin: 59px 40px 20px 40px;
}

.form__name {
  border-bottom: 1px solid #f7f7fa;
  font-size: 20px;
  line-height: 17px;
  padding-bottom: 10px;
  margin-bottom: 34px;
}

.form__text {
  font-size: 20px;
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
  margin-bottom: 18px;
  min-height: 333px;
  resize: none;
}

.form__button {
  justify-self: flex-end;
  align-self: flex-end;
  width: 165px;
  height: 32px;
  text-align: center;
  background-color: #6f6ff0;
  color: white;
  font-size: 15px;
  border-radius: 5px;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
}

.form__button:hover {
  opacity: 0.8;
}

// .popup__background {
//   position: fixed;
//   top: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: #000000;
//   opacity: 0.5;

// }

/*POPUP end*/
</style>