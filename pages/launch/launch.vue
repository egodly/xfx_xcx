<template>
	<view>
		<view class='test-bg'>
		  <image src="../../static/images/launch_img.jpg" class='in-image'></image>
		</view>
		<view class='launch-text'>
		  <image src='../../static/images/launch_text.jpg' class='in-text'></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			onLoad() {
			    this.bindload();
			  },
			  bindload() {
			      setTimeout(this.goIndex,
			          2000);
			  },
			  goIndex() {
			      wx.switchTab({
			          url: '/pages/index/index'
			      });
			  }
		}
	}
</script>

<style>
  page{
    width: 100%;
    height: 100%;
    background-color: #f3d012;
  }
  .test-bg{
    display:flex;
    justify-content: center; 
  }
  .in-image{
    margin-top:10%;
    width:400rpx;
    height:400rpx;
  }

 .launch-text {
   margin-top:75%;
   display:flex;
   justify-content: center; 
   text-align: center;   
 }

  .in-text{
    width:300rpx;
    height:30rpx;
  }
</style>
