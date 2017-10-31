<template lang="html">
	<div class="hotline">
		<div class="title"><i class="glyphicon glyphicon-earphone"></i><span class="red">咨询热线：</span></div>
		<div class="content">
			<label>国内：</label>

			<div class="dh">{{ hotline.international }}</div>
			<br>

			<label>国际：</label>

			<div class="dh">{{ hotline.domestic }}</div>
		</div>
	</div>
</template>
<script>
    export default {
        props: ['attributes'],
        data() {
            return {
            	hotline: this.attributes
            }
        }
    }
</script>
<style lang="scss">
	.hotline {
		position: fixed;
		top: 30%;
		left: 10%;
	}
	.hotline i {
		font-size: 22px;
		font-weight: bold;
		position: relative;
		top: 5px;
	}
	.hotline .red {
		font-size: 18px;
		margin-left: 0.5em;
		color: #ff931e;
	}
	.hotline .content {
		background: url(/src/images/hotlinebg.jpg)  no-repeat;
		padding: 30px 20px 10px 20px;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		color: #fff;
		margin-top: 5px;
	}
	.hotline .content label {
		font-size: 16px;
		font-weight: 400;
	}
	.hotline .content .dh {
		font-size: 18px;
		font-weight: bold;
	}
	@media (max-width: 768px) {
		.hotline {
			display: none;
		}
	}
</style>