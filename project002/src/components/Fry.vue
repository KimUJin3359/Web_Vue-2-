<template>
    <div>
        <Chicken :salt="salt"/>
    </div>
</template>

<script>
import Chicken from './Chicken.vue'

export default {
    name: "Fry",
    components: {
        Chicken
    },
    props: ["salt"],
}
</script>