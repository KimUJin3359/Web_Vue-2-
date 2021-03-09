<template>
  <div>
    Child Counter : {{ doubleCounter }}
    <br />
    <button style="width: 30px; height: 30px; margin-right: 30px">+</button>
    <button style="width: 30px; height: 30px">-</button>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {};
  },
  computed: {
    doubleCounter() {
        return this.$store.getters.doubleCounter;
    },
    ChildCounter() {
        return this.$store.getters.getCounter;
    }
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