<template lang="html">
    <div class="body">
        <div class="content" v-for="(content, index) in contents" :key="index">
            <paragraph v-if="content.paragraphs" v-for="(paragraph, index) in content.paragraphs" :key="index" :attributes="paragraph"></paragraph>
            <img v-if="content.images" v-for="(image, index) in content.images" :key="index" :src="image" width="100%">
            <img v-if="content.videos" v-for="(video, index) in content.videos" :key="index" :src="video" width="100%">
            <banner v-if="content.banner" :attributes="content.banner"></banner>
        </div>
    </div>
</template>

<script>
    import banner from './banner.vue'
    import paragraph from './paragraph.vue'

    export default {
        props: ['attributes'],
        components: {
            paragraph,
            banner
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
                margin-top: 0.31rem /* 50/160 */;
            }
        }
        .content {
            display: flex;
            justify-content: center;
            flex-direction: column;

            img{
                align-self: center;
                margin-top: 0.31rem /* 50/160 */;
            }
        }
        .banner {
            position: relative;
            width: 125%;;
            margin-top: 0.31rem /* 50/160 */ !important;
        }
    }

    @media screen and (min-width: 1019px) {
        .body {
            .banner {
                width: 6.37rem /* 1019/160 */;
            }
        }

        .container {
            width: 6.37rem /* 1019/160 */;
        }

        .row {
            width: 3.45rem /* 552/160 */;
        }
    }
</style>
