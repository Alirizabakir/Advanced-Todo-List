<template>
  <div class="RecyclingList">
    <ul class="list">
      <li
        :style="{
          top: 5 * todo.index + 'rem',
        }"
        class="listItem"
        :class="{ listPosition: position, darkList: theme, lightList: !theme }"
        v-for="(todo, index) in dellList"
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
        <TodoListDel
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
import TodoListDel from "@/components/TodoListDel.vue";

export default {
  name: "RecyclingList",
  data() {
    return {
      startID: null,
      startCloneID: null,
      position: true,
    };
  },
  components: {
    TodoListDel,
  },
  computed: {
    dellList() {
      return this.$store.state.dellList;
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
      this.dellList[this.startID].index = cloneID;
      this.dellList[ID].index = this.startCloneID;
      setTimeout(() => {
        this.dellList.sort((a, b) => {
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
.RecyclingList {
  width: 100%;
  height: 100%;
  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-auto-columns: repaet();
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    position: relative;
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
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
      border-radius: 0.5rem;
      transition: all 0.4s;
      .darkDrag {
        color: var(--btnDark);
      }
      .lightDrag {
        color: var(--btnLight);
      }
      .draggeble {
        height: 100%;
        width: 70px;
        position: relative;
        font-size: 1.5rem;

        .bx {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .listPosition {
      position: absolute;
      width: 100%;
      height: 70px;
      transition: all 0.4s;
    }
  }
}
</style>
