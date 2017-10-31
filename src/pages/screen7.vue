<template lang="html">
    <div class="">
        <motto v-for="(motto, index) in mottos" :key="index" :attributes="motto"></motto>
        <contact v-for="(body, index) in bodys" :key="index" :attributes="body.body"></contact>
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
                bodys: this.attributes.bodys
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
