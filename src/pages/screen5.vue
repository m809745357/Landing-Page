<template lang="html">
    <div class="">
        <titleblock :attributes="titleblocks"></titleblock>
        <contact :attributes="body"></contact>
    </div>
</template>

<script>
    import contact from '../components/contact.vue'
    import titleblock from '../components/titleblock.vue'

    export default {
        props: ['attributes'],
        data() {
            return {
                body: this.attributes.body,
                titleblocks: this.attributes.titleblocks
            }
        },
        components: {
            contact,
            titleblock
        },
    }
</script>

<style lang="scss">
</style>
