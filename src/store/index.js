import { createStore } from 'vuex'

export default createStore({
  state: {
    upToID: null,
    newTodo: null,
    create: false,
    theme: true,
    dellList: [
      {
        status: false,
        index: 0,
        content: "Delete Todo!",
        date: "06.02.2022 19:39:29",
      },
    ],
    dataList: null,
    showList: [
      {
        status: false,
        index: 0,
        content: "Never Give Up !",
        date: "06.02.2022 19:39:29",
      },
      {
        status: false,
        index: 1,
        content: "Always !",
        date: "06.02.2022 19:39:29",
      },
      {
        status: false,
        index: 2,
        content: "Everything !",
        date: "06.02.2022 19:39:29",
      },
      {
        status: false,
        index: 3,
        content: "Full Moon !",
        date: "06.02.2022 19:39:29",
      },
     
    ],
  },
  getters: {
    getValue(state) {
      return state.newTodo
    }
  },
  mutations: {
    createdTodo(state) {
      if(JSON.parse(localStorage.getItem('todos')) == null){
        localStorage.setItem('todos',JSON.stringify(state.showList))
        localStorage.setItem('delTodos',JSON.stringify(state.dellList))
      }
      state.showList = JSON.parse(localStorage.getItem('todos'))
      state.dellList = JSON.parse(localStorage.getItem('delTodos'))
    },
    undo(state,ID){
      state.showList = JSON.parse(localStorage.getItem('todos'))
      state.showList.push(state.dellList[ID])
      state.showList.map((a,id) => a.index = id)
      state.dellList.splice(ID, 1)
      state.dellList.map((a,id) => a.index = id)
      console.log(state.showList,state.dellList)
      localStorage.setItem('todos',JSON.stringify(state.showList))
    },
    deleteTodo(state, values) {
      state.dellList = JSON.parse(localStorage.getItem('delTodos'))
      state.dellList.push(state.showList[values[0]])
      state.dellList.map((a,id) => a.index = id)
      state.showList.splice(values[0], 1)
      state.showList.map((a,id) => a.index = id)
      console.log(state.showList,state.dellList)
      localStorage.setItem('todos',JSON.stringify(state.showList))
      localStorage.setItem('delTodos',JSON.stringify(state.dellList))
    },
    setValue(state, content) {
      state.newTodo = content
    },
    themeActive(state) {
      state.theme = !state.theme
    },
    createActive(state) {
      state.create = !state.create
    },
    updateTodo(state, ID) {
      state.create = !state.create
      state.newTodo = state.showList[ID].content
      state.upToID = ID
      console.log(state.newTodo)
      localStorage.setItem('todos',JSON.stringify(state.showList))
    },
    save(state) {
      if (state.upToID == null) {
        const newD = new Date();
        const newG = newD.getDate().toString();
        const newA = newD.getMonth().toString();
        const newY = newD.getFullYear().toString();
        const newH = newD.getHours().toString();
        const newM = newD.getMinutes().toString();
        const newS = newD.getSeconds().toString();
        const newDate =
          newG +
          "/" +
          newA +
          "/" +
          newY +
          "\xa0" +
          newH +
          ":" +
          newM +
          ":" +
          newS;
        const todo = {
          status: false,
          index: state.showList.length,
          content: state.newTodo,
          date: newDate,
        };
        state.showList.push(todo);
        state.newTodo = "";
        state.create = !state.create;
        console.log(state.showList);
      } else {
        const aaa = state.newTodo
        state.showList[state.upToID].content = aaa;
        state.upToID = null
        state.newTodo = null
        state.create = !state.create;
        console.log
      }
      localStorage.setItem('todos',JSON.stringify(state.showList))
    }
  },
  actions: {
    setValueData({ commit }, content) {
      commit('setValue', content)
    }
  },
  modules: {
  }
})
