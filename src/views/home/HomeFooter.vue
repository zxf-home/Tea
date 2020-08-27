<template>
	<div class="HomeBottom">
		<div class="location">
			<span @click = "$router.push('/location')">
				<van-icon name="location-o" :style="{color:'#32c7b9'}" /> 泉州市
				<van-icon name="arrow-down" :style="{color:'#ccc',fontSize:'12px'}" /></span>
		</div>
		<div class="btn">
			<div class="btn-left"><cube-button inline :style="{borderRadius:'30px',padding:'14px 0',backgroundColor: '#aaf',fontSize: '14px',width:'100%'}" @click="showTimePicker"><i class="icon" :style="{backgroundColor:'#19b320'}"></i>{{value}}</cube-button></div>
			<span> 至 </span>
			<div class="btn-right"><cube-button inline :style="{borderRadius:'30px',padding:'14px 0',backgroundColor: '#aaf',fontSize: '14px',width:'100%'}" @click="showTimePicker2"><i class="icon" :style="{backgroundColor:'#ff9800'}"></i>{{value2}}</cube-button></div>
		</div>
		<div class="reservation">
			<van-button type="primary" size="large" round @click="$router.push('/reservtea')" :style="{backgroundColor:'#299f94',borderColor:'#299f94'}">预约茶室</van-button>
		</div>

	</div>
</template>

<script>
	import {
		Button,
		Popup,
		DatetimePicker,
		Icon
	} from 'vant';

	export default {
		name: "HomeFooter",
		data() {
			return {
				value:'今天 11点:00分',
				value2:'今天 13点:00分',

			}
		},
		mounted(){
			//现在时间
			this.day();

		},
		methods: {
		    showTimePicker () {
				var day1 = new Date();
				var n = day1.getFullYear();
				var y = day1.getMonth()+1;
				var r = day1.getDate();
				var h = this.value.match(/\d+/g)[0];
				var h2 = day1.getHours();
				var m2 = day1.getMinutes();
				var m = this.value.match(/\d+/g)[1];
				console.log(n+','+y+','+r+','+h+','+m);
				var de = new Date(n,y,r,h,m).valueOf() - new Date(n,y,r,h2,m2).valueOf();
				// console.log(this.value.match(/\d+/g));
				const time =new Date().valueOf()+de;
				// const time2 =new Date().valueOf();
				// console.log('time1:'+time);
				// console.log('time2:'+time2);
		        const timePicker = this.$createTimePicker({
		        showNow: false,
		        minuteStep: 30,
		        delay: 15,
		        day: {
		          len: 3,
		          filter: ['今天', '明天', '后天'],
		          format: 'M月D日'
		        },
		        onSelect: (selectedTime, selectedText, formatedTime) => {
		        	this.value = selectedText;
				    // console.log(selectedText);
		        },
		        onCancel: () => {
		          this.$createToast({
		            // type: 'correct',
		            // txt: 'Picker canceled',
		            time: 500
		          }).show()
		        }
		      })
		
		      timePicker.setTime(time);
		      timePicker.show()
		    },
			showTimePicker2 () {
				var day1 = new Date();
				var n = day1.getFullYear();
				var y = day1.getMonth()+1;
				var r = day1.getDate();
				var h2 = day1.getHours();
				var m2 = day1.getMinutes();
				var h = this.value2.match(/\d+/g)[0];
				var m = this.value2.match(/\d+/g)[1];
				console.log(n+','+y+','+r+','+h+','+m);
				var de = new Date(n,y,r,h,m).valueOf() - new Date(n,y,r,h2,m2).valueOf()
				console.log(de-(2 * 3600 *1000));
				const time = new Date().valueOf()+de;
				const timePicker = this.$createTimePicker({
			    showNow: false,
			    minuteStep: 30,
			    delay: 15,
			    day: {
			      len: 3,
			      filter: ['今天', '明天', '后天'],
			      format: 'M月D日'
			    },
			    onSelect: (selectedTime, selectedText, formatedTime) => {

					this.value2 = selectedText;
				  console.log(selectedText);
			    },
			    onCancel: () => {
			      this.$createToast({
			        // type: 'correct',
			        // txt: 'Picker canceled',
			        time: 500
			      }).show()
			    }
			  })
					
			  timePicker.setTime(time)
			  timePicker.show()
			},
			day(){
				var day1 = new Date();
				day1.setTime(day1.getTime());
				var h = day1.getHours();
				var m = day1.getMinutes();
				if(m > 30){
					h += 1;
					m = '00';
				}else{
					m = '30';
				}
				h = h<10?'0'+h:h;
				this.value = "今天 "+h+'时:'+m+'分';
				// 默认两小时后时间
				var day2 = new Date();
				day2.setTime(day2.getTime()+2*60*60*1000);
				var h2 = day2.getHours();
				var m2 = day2.getMinutes();

				if(m2 > 30){
					h2 += 1;
					m2 = '00';
				}else{
					m2 = '30';
				}


                sessionStorage.startTime = h+':'+m;
				sessionStorage.endTime = h2+':'+m2;

				if(day2.getDate()-day1.getDate() == 1){

                    this.value2 = "明天 "+h2+'时:'+m2+'分';

                }else{

                    console.log(m2);
                    this.value2 = "今天 "+h2+'时:'+m2+'分';
                    console.log(this.value2);
                }


                sessionStorage.startTime2 = this.value;
                sessionStorage.endTime2 = this.value2;
			}
		  },
		components: {
			[Popup.name]: Popup,
			[Button.name]: Button,
			[DatetimePicker.name]: DatetimePicker,
			[Icon.name]: Icon
		},
		watch:{
			value(newValue,oldValue){
				var day = new Date();
				var n = day.getFullYear();
				var y = day.getMonth()+1;
				var r = day.getDate();
				var h = this.value.match(/\d+/g)[0];
				var m = this.value.match(/\d+/g)[1];
				var day1 = new Date(n,y,r,h,m).valueOf()+2 *3600 *1000;
				var day3 = new Date(day1);
				var h2 = day3.getHours();
				var m2 = day3.getMinutes();
				m2=m2<10?'0'+m2:m2;
				this.value2 = day3.getDate()-day.getDate() == 1 ? "明天 "+h2+'时:'+m2+'分' :"今天 "+h2+'时:'+m2+'分';
                sessionStorage.startTime2 = newValue;
                sessionStorage.endTime2 = this.value2;
                console.log(this.value);
			}
		}

	}
</script>

<style scoped lang="less">
	.HomeBottom {
		height: 30%;
		width: 100%;
		background: #fff;
		position: fixed;
		bottom: 0;

		.location {
			text-align: center;
			margin-top: 10px;
			margin-bottom: 10px;
		}

		.within {
			margin-top: 3%;
		}

		.reservation {
			margin-top: 6%;
			margin-left: 5%;
			margin-right: 5%;
		}

		.icon {
			display: inline-block;
			width: 10px;
			height: 10px;
			border-radius: 50%;
			margin-right: 10px;
			margin-left: 10px;
		}
	}
	.btn{
		text-align: center;
		div{
			display: inline-block;
			width: 40%;
		}
	}
	 .van-button--large {
		 width: 100%;
		 height: 42px;
		 line-height: 40px;
	 }
	.icon{
		display: inline-block;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		margin-right: 10px;
		margin-left: 10px;

	}
</style>
