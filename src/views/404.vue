<template>
  <div :class="{active: true}">
    Упс такой страницы нет :(
    <div class="go_home">Вернуться на главную</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .go_home{
    padding: 0.8em 1.2em;
    background-color: #6F6FF0;
  }
}
.active{
  color: green;
}
</style>