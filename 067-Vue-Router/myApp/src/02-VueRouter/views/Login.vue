<template>
    <div>
        Login
        <button @click="handleClick">click</button>
    </div>
</template>
<script setup>
const handleClick = () => {
    //模拟登录的情况
    localStorage.setItem("token", "angelo");
    console.log("Login");
}
</script>