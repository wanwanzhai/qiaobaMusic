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
			<view class="part-bottom">
				<view class="info-bottom">
					<view>{{nowmiaoForc}}</view>
					<view>
						<slider class="line" :value="nowmiao" min="0" :max="allmiao" @change="sliderChange" block-size="15" activeColor="#55A532" />
					</view>
					<view>{{allmiaoForc}}</view>
				</view>
				<view class="oprateImage">
					<view class="loop" @tap="onChangeAudioWay()">
						<image v-if="audioWay === 0" src="/static/image/icon/xunhuanbofang.png" mode="widthFix" class="loop-image"/>
						<image v-if="audioWay === 1" src="/static/image/icon/danquxunhuan.png" mode="widthFix" class="loop-image"/>
						<image v-if="audioWay === 2" src="/static/image/icon/suijibofang.png" mode="widthFix" class="loop-image"/>
					</view>
					<view class="play">
						<image src="/static/image/icon/shangyishou.png" mode="widthFix" class="play-image-next" @tap="lastestSong()"/>
						<view @tap="onPlay()">
							<image src="/static/image/icon/kaishi-2.png"  mode="widthFix" class="play-image-start" v-if="!isPlay"/>
							<image src="/static/image/icon/zanting-2.png" mode="widthFix" class="play-image-start" v-if="isPlay"/>
						</view>
						<image src="/static/image/icon/xiayishou.png" mode="widthFix" class="play-image-next" @tap="nextSong()"/>
					</view>
					<view>
						<image src="/static/image/icon/yinleliebiao.png" mode="widthFix" class="loop-image"/>
					</view>
				</view>
				 <view class="tool">
					<view>
						<!-- <image v-if="!collect" class="iconbtn" src="/static/image/icon/shoucang.png"></image> -->
						<image class="iconbtn" mode="widthFix" src="/static/image/icon/shoucang-2.png"></image>
					</view>
					<view><image class="iconbtn" mode="widthFix" src="/static/image/icon/xiazai.png"></image></view>
					<view><image class="iconbtn" mode="widthFix" src="/static/image/icon/share.png"></image></view>
					<view><image class="iconbtn" mode="widthFix" src="/static/image/icon/liuyanjianyi.png"></image></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	let innerAudioContext = ''

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
				isPlay: false
			}
		},
		computed: {
			width () {
				return 'width' + this.nowmiao / this.allmiao * this.lineBarWid + 'upx'
			},
			nowmiaoForc () {
				return this.$pubFuc.secondFormact(this.nowmiao) 
			},
			allmiaoForc:function(){
				return this.$pubFuc.secondFormact(this.allmiao)
			}
		},
		mounted () {
			this.audioInit()
		},
		methods: {
			setStyle () {
				return 'background-image:url('+this.audioList[this.audioPlaySrc].img+')'
			},
			
			audioInit () {
				let src = this.audioList[this.audioPlaySrc].src
				if(innerAudioContext){
					innerAudioContext.destroy()
					innerAudioContext = ''
					//销毁====================
				}
				innerAudioContext = uni.createInnerAudioContext()
				innerAudioContext.src = src
				innerAudioContext.autoplay = true

				let dura = setInterval(()=>{
					this.allmiao = Math.floor(innerAudioContext.duration)
					if(this.allmiao){
						clearInterval(dura)
					}
				})
				innerAudioContext.onPlay(() => {
					this.play()
				})
				innerAudioContext.onPause(() => {
					this.pause()
				})
				innerAudioContext.onTimeUpdate(() => {
					this.nowmiao = Math.floor(innerAudioContext.currentTime)
				})
				innerAudioContext.onEnded(()=>{
					this.nextSong()
				})
			},
			
			sliderChange (e) {
				console.log(e)
				this.nowmiao = e.detail.value
				innerAudioContext.seek(this.nowmiao)
			},
			
			onChangeAudioWay () {
				if (!this.audioWay) {
					this.audioWay = 1
				} else if (this.audioWay === 1) {
					this.audioWay = 2
				} else {
					this.audioWay = 0
				}
			},
			
			lastestSong () {
				if (!this.audioPlaySrc) {
					this.audioPlaySrc = this.audioList.length - 1
				} else {
					this.audioPlaySrc--
				}
				this.audioInit()
			},
			
			nextSong () {
				if (this.audioPlaySrc === this.audioList.length - 1) {
					this.audioPlaySrc = 0
				} else {
					this.audioPlaySrc++
				}
				this.audioInit()
			},
			
			play () {
				this.isPlay = 1
			},
			
			pause () {
				this.isPlay = 0
			},
			
			onPlay () {
				if(this.isPlay) {
					innerAudioContext.pause()
				} else {
					innerAudioContext.play()
				}
			}
		},
		destroyed(){
			innerAudioContext.destroy()
			innerAudioContext = ''
		}
	}
</script>

<style lang="scss" scoped>
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
			opacity: 1;
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
					background: black;
				}
			}
			@media screen and (max-height:667px){
				.info-center {
					text-align: center;
					padding: 10px;
					position: relative;
					margin: 0 auto;
				}
				.info-center-image {
					width: 300px;
					display: block;
					border-radius: 50%;
					animation: image 8s linear infinite;
					border: 6px solid #333030;
					margin: 0 auto;
					// position: absolute;
					// top: 50%;
					// left: 50%;
					// -webkit-transform:translate(-50%, -50%);
					// -moz-transform:translate(-50%, -50%);
					// transform:translate( -50%, -50%);
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
			@media screen and (min-height:668px) and (max-height:812px){
				.info-center {
					text-align: center;
					padding: 10px;
					position: relative;
					margin: 0 auto;
					.info-center-image {
						width: 300px;
						display: block;
						border-radius: 50%;
						animation: image 8s linear infinite;
						border: 6px solid #333030;
						margin: 0 auto;
						// position: absolute;
						// top: 40upx;
						// left: 8%;
						// -webkit-transform:translate(-50%, -50%);
						// -moz-transform:translate(-50%, -50%);
						// transform:translate( -50%, -50%);
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
			}
			
			.info-bottom {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				padding: 20upx 40upx;
				align-items: center;
				.line {
					width: 480upx !important;
				}
			}
		}
		.part-bottom {
			position: absolute;
			bottom: 66px;
			margin: 0 auto;
			text-align: center;
			width: 100%;
		}
		.oprateImage {
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 50px;
			margin-bottom: 20px;
			.loop-image {
				width: 20px;
			}
			.play {
				display: flex;
				width: 250px;
				justify-content: space-around;
				align-items: center;
				.play-image {
					width: 25px;
				}
				.play-image-next {
					width: 40px;
				}
				.play-image-start {
					width: 60px;
				}
			}
			
		}
		.tool {
			display: flex;
			justify-content: space-around;
			height: 25px;
			.iconbtn {
				width: 50upx;
			}
		}
	}
</style>
