<template>
  <div class="header">
    <div class="left">
      <div class="back" @click="goBack()">
        <SvgArrowLeft />
      </div>
      <div class="access">
        <SvgTeacher />
      </div>
      <div class="title" :class="{ input_border: focusOn }">
        <div v-if="!focusOn">
          <span v-if="!newTitle" @click="focusOnTitle(title)">
            {{ title }}
          </span>
          <span v-else @click="focusOnTitle(newTitle)">
            {{ newTitle }}
          </span>
        </div>
        <input
          v-else
          ref="editInput"
          type="text"
          v-model="inputTitle"
          @blur="blur()"
        />
      </div>
    </div>
    <div class="right">
      <div class="trash">
        <SvgTrash />
      </div>
    </div>
  </div>
</template>

<script>
import SvgArrowLeft from "@/components/svg/SvgArrowLeft.vue";
import SvgTeacher from "@/components/svg/SvgTeacher.vue";
import SvgTrash from "@/components/svg/SvgTrash.vue";

export default {
  props: {
    // получать id с props или с params
    id: String,
    title: String,
    // access после изменить на Object
    access: String,
  },
  data() {
    return {
      focusOn: false,
      inputTitle: "",
      newTitle: "",
    };
  },
  methods: {
    goBack() {
      this.$router.push({
        path: `/courses/${this.$store.state.pathParams.id}/editor/content`,
      });
    },
    foc() {
      this.$nextTick(() => {
        this.$refs.editInput.focus();
      });
    },
    focusOnTitle(setTitle) {
      this.inputTitle = setTitle;
      this.focusOn = true;
      this.foc();
    },
    blur() {
      this.newTitle = this.inputTitle;
      this.focusOn = false;
    },
    setNewLessonTitle() {},
  },
  components: {
    SvgArrowLeft,
    SvgTeacher,
    SvgTrash,
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.input_border {
  // border: 1px solid #7d7f8e;
  // background-color: #cecece4f;
  // border-radius: 5px;
  // padding: 0.05em 0.5em;
}

//
.header {
  display: flex;
  justify-content: space-between;
}
.left {
  display: flex;
  align-items: center;
  > div {
    margin-right: 30px;
  }
  .title {
    input {
      width: 450px;
    }
  }
}
.right {
  .trash {
    cursor: pointer;
  }
}
</style>