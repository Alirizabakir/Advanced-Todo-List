<template>
  <div :class="{ darkNav: theme, lightNav: !theme }" id="nav">
    <Create :class="{ createActive: create }" class="create" />
    <Navigation />
    <div class="navbar container">
      <div class="link">
        <router-link :class="{ darkA: theme, lightA: !theme }" to="/"
          ><i class="bx bx-list-ul"></i
        ></router-link>
        <router-link :class="{ darkA: theme, lightA: !theme }" to="/recycling"
          ><i class="bx bxs-trash"></i
        ></router-link>
      </div>
      <div class="view">
        <router-view />
      </div>
    </div>
    <Interaction />
  </div>
</template>

<script>
import Create from "./components/Create.vue";
import Navigation from "./components/Navigation.vue";
import Interaction from "./components/Interaction.vue";
export default {
  name: "App",
  components: { Create, Navigation, Interaction },
  computed: {
    theme() {
      return this.$store.state.theme;
    },
    create() {
      return this.$store.state.create;
    },
  },
  created(){
    return this.$store.commit('createdTodo')
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}
#nav {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  height: 100%;
  .create {
    position: absolute;
    top: 0;
    opacity: 0;
    visibility: hidden;
    left: calc(50% - 150px);
    z-index: 100;
  }
  .createActive {
    top: 10%;
    opacity: 1;
    visibility: visible;
  }
  .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5rem 0;
    height: 100%;

    .link {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 1rem;
      width: 100%;
      a {
        font-size: 2rem;
        margin-left: 1rem;
      }
      .darkA {
        color: var(--btnDark);
      }
      .lightA {
        color: var(--btnLight);
      }
    }
    .view {
      flex: 1;
      width: 100%;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 0px;
      }
    }
  }
}
.darkNav {
  background-color: var(--bgDark);
}
.lightNav {
  background-color: var(--bgLight);
}
</style>
