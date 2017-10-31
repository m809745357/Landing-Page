<template lang="html">
    <div class="">
        <motto v-for="(motto, index) in mottos" :key="index" :attributes="motto"></motto>
        <titleblock :attributes="titleblocks"></titleblock>
        <paragraph v-for="(paragraph, index) in paragraphs" :key="index" :attributes="paragraph"></paragraph>
        <contact :attributes="body"></contact>
    </div>

</template>

<script>
    import paragraph from '../components/paragraph.vue'
    import motto from '../components/motto.vue'
    import contact from '../components/contact.vue'
    import titleblock from '../components/titleblock.vue'

    export default {
        props: ['attributes'],
        data() {
            return {
                mottos: this.attributes.mottos,
                paragraphs: this.attributes.paragraphs,
                body: this.attributes.body,
                titleblocks: this.attributes.titleblocks
            }
        },
        components: {
            paragraph,
            motto,
            contact,
            titleblock
        },
    }
</script>

<style lang="scss">
</style>
