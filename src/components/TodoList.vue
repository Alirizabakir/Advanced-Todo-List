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
        ><i
          @click="contentUp(ID), (isActive = !isActive)"
          class="bx bx-edit"
        ></i
      ></span>
      <span
        :class="{
          darkSpan: theme,
          lightSpan: !theme,
          delActive: isActive,
        }"
        class="delete"
        ><i
          @click="delTodo($event, ID, index), (isActive = !isActive)"
          class="bx bx-x-circle"
        ></i
      ></span>
      <span
        :class="{
          darkSpan: theme,
          lightSpan: !theme,
        }"
        @click="isActive = !isActive"
        class="edit"
        ><i class="bx bx-dots-vertical-rounded"></i
      ></span>
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
    contentUp(ID) {
      return this.$store.commit("updateTodo", ID);
    },
    delTodo(e, ID, cloneID) {
      e.target.closest("li").classList.add("delete");
      e.target.closest("li").classList.remove("delete");
      const values = [ID, cloneID];
      return this.$store.commit("deleteTodo", values);
    },
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
      margin: 0.3rem;
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
    .edit {
      cursor: pointer;
    }
    .delete {
      position: absolute;
      right: 0;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s;
    }
    .update {
      position: absolute;
      right: 0;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s;
    }
    .delActive {
      right: 100%;
      opacity: 1;
      visibility: visible;
      transition-delay: 0;
    }
    .upActive {
      right: 200%;
      opacity: 1;
      visibility: visible;
      transition-delay: 0.2s;
    }
  }
}
</style>
