<template lang="html">
    <div class="">
        <motto v-for="(motto, index) in mottos" :key="index" :attributes="motto"></motto>
        <contact :attributes="body"></contact>
    </div>
</template>

<script>
    import motto from '../components/motto.vue'
    import contact from '../components/contact.vue'

    export default {
        props: ['attributes'],
        data() {
            return {
                mottos: this.attributes.mottos,
                body: this.attributes.body
            }
        },
        components: {
            motto,
            contact
        },
    }
</script>

<style lang="scss">
</style>
