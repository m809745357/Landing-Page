<template lang="html">
    <p class="paragraph" v-html="paragraph"></p>
</template>

<script>
    export default {
        props: ['attributes'],
        data() {
            return {
                paragraph: this.attributes,
            }
        }
    }
</script>

<style lang="scss">
    .paragraph {
        font-size: 16px;
        line-height: 2em;
        text-indent: 2em;
        margin-top: 3em;
    }
</style>
