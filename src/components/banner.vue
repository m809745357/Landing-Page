<template lang="html">
    <img :src="banner" class="banner">
</template>

<script>
    export default {
        props: ['attributes'],
        data() {
            return {
                banner: this.attributes
            }
        }
    }
</script>

<style lang="scss">
    .banner {
        width: 100%;
        height: 100%;
    }
</style>
