$(".swiper-wrapper").css({
	width:$(window).width(),
	height:$(window).height()
})
var mySwiper = new Swiper ('.swiper-container',{
    direction: 'vertical',//纵向
   // loop: true,
    //initialSlide:1,
    freeMode:false,
   
   	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
  	}, 
  	onTouchEnd: function(swiper) {

	},
  	onSlideChangeEnd: function(swiper){ 
  		if(swiper.activeIndex==2){
  			$(".slide_3_hand").css("display","block");
  		}
  		if(swiper.activeIndex==4){
  			$(".slide_5_hand").css("display","block");
  		}
  		if(swiper.activeIndex==6){
  			$(".slide_7_hand").css("display","block");
  		}
   	 	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  	} 
}) 
 var flag1=true,flag2=true,flag3=true,flag4=true,flag5=true;
 $(".slide_3_face").click(function(){
 	$(".slide_3_hand").css("display","none");
 	if(flag1){
 		$(".slide_3_car").animate({
		 	left:"6%",
		 	bottom:"8%"
		},300);
 		flag1=false
	}else{
		$(".slide_3_car").animate({
		 	left:"-31%",
		 	bottom:"-12%"
		},300);
		flag1=true;
	}
 });
$(".slide_3_deng").click(function(){
	if(flag2){
		$(".slide_3_light").css("display","block");
		flag2=false;
	}else{
		$(".slide_3_light").css("display","none");
		flag2=true;
	}
})
$(".slide_3_lunzi").click(function(){
 	if(flag3){
 		$(".slide_3_car").animate({
		 	left:"-54%",
		 	bottom:"9%"
		},300);
 		flag3=false
	}else{
		$(".slide_3_car").animate({
		 	left:"-31%",
		 	bottom:"-12%"
		},300);
		flag3=true;
	}
 })
$(".slide_5_text1").click(function(){
	$(".slide_5_hand").css("display","none");
	$(".slide_5_text1").fadeOut(1000);
	$(".slide_5_text2").fadeOut(1000,function(){
		$(".slide_5_suna").fadeIn(1000);
		$(".slide_5_sunb").fadeIn(1000,function(){
			$(".slide_5_suna").fadeOut(1000);
			$(".slide_5_sunb").fadeOut(1000,function(){
				$(".slide_5_sunc").fadeIn(1000);
				$(".slide_5_sund").fadeIn(1000,function(){
					$(".slide_5_sunc").fadeOut(1000);
					$(".slide_5_sund").fadeOut(1000,function(){
						$(".slide_5_text1").css("display","block");
						$(".slide_5_text2").css("display","block");
						$(".slide_5_hand").css("display","block");
					})
				})
			})
		});
	})
		
})
$(".slide_6_dianji").click(function(){
	$(".slide_6_mengceng").css("display","none");
	$(this).css("display","none");
	$(".slide_6_circle").css("display","none");
})
$(".slide_7_img2").click(function(){
	$(".slide_7_hand").css("display","none");
})
var audioEle=document.getElementsByTagName("audio");
$(".slide_music").click(function(){
	if(flag4){
		audioEle[0].pause();
		$(".slide_music").removeClass("music_rotate");
		flag4=false;
	}else{
		audioEle[0].play();;
		$(".slide_music").addClass("music_rotate");
		flag4=true;
	}
})
$(".slide_7_img2").click(function(){
	$(".slide_7_hand").css("display","none");
	if(flag5){
		audioEle[0].pause();
		$(".slide_music").removeClass("music_rotate");
		audioEle[1].play();
		audioEle[1].loop=true;
		flag4=true;
		flag5=false;
	}else{
		audioEle[1].pause();
		audioEle[0].play();
		$(".slide_music").addClass("music_rotate");
		flag5=true;
		flag4=true;
	}
	
})