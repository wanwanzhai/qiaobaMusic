<template>
	<view class="top">
		<view class="bar">
			<image src="/static/image/icon/fenlei.png" class="icon"></image>
			<view class="top-menu">
				<view class="menu-desp">我的</view>
				<view class="menu-desp sel">音乐馆</view>
				<view class="menu-desp">发现</view>
			</view>
			<image src="/static/image/icon/jiahao.png" class="icon"></image>
		</view>
		<view class="search">
			 <input type="text" placeholder="搜索" placeholder-style="color:rgba(255,255,255,.8);text-align: left;"  class="search-input"/>
			 <image src="/static/image/icon/sousuo5.png" class="icon search-icon"></image>
		</view>
		
	</view>
</template>

<script>
	export default {
		name: 'top',
		
		data () {
			return {}
		},
		
		methods: {},
		
		computed: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		padding: 20px 11px 20px 11px;
		width: 100%;
		background: #f55500;
		color: white;
		.bar {
			display: flex;
			justify-content: space-between;
			width: calc(100% - 22px)
		}
		.top-menu {
			display: flex;
			align-items: center;
		}
		.menu-desp {
			padding: 0 10px;
		}
		.icon {
			width: 24px;
			height: 24px;
		}
		.sel{
			font-size: 36upx;
			font-weight: 600;
		}
		.search {
		    position: relative;
			margin-top: 16px;
			padding: 5px 10px;
			height: 38px;
			line-height: 30px;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			color: white;
			background-color: #d04900;
			width: calc(100% - 22px);
			.search-icon {
				width: 24px;
				height: 24px;
				position: absolute;
				left: 12px;
				top: 8px;
			}
			.search-input {
				margin-left: 34px
			}
		}
	}
</style>
