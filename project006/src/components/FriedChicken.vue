<template>
  <div>
    This is a Fried Chicken
    <br />
    <button @click="getMessage">Fried Chicken</button>
    <br />>
    salt : {{ getSalt }}, message : {{ getMsg }}
    <br />
    <br />
    <br />
    <Fry />
  </div>
</template>

<script>
import Fry from "./Fry.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "FriedChicken",
  components: {
    Fry,
  },
  data() {
    return {};
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