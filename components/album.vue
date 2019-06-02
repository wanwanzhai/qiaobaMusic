<template>
	<view class="album" v-if="albumData">
		<view class="album-item" v-for="(item, index) in albumData" :key="index" :style="{width:blockWidth, height:blockWidth}">
			<view class="item-image">
				<image v-if="item.src" :src="item.src" mode='widthFix' class="album-image"  @tap="goToUrl"></image>
				<image class="icon" v-if="imgSrc" src="/static/image/icon/kaishi-2.png"  mode='widthFix'  @tap="goToUrl"></image>
				<view>
					<image src="/static/image/icon//yinle.png" class="icon-listen"></image>
					<view class="listen-view">{{item.count/10000 > 1 ? item.count/10000 + 'Íò' : item.count}}</view>
				</view>
			</view>
			<view class="name">{{item.name}}</view>
			<view class="author">{{item.author}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			albumData: {
				type: Array,
				default: () => {
					return []
				}
			},
			blockWidth:{
				type:String,
				default:'32.8%'
			}
		},
		data () {
			return {
				imgSrc: '/static/image/'
			}
		},
		methods: {
			goToUrl: function() {
				uni.navigateTo({
					url: '../info/index',
					success: () => {},
					fail: (err) => {
						console.log(err)
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.album {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.album-item {
			margin-bottom: 20upx;

			.item-image {
				position: relative;
				.icon {
					position: absolute;
					width: 20px;
					height: 20px;
					bottom: 14px;
					right: 5px;
					border-radius: 50%;
				}
			}
		}
		.name {
			font-size: 13px;
			text-align: left;
		}
		.author {
			font-size: 13px;
			text-align: left;
			color: gray;
		}
		.album-image {
			width: 100%;
		}
		.icon-listen {
			position: absolute;
			width: 18px;
			height: 18px;
			bottom: 14px;
			left: 5px;
		}
		.listen-view {
			position: absolute;
			font-size: 12px;
			color: #fff;
			bottom: 14px;
			left: 24px;
		}
	}
</style>
