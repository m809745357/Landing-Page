<template lang="html">
    <div class="">
        <motto v-for="(motto, index) in mottos" :key="index" :attributes="motto"></motto>
        <paragraph v-for="(paragraph, index) in paragraphs" :key="index" :attributes="paragraph"></paragraph>
        <contact :attributes="body"></contact>
    </div>
</template>

<script>
    import paragraph from '../components/paragraph.vue'
    import motto from '../components/motto.vue'
    import contact from '../components/contact.vue'

    export default {
        props: ['attributes'],
        data() {
            return {
                mottos: this.attributes.mottos,
                paragraphs: this.attributes.paragraphs,
                body: this.attributes.body
            }
        },
        components: {
            paragraph,
            motto,
            contact
        },
    }
</script>

<style lang="scss">
</style>
