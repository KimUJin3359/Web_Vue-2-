<template>
    <div>
        <button @click="emit"> 버튼 </button>
    </div>
</template>

<script>
export default{
    name: "Chicken",
    methods: {
        emit() {
            this.$emit("msg", "치킨은 맛있다");
        }
    }
}    
</script>