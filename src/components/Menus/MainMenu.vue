<template>
  <div>
    <div class="sections">
      <div
        v-for="(menuItem, index) in menuItems"
        :key="index"
        :class="{ menuItem, activeItem: menuItem.page === choseMenuItem}"
        @click="choseMenuItem = menuItem.page"
      >
        <component
          :is="menuItem.svg"
          class="svg"
          :isActive="menuItem.page === choseMenuItem"
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
      // activeColor: "#F1F1FD",
      // defColor: "#2B2D42",
      choseMenuItem: 'courses',
      menuItems: [
        {
          title: "Профиль",
          active: false,
          page: "profile",
          svg: "SvgCourse",
        },
        {
          title: "Календарь",
          active: false,
          page: "calendar",
          svg: "SvgCourse",
        },
        {
          title: "Курсы",
          active: false,
          page: "courses",
          svg: "SvgCourse",
        },
        {
          title: "Настройки",
          active: false,
          page: "settings",
          svg: "SvgCourse",
        },
      ],
    };
  },
  methods: {},
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
  > .svg {
    margin-right: 10px;
  }
}
.activeItem {
  background-color: #6f6ff0;
  color: #f1f1fd;
}
</style>