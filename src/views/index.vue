<template>
  <div>
    <div class="menu">
      <!-- Меню 
        Курсы, Профиль препода, календарь и.т.д
       -->
      <div class="header">
        <div>JMS</div>
        <div>teacher</div>
      </div>
      <div>
        <!-- меняется в зависимости от страницы -->
        <MainMenu />
      </div>
    </div>
    <div>
      <!-- главный блок -->
      <div>
        <!-- верхнее меню -->
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from "../components/Menus/MainMenu.vue";

export default {
  data() {
    return {};
  },
  components: {
    MainMenu
  }
};
</script>


<style lang="scss" scoped>
.menu {
  .header {
    display: flex;
    align-items: center;
    font-size: 1.5em;

    margin-bottom: 2em;

    > div:last-child {
      font-size: 0.875rem;
      margin-left: 1.875em;
      color: #6f6ff0;
    }
  }
  font-family: "Roboto Medium";
  min-width: 276px;
  height: 100vh;
  position: fixed;
  background-color: #f9f9ff;
  box-shadow: 4px 0px 15px rgba(0, 0, 0, 0.05);

  padding: 30px 50px;
}
</style>