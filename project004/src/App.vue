<template>
  <div id="app">
    Parent Counter : {{ getCounter }}
    <br>
    <button @click="addCounter" style="width: 30px; height: 30px; margin-right: 30px;">+</button>

    <button @click="subCounter" style="width: 30px; height: 30px;">-</button>

    <Child />
  </div>
</template>

<script>
import Child from './components/Child.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    Child
  },
  // data() {
  //   return {
  //     counter : 0
  //   }
  // },
  methods: {
    //this.$store.commit('addCounter');
    ...mapMutations(['addCounter']),
    //actions는 dispatch로 받아옴 or ...mapActions
    subCounter(){
      this.$store.state.counter--;
    },
  },
  computed:{
    ...mapGetters(['getCounter'])
    // caching 연산할 때 filter, reverse 로직이 들어갈 때
    // doubleCounter(){
    //   return this.$store.getters.doubleCounter;
    // },
    // parentCounter(){
    //   return this.$store.getters.getCounter;
    // }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>