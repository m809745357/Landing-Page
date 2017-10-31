<template lang="html">
    <div class="block-title">
        <div class="block-title-left">
            <img :src="'/src/images/title-' + titleblock.num + '-left.jpg'" alt="">
        </div>

        <div class="block-title-center" :class="titleblock.type">
            <span v-html="titleblock.text"></span>
        </div>

        <div class="block-title-right">
            <img :src="'/src/images/title-' + titleblock.num + '-right.jpg'" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['attributes'],
        data() {
            return {
            	titleblock: this.attributes
            }
        }
    }
</script>

<style lang="scss">
    .block-title {
        display: grid;
        grid-template-columns: auto auto auto;
        justify-content: center;

        .block-title-left {
            justify-self: right;
        }

        .block-title-center {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 24px;
            text-align: center;

            &.one-line {
                background: url(/src/images/title-1-center.jpg) repeat-x;
            }

            &.two-line {
                background: url(/src/images/title-2-center.jpg) repeat-x;
            }

            &.three-line {
                background: url(/src/images/title-3-center.jpg) repeat-x;
            }
        }

        .block-title-right {
            justify-self: left;
        }
    }
    @media screen and (max-width: 768px) {
        .block-title-left, .block-title-right {
            display: none;
        }
        .block-title-center {
            padding: 0 0.27rem /* 20/75 */;
            padding-top: 0.13rem /* 10/75 */;
            font-size: 18px !important;
        }
    }

</style>
