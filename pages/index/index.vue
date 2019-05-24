<template>
	<view class="content">
		<view>
			<top />
		</view>
		<view>
			<swiper class="swiper" :autoplay="swiper.autoplay">
				<swiper-item v-for="(item, index) in swiper.img" :key="index">
					<image :src="item" class="swiper-image"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="content-menu">
			<view v-for="(item, index) in contentBar" :key="index" class="content-bar">
				<image :src="item.src" class="bar-icon"></image>
				<view>{{item.name}}</view>
			</view>
		</view>
		<view class="useed">
			<view class="useed-left-content">
				<image class="useed-left" :src="content.img"></image>
				<image class="bar-icon play-icon" src="../../static/image/icon/sanjiao.png"></image>
				<view class="imgTitle">{{content.imgTitle}}</view>
			</view>
			<view class="info">
				<view class="useed-right" v-for="(item, index) in content.list" :key="index">
					<view class="right-left">
						<text>{{item.name}}</br>{{item.disc}}</text>
					</view>
					<image class="right-image" :src="item.src"></image>
				</view>
			</view>
		</view>
		<album-block :data="recommend" :refresh="true"/>
		<album-block :data="newest" :refesh="false"/>
		<album-block :data="sole" :refesh="false" blockWidth="49.5%"/>
		<view @tab="test()">测试</view>
	</view>
</template>
<script>
	import Top from '@/components/top.vue'
	import albumBlock from '@/components/albumBlock.vue'
	export default {
		components: {
			'top': Top,
			'album-block': albumBlock
		},
		
		data() {
			return {
				title: 'Hello',
				swiper:{
					autoplay:true,
					img:[
						'../../static/image/1.jpeg',
						'../../static/image/2.jpeg',
						'../../static/image/3.jpeg'
					]
				},
				contentBar:[
					{name:"歌手",src:'../../static/image/icon/ren_l.png'},
					{name:"排行",src:'../../static/image/icon/paixingbang_l.png'},
					{name:"分类歌单",src:'../../static/image/icon/fenlei1_l.png'},
					{name:"电台",src:'../../static/image/icon/xinhaojieshouqi_l.png'},
					{name:"视频",src:'../../static/image/icon/shipin-tianchong_l.png'}
				],
				content:{
					img:"../../static/image/sc1.jpg",
					imgTitle:'个性电台',
					list:[
						{name:"新歌新碟",disc:"神秘嘉宾先生选择新歌",src:'../../static/image/sc2.jpeg'},
						{name:"动画片专辑|热映",disc:"李建老狼联手现场",src:'../../static/image/sc3.jpeg'}
					]
				},
				recommend:{
					title:"为你推荐",
					list:[
						{name:"你的独家品味推荐",src:"../../static/image/sc5.jpg",count:"53133000",updateTime:"刚刚更新"},
						{name:"慢跑随身听",src:"../../static/image/sc7.jpg",count:"210000",updateTime:"刚刚更新"},
						{name:"失恋解药",src:"../../static/image/sc8.jpg",count:"4000",updateTime:"刚刚更新"},
						{name:"薛之谦创作歌曲集",src:"../../static/image/sc9.jpg",count:"9200000",updateTime:"刚刚更新"},
						{name:"青春是一场未知的探险",src:"../../static/image/sc10.jpg",count:"8909",updateTime:"刚刚更新"},
						{name:"欧美|渐入佳境的入耳暖心旋律",src:"../../static/image/sc11.jpg",count:"120000",updateTime:"刚刚更新"}
					]
				},
				newest:{
					title:"最新专辑",
					list:[
						{name:"离开的接口",author:"刘瑞琪",src:"../../static/image/sc12.jpg"},
						{name:"Cerll ls:The Albuild",author:"Made Will Made It",src:"../../static/image/sc13.jpg"},
						{name:"SSS.GRIDMANIDSFEF",author:"OTX",src:"../../static/image/sc14.jpg"},
						{name:"No place",author:"Backstreet",src:"../../static/image/sc15.jpg"},
						{name:"别再闹了",author:"毛不易",src:"../../static/image/sc16.jpg"},
						{name:"即刻电音",author:"即可电音",src:"../../static/image/sc17.jpg"}
					]
				},
				sole:{
					title:"独家内容",
					list:[
						{name:"乐见大牌|靖佩瑶清唱《清风是》又勾起广大会议",count:"531330000",src:"../../static/image/sc22.jpg"},
						{name:"精心专用！法兰的歌声让你情绪在温暖的夜色和平",count:"53130000",src:"../../static/image/sc19.jpg"},
						{name:"你妹听过的\"成功学\"说唱：人生赢家的秘诀在于洗澡",count:"31330000",src:"../../static/image/sc20.jpg"},
						{name:"为N对情侣现场恋爱BGM.Kris Wu甘当电灯泡",count:"1338000",src:"../../static/image/sc21.jpg"},
					]
				}
			}
		},
		
		methods: {
		}
	}
</script>

<style lang="scss">
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	.swiper-image {
		width: 100%;
		height: 100%;
	}
	.content-menu {
		display: flex;
		font-size: 12px;
		justify-content: space-around;
		padding: 18px;
		border-bottom: 1px solid #e1dddd;
		.content-bar {}
	}
	.useed {
		display: flex;
		padding: 10px;
		.useed-left-content {
			position: relative;
			margin-right: 8px;
			.useed-left {
				width: 110px;
				height: 110px;
			}
			.play-icon {
				position: absolute;
				width: 25px;
				height: 25px;
				top: 50%;
				left: 50%;
				margin: -18px auto auto -12px;
				opacity: .8;
			}
			.imgTitle {
				position: absolute;
				top: 50%;
				left: 17%;
				color: white;
				font-size: 14px;
				margin: 10px;
			}
		}
	}
	.bar-icon {
		width: 22px;
		height: 22px;
	}
	.info {
		height: 100%;
		width: 100%;
		&>.useed-right:first-child{
			margin-bottom: 12upx;
		}
	}
	.useed-right {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background:  #f3f1f1;
		text-align: left;
		height: 52px;
	
		.right-left {
			font-size: 14px;
			width: calc(100% - 52px);
			margin-left: 20upx;
		}
		.right-image {
			width: 52px;
			height: 52px;
		}
	}
	


</style>
