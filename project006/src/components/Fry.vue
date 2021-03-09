<template>
  <div>
    This is a Fry
    <br />
    <button @click="getMessage">Fry</button>
    <br />
    salt : {{ getSalt }}, message : {{ getMsg }}
    <br />
    <br />
    <br />
    <Chicken />
  </div>
</template>

<script>
import Chicken from "./Chicken.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Fry",
  components: {
    Chicken,
  },
  computed: {
    ...mapGetters(["getSalt"]),
    ...mapGetters(["getMsg"]),
  },
  methods: {
    ...mapMutations(["getMessage"]),
  },
};
</script>