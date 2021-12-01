<template>
  <div>
    <div class="main" v-if="path">
      <ModalEditor />
      <div class="title">Содержание курса {{ courseId }}</div>
      <transition-group name="list-complete">
        <Module
          v-for="(module, index) in courseModules.content"
          :key="module.id"
          :module="module"
          :moduleIndex="index"
          :courseId="courseId"
          class="list-complete-item"
        >
          <div v-if="index == courseModules.content.length - 1">
            <AddModulePanel />
          </div>
        </Module>
      </transition-group>
      <div v-if="courseModules.content.length == 0">
        <AddModulePanel />
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ModalEditor from "@/components/course/edit/content/ModalEditor.vue";
import Module from "@/components/course/edit/content/Module.vue";

import AddModulePanel from "@/components/course/edit/content/AddModulePanel.vue";

export default {
  data() {
    return {};
  },
  computed: {
    courseId() {
      return this.$route.params.id;
    },
    // Исправить название "courseModules"
    courseModules() {
      return this.$store.getters.currentCourse(this.courseId);
    },
    path() {
      let lastEl = this.$route.matched.length - 1;
      if (this.$route.matched[lastEl].path == "/courses/:id/editor/content") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {},
  components: {
    ModalEditor,
    AddModulePanel,
    Module,
  },
  
};
</script>

<style lang="scss" scoped>
.list-complete-item {
  transition: all 0.6s;
}
.list-complete-enter {
  opacity: 0;
  transform: translateX(30px);
}
.list-complete-leave-to {
  opacity: 0;
}
.list-complete-leave-active {
  position: absolute;
  width: 100%;
}

//
.main {
  position: relative;
  max-width: 1074px;
  margin: 0 auto;
  .title {
    margin-bottom: 1.8em;
  }
}
</style>