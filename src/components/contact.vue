<template lang="html">
    <div class="body">
        <div class="content" v-for="(content, index) in contents" :key="index">
            <paragraph v-if="content.paragraphs" v-for="(paragraph, index) in content.paragraphs" :key="index" :attributes="paragraph"></paragraph>
            <img v-if="content.images" v-for="(image, index) in content.images" :key="index" :src="image" alt="">
            <img v-if="content.videos" v-for="(video, index) in content.videos" :key="index" :src="video" alt="">
        </div>
    </div>
</template>

<script>
    import paragraph from './paragraph.vue'
    export default {
        props: ['attributes'],
        components: {
            paragraph,
        },
        data() {
            return {
                contents: this.attributes
            }
        }
    }
</script>

<style lang="scss">
    .body {
        .paragraph {
            margin-top: 0;

            &:first-child {
                margin-top: 3em;
            }
        }
        .content {
            display: flex;
            justify-content: center;
            flex-direction: column;

            img{
                align-self: center;
                margin-top: 1em;
            }
        }
    }
</style>
