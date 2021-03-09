<template>
    <div>
        <Fry :salt="salt"/>
    </div>
</template>

<script>
import Fry from "./Fry.vue"
export default {
    name: "FriedChicken",
    components: {
        Fry
    },
    props: ["salt"],
    mounted() {
        console.log(this.salt);
    }
}
</script>