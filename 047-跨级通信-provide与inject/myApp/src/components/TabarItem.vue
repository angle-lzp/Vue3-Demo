<template>
    <li @click="handleClick">
        {{ item }}
    </li>
</template>

<script>
export default {
    props: ["item"],
    inject: ["navTitle", "app"],
    methods: {
        handleClick() {
            this.app.navTitle = this.item
            console.log(this.app.navtitle);
        }
    }
}
</script>