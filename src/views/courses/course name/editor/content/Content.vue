<template>
  <div>
    <div class="main">
      <div class="title">Содержание курса {{ courseId }}</div>
      <Module
        v-for="(module, index) in courseModules.content"
        :key="index"
        :module="module"
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
    <div>
      <router-view></router-view>
    </div>
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
    addByEnter() {
    },
    addModule() {
      // Убрать переменные ?
      let title = this.moduleTitle;
      let id = this.courseId;
      let newModule = {
        title,
      };
      this.$store.commit("addModule", { id, newModule });
      this.moduleTitle = "";
    },
    deleteModule: function (idModule) {
      let idCourse = this.courseId;
      this.$store.commit("deleteModule", { idCourse, idModule });
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
</style>