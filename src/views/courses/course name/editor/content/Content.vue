<template>
  <div>
    <div>
      <div class="title">Содержание</div>
      <Module/>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Module from '@/components/course/edit/content/Module.vue'
export default {
  components: {
    Module
  }
}
</script>

<style lang="scss" scoped>

</style>