<template>
  <div>
    This is a Chicken
    <br />
    <button @click="getMessage">Chicken</button>
    <br />
    salt : {{ getSalt }}, message : {{ getMsg }}
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Chicken",
  components: {},
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