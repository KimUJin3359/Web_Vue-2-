<template>
    <div>
        <button @click="getSalt"> 버튼 </button>
    </div>
</template>

<script>
export default{
    name: "Chicken",
    props:{
        salt: Number
    },
    methods: {
        getSalt() {
            alert(this.salt);
        }
    }
}    
</script>