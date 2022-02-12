<template>
  <div class="todoBox">
    <div class="content">
      <p class="info" :class="{ darkInfo: theme, lightInfo: !theme }">
        {{ content }}
      </p>
      <p class="date" :class="{ darkDate: theme, lightDate: !theme }">
        {{ date }}
      </p>
    </div>
    <div class="editBox">
      <span
        :class="{
          upActive: isActive,
          darkSpan: theme,
          lightSpan: !theme,
        }"
        class="update"
        ><i @click="undo(ID)" class="bx bx-history undo"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    content: String,
    date: String,
    index: Number,
    ID: Number,
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
    undo(ID){
      return this.$store.commit('undo', ID)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todoBox {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    width: 100%;

    .info {
      flex: 1;
      width: 100%;
      text-align: start;
      padding: 0.7rem 0;
      font-weight: bold;
      border-bottom: 1px solid var(--textLight-alt);
    }
    .darkInfo {
      color: var(--textDark);
    }
    .lightInfo {
      color: var(--textLight);
    }
    .date {
      font-size: 0.6rem;
      padding: 0.2rem 0;
      width: 100%;
      text-align: start;
      font-weight: bold;
    }
    .darkDate {
      color: var(--textDark-alt);
    }
    .lightDate {
      color: var(--textLight-alt);
    }
  }
  .editBox {
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    span {
      font-size: 1.3rem;
      margin: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .darkSpan {
      color: var(--btnDark);
    }
    .lightSpan {
      color: var(--btnLight);
    }
    .undo {
      cursor: pointer;
    }
  }
}
</style>
