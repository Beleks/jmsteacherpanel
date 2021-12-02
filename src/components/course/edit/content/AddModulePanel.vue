<template>
  <div class="create_module">
    <div class="input_block">
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
      </div>
    </div>
    <div
      v-if="!(moduleIndex === undefined)"
      class="cancle"
      @click="$emit('closeAddPanel')"
    >
      Отмена
    </div>
  </div>
</template>

<script>
import SvgAddSquare from "@/components/svg/SvgAddSquare.vue";

export default {
  props: {
    moduleIndex: Number,
  },
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
      let newModuleParams = {
        title: this.moduleTitle,
      };
      this.$store.dispatch("addModule", {
        newModuleParams,
        moduleIndex: this.moduleIndex,
      });
      this.moduleTitle = "";
      this.$emit("closeAddPanel");
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
  justify-content: space-between;
  margin: 1em 0;
  .input_block {
    display: flex;
    align-items: center;
  }
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
  .cancle {
    cursor: pointer;
    color: rgba(43, 45, 66, 0.6);
    margin-right: 1em;
  }
}
</style>