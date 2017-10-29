<template lang="html">
    <div class="">
        <motto v-for="(motto, index) in mottos" :key="index" :attributes="motto"></motto>
        <paragraph v-for="(paragraph, index) in paragraphs" :key="index" :attributes="paragraph"></paragraph>
    </div>
</template>

<script>
    import paragraph from '../components/paragraph.vue'
    import motto from '../components/motto.vue'

    export default {
        props: ['attributes'],
        data() {
            return {
                mottos: this.attributes.mottos,
                paragraphs: this.attributes.paragraphs
            }
        },
        components: {
            paragraph,
            motto
        },
    }
</script>

<style lang="css">
</style>
