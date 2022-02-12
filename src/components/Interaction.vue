<template>
  <div class="Interaction" :class="{ darkInter: theme, lightInter: !theme }">
    <div
      class="box"
      @click="activeClass = !activeClass"
      :class="{ active: activeClass }"
    >
      <span style="--i: 0; --x: -1; --y: 0"
        ><a href="https://www.facebook.com/alirizabkr/" target="_blank"
          ><i class="bx bxl-facebook-circle"></i></a
      ></span>
      <span style="--i: 1; --x: 1; --y: 0"
        ><a href="https://twitter.com/alirizabkr" target="_blank"
          ><i class="bx bxl-twitter"></i></a
      ></span>
      <span style="--i: 2; --x: 0; --y: -1"
        ><a href="https://www.linkedin.com/in/alirizabkr/" target="_blank"
          ><i class="bx bxl-linkedin"></i></a
      ></span>
      <span style="--i: 3; --x: 0; --y: 1"
        ><a href="https://www.instagram.com/arizabkr/" target="_blank"
          ><i class="bx bxl-instagram-alt"></i></a
      ></span>
      <span style="--i: 4; --x: 1; --y: 1"
        ><a href="https://github.com/Alirizabakir" target="_blank"
          ><i class="bx bxl-github"></i></a
      ></span>
      <span style="--i: 5; --x: -1; --y: -1"
        ><a href="what"><i class="bx bxl-whatsapp"></i></a
      ></span>
      <span style="--i: 6; --x: 0; --y: 0"
        ><a href="aarizabkr@gmail.com" target="_blank"
          ><i class="bx bxl-gmail"></i></a
      ></span>
      <span style="--i: 7; --x: -1; --y: 1"
        ><a href="#"><i class="bx bx-joystick"></i></a
      ></span>
      <span style="--i: 8; --x: 1; --y: -1"
        ><a href="#"><i class="bx bxs-music"></i></a
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Interaction",
  props: {
    msg: String,
  },
  data() {
    return {
      activeClass: false,
    };
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Interaction {
  width: 200px;
  height: 200px;
  padding-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    width: 70px;
    height: 70px;
    cursor: pointer;
    border-radius: 10px;
    background-color: #212532;
    position: relative;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-delay: 0.8s;
    span {
      width: 7px;
      height: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      background-color: #fff;
      border-radius: 50%;
      transform: translate(calc(12px * var(--x)), calc(12px * var(--y)));
      transition: all 0.5s;
      transition-delay: calc(0.1s * var(--i));
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0rem;
        .bx {
          transition: all 0.5s;
        }
      }
    }
  }
  .active {
    width: 200px;
    height: 200px;
    transition-delay: 0s;
    span {
      width: 45px;
      height: 45px;
      background-color: #333849;
      transform: translate(calc(60px * var(--x)), calc(60px * var(--y)));

      a {
        color: #2dfc52;
        font-size: 1.5rem;
        transition: all 0.3s;
        transition-delay: calc(0.1s * var(--i));

        .bx {
          &:hover {
            color: #2dfc52;
            filter: drop-shadow(0 0 8px #2dfc5375);
          }
        }
      }
    }
  }
}

.darkInter {
  color: var(--btnDark);
}
.lightInter {
  color: var(--btnLight);
}
</style>
