<template>
  <div class="AllList">
    <ul class="list">
      <li
        :style="{
          top: 5 * todo.index + 'rem',
        }"
        class="listItem"
        :class="{darkList: theme, lightList: !theme }"
        v-for="(todo, index) in showList"
        :key="index"
      >
        <span
          draggable="true"
          @dragstart="dragStart(index, todo.index)"
          @dragenter="dragEnter($event, index)"
          @dragleave="dragLeave($event, index)"
          @dragover="dragOver($event, index)"
          @dragend="dragEnd($event)"
          @drop="dragDrop($event, index, todo.index)"
          :class="{ darkDrag: theme, lightDrag: !theme }"
          class="draggeble"
          ><i class="bx bx-grid-vertical"></i
        ></span>
        <TodoList
          :ID="index"
          :content="todo.content"
          :date="todo.date"
          :index="todo.index"
        />
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";

export default {
  name: "AllList",
  data() {
    return {
      startID: null,
      startCloneID: null,
      position: true,
    };
  },
  components: {
    TodoList,
  },
  computed: {
    showList() {
      return this.$store.state.showList;
    },
    theme() {
      return this.$store.state.theme;
    },
  },
  methods: {
    dragStart(ID, cloneID) {
      this.startID = ID;
      this.startCloneID = cloneID;
    },
    dragEnter(e) {
      e.target.closest("li").classList.add("over");
      e.target.closest("li").style.transform = "translateX(10px)";
    },
    dragEnd(e) {
      e.target.closest("li").classList.remove("over");
      e.target.closest("li").style.transform = "translateX(0)";
    },
    dragLeave(e) {
      e.target.closest("li").style.transform = "translateX(0)";
    },
    dragOver(e) {
      e.preventDefault();
    },
    dragDrop(e, ID, cloneID) {
      this.showList[this.startID].index = cloneID;
      this.showList[ID].index = this.startCloneID;
      setTimeout(() => {
        this.showList.sort((a, b) => {
          return a.index - b.index;
        });
      }, 100);
      e.target.closest("li").style.transform = "translateX(0)";
      e.target.closest("li").classList.remove("over");
      console.log("Drop", this.showList);
    },
  },
};
</script>

<style lang="scss" scoped>
.AllList {
  .list {
    position: relative;
    width: 100%;
    .darkList {
      background-color: var(--contDark);
    }
    .lightList {
      background-color: var(--contLight);
    }
    .delete {
      opacity: 0;
      visibility: hidden;
    }
    .listItem {
      display: flex;
      height: 70px;
      position: absolute;
      transition: all 0.4s;
      margin-bottom: 1rem;
      border-radius: 0.5rem;
      width: 100%;
      .darkDrag {
        color: var(--btnDark);
      }
      .lightDrag {
        color: var(--btnLight);
      }
      .draggeble {
        font-size: 1.5rem;
        width: 50px;
        .bx {
          line-height: 70px;
        }
      }
    }
  }
}
</style>
