<template>
  <div>
    <div class="back">
      <router-link to="/courses" tag="span"> Вернуться к курсу</router-link>
    </div>
    <div v-for="(menuItem, index) in menuItems" :key="index" class="menuItem">
      <div>
        {{ menuItem.title }}
      </div>
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
          // svg: "SvgCourse",
        },
        {
          title: "Содержание",
          path: "/content",
          // svg: "SvgCourse",
        },
        {
          title: "Содержание",
          path: "/content",
          // svg: "SvgCourse",
        },
      ],
    };
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
  background-color: #6f6ff0;
  color: #f1f1fd;
}
.activeItem:hover {
  background-color: #6f6ff0;
}
</style>