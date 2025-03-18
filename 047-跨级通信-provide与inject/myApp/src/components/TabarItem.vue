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
            console.log(this.item, this.navTitle);
            this.app.navtitle = this.item
            this.navTitle = this.item
            console.log(this.app.navtitle);
        }
    }
}
</script>