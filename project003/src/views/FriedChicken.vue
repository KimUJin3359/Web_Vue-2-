<template>
    <div>
        <Fry @msg="getMsg"/>
    </div>
</template>

<script>
import Fry from "../components/Fry.vue"

export default {
    name: "FriedChicken",
    components: {
        Fry
    },
    data() {
        return {
            msg: '',
        }
    },
    methods: {
        getMsg(msg) {
            console.log("This is a FriedChicken");
            console.log(msg);
        }
    }
}
</script>