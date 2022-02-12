<template>
  <div class="Navigation">
    <div class="navBox" :class="{ active: isActive }">
      <div
        :class="{ darkNavigation: theme, lightNavigation: !theme }"
        class="toggle"
        @click="isActive = !isActive"
      >
        <i class="bx bxs-wrench"></i>
      </div>
      <li
        :class="{ darkNavigation: theme, lightNavigation: !theme }"
        @click="createActive"
        style="--i: 2"
      >
        <i class="bx bx-plus"></i>
      </li>
      <li
        :class="{ darkNavigation: theme, lightNavigation: !theme }"
        style="--i: 1"
      >
        <i class="bx bx-grid-alt"></i>
      </li>
      <li
        :class="{ darkNavigation: theme, lightNavigation: !theme }"
        @click="themeChange"
        style="--i: 0"
      >
        <i class="bx bx-moon"></i>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    msg: String,
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    },
  },
  methods: {
    themeChange() {
      this.$store.commit("themeActive");
    },
    createActive() {
      this.$store.commit("createActive");
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Navigation {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 7rem;
  height: 100%;
  width: 200px;
  .navBox {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    height: 100px;
    width: 110px;
    .toggle {
      position: absolute;
      font-size: 1.5rem;
      width: 50px;
      height: 50px;
      background-color: var(--btnDark);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
      border-radius: 50%;
      cursor: pointer;
      .bx {
        color: white;
        &:hover {
          filter: drop-shadow(0 0 5px white);
        }
      }
    }
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      background-color: var(--btnDark);
      position: absolute;
      left: 0;
      opacity: 1;
      transform: rotate(0deg) translateX(60px);
      transform-origin: 150px;
      transition: all 0.4s;
      transition-delay: calc(0.2s * var(--i));
      color: white;
      cursor: pointer;
      box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.4);
      .bx {
        font-size: 1.6rem;

        transform: rotate(calc(-20deg * var(--i)));
        &:hover {
          filter: drop-shadow(0 0 5px white);
        }
      }
    }
  }
}

.darkNavigation {
  background-color: var(--btnDark);
}
.lightNavigation {
  background-color: var(--btnLight) !important;
}
.active {
  li {
    opacity: 1 !important;
    transform: rotate(calc(180deg / 9 * var(--i))) !important;
  }
}
</style>
