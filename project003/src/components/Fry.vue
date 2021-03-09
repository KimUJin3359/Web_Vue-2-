<template>
    <div>
        <Chicken @msg="emit"/>
    </div>
</template>

<script>
import Chicken from './Chicken.vue'

export default {
    name: "Fry",
    components: {
        Chicken
    },
    methods: {
        emit(info) {
            this.$emit("msg", info);
        }
    }
}
</script>