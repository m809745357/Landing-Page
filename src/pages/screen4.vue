<template lang="html">
    <div class="">
        <motto v-for="(motto, index) in mottos" :key="index" :attributes="motto"></motto>
        <titleblock :attributes="titleblocks"></titleblock>
        <contact :attributes="body"></contact>
    </div>
</template>

<script>
    import motto from '../components/motto.vue'
    import contact from '../components/contact.vue'
    import titleblock from '../components/titleblock.vue'

    export default {
        props: ['attributes'],
        data() {
            return {
                mottos: this.attributes.mottos,
                body: this.attributes.body,
                titleblocks: this.attributes.titleblocks
            }
        },
        components: {
            motto,
            contact,
            titleblock
        },
    }
</script>

<style lang="scss">
</style>
