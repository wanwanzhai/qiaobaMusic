<template>
	<view class="info" :style="setStyle()">
		<view class="bg"></view>
		<view class="content">
			<view class="info-top">
				<view class="top-name">{{audioList[audioPlaySrc].name}}</view>
				<view class="top-author">{{audioList[audioPlaySrc].author}}</view>
				<view class="top-desc">
					<view class="top-desc-item">标准</view>
					<view class="top-desc-item">音效</view>
					<view class="top-desc-item">视频</view>
				</view>
			</view>
			<view class="info-center">
				<image :src="audioList[audioPlaySrc].img" mode="widthFix" class="info-center-image"></image>
			</view>
			<view class="info-bottom">
				 <progress active  stroke-width="1" class="info-bottom-progress"/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				nowmiao:0,//当前时间
				allmiao:0,//全部时间
				lineBarWid:520,//进度条的宽度跟css一只
				playState:0,//播放状态
				audioCont:'',
				audioList:[
					{name:'你的微笑',
					 author:'Shart Foeir',
					 src:'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/556/66405556.aac',
					 img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547630730529&di=f37e409de12f9930e25507c3252a462c&imgtype=0&src=http%3A%2F%2Fmp2.iqiyipic.com%2Fimage%2F20180827%2F03%2F41%2Fh_1199242471_h_601_400_400.jpg',
					 },
					{name:'英雄联盟群雄齐聚',
					 author:'毛不易',
					 src:'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/414/66335414.aac',
					 img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547630762297&di=2c3317bf38f107287414b1b0cd33f0e5&imgtype=0&src=http%3A%2F%2Fsingerimg.kugou.com%2Fuploadpic%2Fpass%2Fsofthead%2F400%2F20140829%2F20140829161553861786.jpg',
					 },
					{name:'TryEverything',
					 author:'Shakira',
					 src:'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/480/66379480.aac',
					 img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547471202346&di=bd9b5e27beb9341b058d21e521e8d75e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F27%2F20170727210705_zcijE.jpeg',
					 },
					{name:'我爱过几个人',
					 author:'邓论',
					 src:'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/339/65390339.aac',
					 img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547630610810&di=1a0c6d9557aa2bba822c54694a55429e&imgtype=0&src=http%3A%2F%2Fmp0.iqiyipic.com%2Fimage%2F20180827%2Fff%2F79%2Fh_1199249539_h_601_400_400.jpg',
					 },
					 {name:'浪子回头',
					  author:'辉气*蛋',
					  src:'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/645/66725645.aac',
					  img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547631130547&di=076c9275ce160baa2ff5cb66eed4ad53&imgtype=0&src=http%3A%2F%2Fwww.mixtapetorrent.com%2Fsystem%2Ffiles%2Ffollowmernb.jpg',
					  },
					 {name:'生僻字心动不已',
					  author:'〃°ω°〃',
					  src:'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/359/64750359.aac',
					  img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547631330468&di=517d6b42ed32567a5798fd9bbe13ff9c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170830%2F2dbe36dfa0a14c0c94b672f445c02a21.jpeg',
					  }
				],
				audioPlaySrc:0,//当前播放的歌曲index
				audioWay:0,//播放方式 0顺序播放 1随机播放 2单曲循环
				collect:0,//是否收藏
			}
		},
		methods: {
			setStyle () {
				return 'background-image:url('+this.audioList[this.audioPlaySrc].img+')'
			}
		}
	}
</script>

<style lang="scss">
	.info {
		position: fixed;
		width: 100%;
		height: 100%;
		letf: 0;
		top: 44px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		.bg{
			position: fixed;
			z-index: 0;
			right: 0;
			left: 0;
			height: 100%;
			width: 100%;
			filter: blur(40upx);
			background: inherit;
		}
		.content {
			position: fixed;
			z-index: 1;
			right: 0;
			left: 0;
			height: 100%;
			width: 100%;
			color: #FFFDEF;
			.info-top {
				margin-top: 10px;
				text-align: center;
				.top-name {
					font-size: 23px;
				}
				.top-author {
					font-size: 17px;
					line-height: 30px;
				}
				.top-desc {
					display: flex;
					justify-content: center;
					margin-top: 6px;
				}
				.top-desc-item {
					margin: 5px;
					font-size: 14px;
					width: 44px;
					border: 1px solid gray;
				}
			}
			.info-center {
				text-align: center;
				padding: 10px;
				margin-bottom: 40px;
				.info-center-image {
					width: 300px;
					border-radius: 50%;
					animation: image 8s linear infinite
				}
				@keyframes image {
					from {
						transform: rotate(0deg)
					}
					to {
						transform: rotate(360deg)
					}
				}
			}
			.info-bottom {
				.info-bottom-progress {
					padding: 10px;
				}
			}
		}
	}
</style>
