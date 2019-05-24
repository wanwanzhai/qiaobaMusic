<template>
	<view>
		<view v-if='data.title' class="title">{{data.title}}
			<image v-if="imgSrc" :src="imgSrc+'jiantou2.png'" class="jiatou"></image>
		</view>
		<view>
			<album :albumData="data.list" :blockWidth="blockWidth"/>
		</view>
		<view class="button-sp-area" v-if="refresh">
			<image v-if="imgSrc" :src="imgSrc+'icon/shuaxin.png'" class="shua-xin"></image>换一批
		</view>
	</view>
</template>

<script>
	import Album from './album.vue'
	export default {
		props: ['data', 'blockWidth', 'refresh'],
		components: {
			album: Album
		},
		data () {
			return {
				imgSrc: '/static/image/',
			}
		},
		methods: {}
	}
</script>

<style lang="scss">
	.title {
		height: 25px;
		position: relative;
		margin-bottom: 5px;
		font-size: 16px;
	}
	.jiatou {
		width: 40upx;
		height: 20px;
		margin-right: 10px;
		vertical-align: center;
		position: absolute;
		top: 4px;
		right: 2px;
	}
	.button-sp-area {
		position: relative;
		margin-bottom: 10px;
		font-size: 14px;
		.shua-xin {
			    width: 15px;
				height: 15px;
				position: absolute;
				top: 3px;
				left: 147px;
		}
	}
	
</style>
