<template>
  <div>
    <div class="sections">
      <div
        v-for="(menuItem, index) in menuItems"
        :key="index"
        :class="{ menuItem, activeItem: menuItem.path === choseMenuItem }"
        @click="choseItem(menuItem)"
      >
        <component
          :is="menuItem.svg"
          class="svg"
          :isActive="menuItem.path === choseMenuItem"
        ></component>
        <div>{{ menuItem.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgCourse from "../svg/SvgCourse.vue";

export default {
  data() {
    return {
      menuItems: [
        {
          title: "Профиль",
          path: "/profile",
          svg: "SvgCourse",
        },
        {
          title: "Календарь",
          path: "/calendar",
          svg: "SvgCourse",
        },
        {
          title: "Курсы",
          path: "/courses",
          svg: "SvgCourse",
        },
        {
          title: "Настройки",
          path: "/settings",
          svg: "SvgCourse",
        },
      ],
    };
  },
  computed: {
    choseMenuItem() {
      console.log(this.$route.matched[1].path);
      return this.$route.matched[1].path;
      // При переходе на путь "/" выдает ошибку ??
    },
  },
  methods: {
    choseItem(el) {
      if (el.path !== this.choseMenuItem) {
        this.$router.push({ path: `${el.path}` });
      }
    },
  },
  components: {
    SvgCourse,
  },
};
</script>

<style lang="scss" scoped>
.menuItem {
  display: flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 5px;
  margin-bottom: 8px;
  cursor: pointer;

  user-select: none;
  > .svg {
    margin-right: 10px;
  }
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}
.menuItem:hover {
  background-color: rgba(111, 111, 240, 0.1);
}
.activeItem {
  background-color: #6f6ff0;
  color: #f1f1fd;
}
.activeItem:hover {
  background-color: #6f6ff0;
}
</style>