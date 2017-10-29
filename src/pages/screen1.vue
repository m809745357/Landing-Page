<template lang="html">
    <div class="">
        <motto v-for="(motto, index) in mottos" :key="index" :attributes="motto"></motto>
        <paragraph v-for="(paragraph, index) in paragraphs" :key="index" :attributes="paragraph"></paragraph>
        <emails :attributes="emails"></emails>
    </div>
</template>

<script>
    import paragraph from '../components/paragraph.vue'
    import motto from '../components/motto.vue'
    import emails from '../components/emails.vue'

    export default {
        props: ['attributes'],
        data() {
            return {
                mottos: this.attributes.mottos,
                paragraphs: this.attributes.paragraphs,
                emails: this.attributes.emails
            }
        },
        components: {
            paragraph,
            motto,
            emails
        },
    }
</script>

<style lang="css">
</style>
