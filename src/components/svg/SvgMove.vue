

<template>
  <div>
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.14379 5.87997L5.88876 2.625L2.63379 5.87997"
        stroke="#7D7F8E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.88867 18.375V2.625"
        stroke="#7D7F8E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.8564 15.1201L15.1115 18.3751L18.3664 15.1201"
        stroke="#7D7F8E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.1113 2.625V18.375"
        stroke="#7D7F8E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      // default: "#2B2D42",
    },
  },
  data() {
    return {
      // defaultColor: '#'
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 24px;
  width: 24px;
  padding: 0;
}
svg {
  stroke: #2b2d42;
  transition: stroke 0.3s ease-in-out;
}
.active {
  stroke: #f1f1fd;
}
</style>

