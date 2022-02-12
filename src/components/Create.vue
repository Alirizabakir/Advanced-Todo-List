<template>
  <div class="Create">
    <input v-model="value" type="text" placeholder="Write Something.." />
    <span class="save">
      <i @click="save()" class="bx bx-save"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "Create",
  props: {
    msg: String,
  },
  data() {
    return {
    };
  },
  computed: {
    value : {
     get(){
       return this.$store.getters.getValue;
     },
     set(value){
       this.$store.dispatch('setValueData', value)
     }
    }
  },
  methods: {
    save(){
      return this.$store.commit('save')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Create {
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--btnDark);
  border-radius: 0.5rem;
  input {
    background-color: var(--contDark);
    width: 80%;
    height: 40px;
    padding: 0.5rem 1rem;
    color: var(--textDark);
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .save {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    border-radius: 0.5rem;
    width: 70px;
    height: 50px;
    background-color: var(--contDark);
    .bx {
      color: white;
      cursor: pointer;
      &:hover {
        filter: drop-shadow(0 0 5px white);
      }
    }
  }
}
</style>
