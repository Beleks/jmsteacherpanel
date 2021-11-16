<template>
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
</template>

<script>
import SvgAddSquare from "@/components/svg/SvgAddSquare.vue";

export default {
  props: {},
  data() {
    return {
      moduleTitle: "",
    };
  },
  computed: {
    courseId() {
      return this.$route.params.id;
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
      this.$emit('closeAddPanel')
    },
  },
  components: {
    SvgAddSquare,
  },
};
</script>

<style lang="scss" scoped>
.create_module {
  display: flex;
  align-items: center;
  margin: 1em 0;
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