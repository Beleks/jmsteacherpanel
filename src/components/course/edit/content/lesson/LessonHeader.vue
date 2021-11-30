<template>
  <div class="header">
    <div>
      <div class="back" @click="setNewLessonTitle()">
        <!-- svg back -->
        back
      </div>
      <div class="access"></div>
      <div class="title">
        <!-- input -->
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
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
      newTitle: "",
    };
  },
  methods: {
    setNewLessonTitle(){
      this.$store.commit('setNewLessonTitle')  
    }
  },
  mounted() {
    
    // получаем id module, course
  },
};
</script>

<style>
</style>