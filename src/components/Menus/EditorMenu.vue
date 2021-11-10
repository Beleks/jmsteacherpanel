<template>
  <div>
    <div class="back">
      <router-link to="/courses" tag="span"> Вернуться к курсу</router-link>
    </div>
    <div
      v-for="(menuItem, index) in menuItems"
      :key="index"
      :class="{
        menuItem,
        activeItem:
          `${mainPath}${menuItem.path}` === `${$route.matched[4].path}`,
      }"
      @click="choseItem(menuItem)"
    >
      <div>{{ menuItem.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: "Основная информация",
          path: "/main",
          pathName: "mainEditor",
          // svg: "SvgCourse",
        },
        {
          title: "Содержание",
          path: "/content",
          pathName: "mainContent",
          // svg: "SvgCourse",
        },
        {
          title: "Содержание",
          path: "/tariffs",
          pathName: "mainTariffs",
          // svg: "SvgCourse",
        },
      ],
    };
  },
  computed: {
    mainPath() {
      // Возвращает путь для проверки
      return this.$route.matched[3].path;
    },
  },
  methods: {
    choseItem(el) {
      let currentPath = `${this.mainPath}${el.path}`;
      let courseId = this.$route.params.id;
      // Сделать проверку по regEx ??

      if (currentPath !== this.$route.matched[4].path) {
        this.$router.push({ name: `${el.pathName}`, params: { id: courseId } });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.back {
  margin-bottom: 1em;
  color: #7d7f8e;
  user-select: none;
  cursor: pointer;
}
.menuItem {
  display: flex;
  align-items: center;
  // padding: 4px 10px;
  border-radius: 5px;
  margin-bottom: 4px;
  cursor: pointer;
  // font-size: 0.85rem;
  user-select: none;
  > .svg {
    margin-right: 10px;
  }
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}
.menuItem:hover {
  // background-color: rgba(111, 111, 240, 0.1);
  color: #6f6ff0ab;
}
.activeItem {
  color: #6f6ff0;
}
.activeItem:hover {
  // background-color: #6f6ff0;
}
</style>