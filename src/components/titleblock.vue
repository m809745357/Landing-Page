<template lang="html">
    <div v-bind:class="[normalclass, typeclass]">
        <div class="item block-title-left">&nbsp;</div>
        <div class="item block-title-center"><span v-html="titleblock.text"></span></div>
        <div class="item block-title-right">&nbsp;</div>
    </div>
</template>

<script>
    export default {
        props: ['attributes'],
        data() {
            return {
            	normalclass: 'block-title',
            	typeclass: 'block-title-'+this.attributes.type,
            	titleblock: this.attributes
            }
        }
    }
</script>

<style lang="scss">
	.block-title {
		display: flex;
		justify-content: center;
		text-align: center;
		margin-top: 0.31rem;
	}
	.block-title-one-line {
		.item {
			font-size: 24px;
			color:#fff;
			height: 45px;
			line-height: 45px;
		}
		.block-title-left, .block-title-right {
			width: 65px;
			height: 45px;
		}
		.block-title-left {
			background: url(/src/images/title-1-left.jpg) no-repeat;
		}
		.block-title-right {
			background: url(/src/images/title-1-right.jpg) no-repeat;
		}
		.block-title-center {
			min-width: 267px;
			padding: 0 20px;
			background: url(/src/images/title-1-center.jpg) repeat-x;
		}
	}
	.block-title-two-line {
		.item {
			font-size: 24px;
			color:#fff;
			height: 92px;
		}
		.block-title-left, .block-title-right {
			width: 123px;
			height: 92px;
		}
		.block-title-left {
			background: url(/src/images/title-2-left.jpg) no-repeat;
		}
		.block-title-right {
			background: url(/src/images/title-2-right.jpg) no-repeat;
		}
		.block-title-center {
			min-width: 267px;
			background: url(/src/images/title-2-center.jpg) repeat-x;
			span {
				display: inline-block;
				padding-top: 10px;
			}
		}
	}

	.block-title-three-line {
		justify-content: flex-start;
		.block-title-left {
			display: none;
		}
		.block-title-right {
			height: 39px;
			width: 52px;
			background: url(/src/images/title-3-right.jpg) no-repeat;
		}
		.block-title-center {
			padding: 0 10px 0 18px;
			font-size: 24px;
			color:#fff;
			background: #ff931e;
			height: 39px;
			line-height: 39px;
		}
	}
	
</style>