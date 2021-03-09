<template>
  <div id="app">
    This is an App
    <br />
    <button @click="getMessage">App</button>
    <br />
    salt : {{ getSalt }}, message : {{ getMsg }}
    <br />
    <br />
    <br />
    <FriedChicken />
  </div>
</template>

<script>
import FriedChicken from "./components/FriedChicken";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    FriedChicken,
  },
  computed: {
    ...mapGetters(["getSalt"]),
    ...mapGetters(["getMsg"]),
  },
  methods: {
    ...mapMutations(["getMessage"])
  },
};
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
