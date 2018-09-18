var btnFlag = false;
var skip=[]
var mdText = ['&#x201c;There you are! You&#x2019;re late! We&#x2019;re testing new candidates for our Mars Exploration Mission today. We need you to evaluate them to determine if they are psychologically fit for this assignment.&#x201d;','&#x201c;You will need to run four brain function tests on our candidates. You can log observations in your Brain Notes, and consult them later if you need help.&#x201d;','&#x201c;Report back once you&#x2019;ve run them all.&#x201d;'];
var brain_label={
			"0":{
				'label_name': 'Frontal&nbsp;Lobe', 
				'label_description':'The frontal lobe is associated with reasoning, motor skills, higher level cognition, and expressive language. Damage to the frontal lobe can lead to changes in sexual habits, socialization, and attention as well as increased risk-taking.',
				'css':{'position':'absolute', 'top':'160px','left':'233px','height':'400px',"width": "134px","line-height": "1.1"},
				 'mcqcss':{'position':'absolute', 'top':'100px','left':'393px','height':'400px'}
				},            
						
			"1":{
				'label_name': 'Parietal&nbsp;Lobe', 
				'label_description':'The parietal lobe is associated with processing tactile sensory information such as pressure, touch, and pain. A portion of the brain known as the somatosensory cortex is located in this lobe and is essential to the processing of the body\'s senses.',
				'css':{'position':'absolute', 'top':'200px','left':'790px','height':'400px','width': '158px',"line-height": "1.1"},
				'mcqcss':{'position':'absolute', 'top':'112px','left':'585px','height':'400px','width': '158px'}
				},
			
			"2":{
				'label_name': 'Temporal&nbsp;Lobe', 
				'label_description':'The temporal lobe is the location of the primary auditory cortex, which is important for interpreting sounds and the language we hear. The hippocampus is also located in the temporal lobe, which is why this portion of the brain is also heavily associated with the formation of memories.',
				'css':{'position':'absolute', 'top':'163px','left':'228px','height':'370px','width':'145px',"line-height": "1.1"},
				 'mcqcss':{'position':'absolute', 'top':'475px','left':'365px','height':'370px','width': '156px'}
				},
			
			"3":{
				'label_name': 'Occipital&nbsp;Lobe', 
				'label_description':'The occipital lobe is associated with interpreting visual stimuli and information. The primary visual cortex, which receives and interprets information from the retinas of the eyes, is located in the occipital lobe.',
				'css':{'position':'absolute', 'top':'200px','left':'790px','height':'370px','width':'145px',"line-height": "1.1"},
				'mcqcss':{'position':'absolute', 'top':'170px','left':'705px','height':'370px'}
				},			
			
			"4":{
				'label_name': 'Cerebellum', 
				'label_description':'The cerebellum is comprised of small lobes and receives information from the balance system of the inner ear, sensory nerves, and the auditory and visual systems. It is involved in the coordination of movements as well as motor learning. The cerebellum helps control posture, balance, and the coordination of voluntary movements.',
				'css':{'position':'absolute', 'top':'200px','left':'790px','height':'370px','width':'145px',"line-height": "1.1"},
				'mcqcss':{'position':'absolute', 'top':'520px','left':'700px','height':'370px'}
				}
};
var title=["ATTACHMENT DISORDER","ATTACHMENT DISORDER","HIGH-CONFLICT ENVIRONMENT","HIGH-CONFLICT ENVIRONMENT","ATTACHMENT DISORDER"]
var brain_Notes={
			"0":{
				'label_name': 'Brain Notes: Left Side Interior', 
				'label_description':'The frontal lobe is associated with reasoning, motor skills, higher level cognition, and expressive language. Damage to the frontal lobe can lead to changes in sexual habits, socialization, and attention as well as increased risk-taking.',
				'parentcss':{'position':'absolute','left':'316px','top':' 254px','-webkit-clip-path':'polygon(12% 0, 98% 0, 100% 4%, 100% 94%, 94% 100%, 3% 100%, 0 98%, 0 13%)','clip-path': 'polygon(12% 0, 98% 0, 100% 4%, 100% 94%, 94% 100%, 3% 100%, 0 98%, 0 13%)','border-radius':'15px 11px 9px 11px'},
				'css':{'position':'absolute','left':'321px','top':' 258px;','-webkit-clip-path':'polygon(12% 0, 100% 0, 100% 4%, 100% 95%, 95% 100%, 0% 100%, 0 100%, 0 13%)','clip-path': 'polygon(12% 0, 100% 0, 100% 4%, 100% 95%, 95% 100%, 0% 100%, 0 100%, 0 13%)','border-radius':'15px 8px 5px 8px'},
				},
				"1":{
				'label_name': 'Brain Notes: Top Side Interior', 
				'label_description':'The frontal lobe is associated with reasoning, motor skills, higher level cognition, and expressive language. Damage to the frontal lobe can lead to changes in sexual habits, socialization, and attention as well as increased risk-taking.',
				'parentcss':{'position':'absolute','left':'316px','top':' 254px','-webkit-clip-path':'polygon(0% 0, 87% 0, 100% 12%, 100% 98%, 97% 100%, 6% 100%, 0 94%, 0 8%)','clip-path': 'polygon(0% 0, 87% 0, 100% 12%, 100% 98%, 97% 100%, 6% 100%, 0 94%, 0 8%)','border-radius':'11px 5px 11px 9px'},
				'css':{'position':'absolute','left':'321px','top':' 258px;','-webkit-clip-path':'polygon(0% 0, 87% 0, 100% 12%, 100% 95%, 100% 100%, 5% 100%, 0 95%, 0 4%)','clip-path': 'polygon(0% 0, 87% 0, 100% 12%, 100% 95%, 100% 100%, 5% 100%, 0 95%, 0 4%)','border-radius':'8px 5px 8px 5px'},
				},
				"2":{
				'label_name': 'Brain Notes: Left Side Interior', 
				'label_description':'The frontal lobe is associated with reasoning, motor skills, higher level cognition, and expressive language. Damage to the frontal lobe can lead to changes in sexual habits, socialization, and attention as well as increased risk-taking.',
				'parentcss':{'position':'absolute','left':'316px','top':' 254px','-webkit-clip-path':'polygon(12% 0, 98% 0, 100% 4%, 100% 94%, 94% 100%, 3% 100%, 0 98%, 0 13%)','clip-path': 'polygon(12% 0, 98% 0, 100% 4%, 100% 94%, 94% 100%, 3% 100%, 0 98%, 0 13%)','border-radius':'15px 11px 9px 11px'},
				'css':{'position':'absolute','left':'321px','top':' 258px;','-webkit-clip-path':'polygon(12% 0, 100% 0, 100% 4%, 100% 95%, 95% 100%, 0% 100%, 0 100%, 0 13%)','clip-path': 'polygon(12% 0, 100% 0, 100% 4%, 100% 95%, 95% 100%, 0% 100%, 0 100%, 0 13%)','border-radius':'15px 8px 5px 8px'},
				},
				"3":{
				'label_name': 'Brain Notes: Right Side Interior', 
				'label_description':'The frontal lobe is associated with reasoning, motor skills, higher level cognition, and expressive language. Damage to the frontal lobe can lead to changes in sexual habits, socialization, and attention as well as increased risk-taking.',
				'parentcss':{'position':'absolute','left':'316px','top':' 254px','-webkit-clip-path':'polygon(0% 0, 87% 0, 100% 12%, 100% 98%, 97% 100%, 6% 100%, 0 94%, 0 8%)','clip-path': 'polygon(0% 0, 87% 0, 100% 12%, 100% 98%, 97% 100%, 6% 100%, 0 94%, 0 8%)','border-radius':'11px 5px 11px 9px'},
				'css':{'position':'absolute','left':'321px','top':' 258px;','-webkit-clip-path':'polygon(0% 0, 87% 0, 100% 12%, 100% 95%, 100% 100%, 5% 100%, 0 95%, 0 4%)','clip-path': 'polygon(0% 0, 87% 0, 100% 12%, 100% 95%, 100% 100%, 5% 100%, 0 95%, 0 4%)','border-radius':'8px 5px 8px 5px'},
				},
				"4":{
				'label_name': 'Brain Notes: Bottom Side Interior', 
				'label_description':'The frontal lobe is associated with reasoning, motor skills, higher level cognition, and expressive language. Damage to the frontal lobe can lead to changes in sexual habits, socialization, and attention as well as increased risk-taking.',
				'parentcss':{'position':'absolute','left':'316px','top':' 254px','-webkit-clip-path':'polygon(0% 0, 95% 0, 100% 6%, 100% 98%, 100% 100%, 12% 100%, 0 87%, 0 5%)','clip-path': 'polygon(0% 0, 95% 0, 100% 6%, 100% 94%, 100% 100%, 12% 100%, 0 87%, 0 5%)','border-radius':'11px 7px 11px 5px'},
				'css':{'position':'absolute','left':'321px','top':' 258px;','-webkit-clip-path':'polygon(0% 0, 95% 0, 100% 5%, 100% 100%, 100% 100%, 12% 100%, 0 87%, 0 5%)','clip-path': 'polygon(0% 0, 95% 0, 100% 5%, 100% 100%, 100% 100%, 12% 100%, 0 87%, 0 5%)','border-radius':'8px 5px 8px 5px'},
				},
				"5":{
				'label_name': 'Brain Notes: Right Side Interior', 
				'label_description':'The frontal lobe is associated with reasoning, motor skills, higher level cognition, and expressive language. Damage to the frontal lobe can lead to changes in sexual habits, socialization, and attention as well as increased risk-taking.',
				'parentcss':{'position':'absolute','left':'316px','top':' 254px','-webkit-clip-path':'polygon(0% 0, 87% 0, 100% 12%, 100% 98%, 97% 100%, 6% 100%, 0 94%, 0 8%)','clip-path': 'polygon(0% 0, 87% 0, 100% 12%, 100% 98%, 97% 100%, 6% 100%, 0 94%, 0 8%)','border-radius':'11px 5px 11px 9px'},
				'css':{'position':'absolute','left':'321px','top':' 258px;','-webkit-clip-path':'polygon(0% 0, 87% 0, 100% 12%, 100% 95%, 100% 100%, 5% 100%, 0 95%, 0 4%)','clip-path': 'polygon(0% 0, 87% 0, 100% 12%, 100% 95%, 100% 100%, 5% 100%, 0 95%, 0 4%)','border-radius':'8px 5px 8px 5px'},
				},
				"6":{
				'label_name': 'Brain Notes: Left Side Interior', 
				'label_description':'The frontal lobe is associated with reasoning, motor skills, higher level cognition, and expressive language. Damage to the frontal lobe can lead to changes in sexual habits, socialization, and attention as well as increased risk-taking.',
				'parentcss':{'position':'absolute','left':'316px','top':' 254px','-webkit-clip-path':'polygon(12% 0, 98% 0, 100% 4%, 100% 94%, 94% 100%, 3% 100%, 0 98%, 0 13%)','clip-path': 'polygon(12% 0, 98% 0, 100% 4%, 100% 94%, 94% 100%, 3% 100%, 0 98%, 0 13%)','border-radius':'15px 11px 9px 11px'},
				'css':{'position':'absolute','left':'321px','top':' 258px;','-webkit-clip-path':'polygon(12% 0, 100% 0, 100% 4%, 100% 95%, 95% 100%, 0% 100%, 0 100%, 0 13%)','clip-path': 'polygon(12% 0, 100% 0, 100% 4%, 100% 95%, 95% 100%, 0% 100%, 0 100%, 0 13%)','border-radius':'15px 8px 5px 8px'},
				},
				"7":{
				'label_name': 'Brain Notes: Bottom Side Interior', 
				'label_description':'The frontal lobe is associated with reasoning, motor skills, higher level cognition, and expressive language. Damage to the frontal lobe can lead to changes in sexual habits, socialization, and attention as well as increased risk-taking.',
				'parentcss':{'position':'absolute','left':'316px','top':' 254px','-webkit-clip-path':'polygon(6% 0, 100% 0, 100% 4%, 100% 87%, 88% 100%, 5% 100%, 0 100%, 0 6%)','clip-path': 'polygon(6% 0, 100% 0, 100% 4%, 100% 87%, 88% 100%, 5% 100%, 0 100%, 0 6%)','border-radius':'9px 11px 5px 11px'},
				'css':{'position':'absolute','left':'321px','top':' 258px;','-webkit-clip-path':'polygon(5% 0, 100% 0, 100% 4%, 100% 87%, 88% 100%, 0% 100%, 0 95%, 0 5%)','clip-path': 'polygon(5% 0, 100% 0, 100% 4%, 100% 87%, 88% 100%, 0% 100%, 0 95%, 0 5%)','border-radius':'5px 8px 5px 8px'},
				},
				"8":{
				'label_name': 'Brain Notes: Bottom Side Interior', 
				'label_description':'The frontal lobe is associated with reasoning, motor skills, higher level cognition, and expressive language. Damage to the frontal lobe can lead to changes in sexual habits, socialization, and attention as well as increased risk-taking.',
				'parentcss':{'position':'absolute','left':'316px','top':' 254px','-webkit-clip-path':'polygon(0% 0, 95% 0, 100% 6%, 100% 98%, 100% 100%, 12% 100%, 0 87%, 0 5%)','clip-path': 'polygon(0% 0, 95% 0, 100% 6%, 100% 94%, 100% 100%, 12% 100%, 0 87%, 0 5%)','border-radius':'11px 7px 11px 5px'},
				'css':{'position':'absolute','left':'321px','top':' 258px;','-webkit-clip-path':'polygon(0% 0, 95% 0, 100% 5%, 100% 100%, 100% 100%, 12% 100%, 0 87%, 0 5%)','clip-path': 'polygon(0% 0, 95% 0, 100% 5%, 100% 100%, 100% 100%, 12% 100%, 0 87%, 0 5%)','border-radius':'8px 5px 8px 5px'},
				},
				"9":{
				'label_name': 'Brain Notes: Bottom Side Interior', 
				'label_description':'The frontal lobe is associated with reasoning, motor skills, higher level cognition, and expressive language. Damage to the frontal lobe can lead to changes in sexual habits, socialization, and attention as well as increased risk-taking.',
				'parentcss':{'position':'absolute','left':'316px','top':' 254px','-webkit-clip-path':'polygon(12% 0, 98% 0, 100% 4%, 100% 94%, 94% 100%, 3% 100%, 0 98%, 0 13%)','clip-path': 'polygon(12% 0, 98% 0, 100% 4%, 100% 94%, 94% 100%, 3% 100%, 0 98%, 0 13%)','border-radius':'15px 11px 9px 11px'},
				'css':{'position':'absolute','left':'321px','top':' 258px;','-webkit-clip-path':'polygon(12% 0, 100% 0, 100% 4%, 100% 95%, 95% 100%, 0% 100%, 0 100%, 0 13%)','clip-path': 'polygon(12% 0, 100% 0, 100% 4%, 100% 95%, 95% 100%, 0% 100%, 0 100%, 0 13%)','border-radius':'15px 8px 5px 8px'},
				},
				"10":{
				'label_name': 'Brain Notes: Left Side Interior', 
				'label_description':'The frontal lobe is associated with reasoning, motor skills, higher level cognition, and expressive language. Damage to the frontal lobe can lead to changes in sexual habits, socialization, and attention as well as increased risk-taking.',
				'parentcss':{'position':'absolute','left':'316px','top':' 254px','-webkit-clip-path':'polygon(12% 0, 98% 0, 100% 4%, 100% 94%, 94% 100%, 3% 100%, 0 98%, 0 13%)','clip-path': 'polygon(12% 0, 98% 0, 100% 4%, 100% 94%, 94% 100%, 3% 100%, 0 98%, 0 13%)','border-radius':'15px 11px 9px 11px'},
				'css':{'position':'absolute','left':'321px','top':' 258px;','-webkit-clip-path':'polygon(12% 0, 100% 0, 100% 4%, 100% 95%, 95% 100%, 0% 100%, 0 100%, 0 13%)','clip-path': 'polygon(12% 0, 100% 0, 100% 4%, 100% 95%, 95% 100%, 0% 100%, 0 100%, 0 13%)','border-radius':'15px 8px 5px 8px'},
				},
				"11":{
				'label_name': 'Brain Notes: Right Side Interior', 
				'label_description':'The frontal lobe is associated with reasoning, motor skills, higher level cognition, and expressive language. Damage to the frontal lobe can lead to changes in sexual habits, socialization, and attention as well as increased risk-taking.',
				'parentcss':{'position':'absolute','left':'316px','top':' 254px','-webkit-clip-path':'polygon(0% 0, 87% 0, 100% 12%, 100% 98%, 97% 100%, 6% 100%, 0 94%, 0 8%)','clip-path': 'polygon(0% 0, 87% 0, 100% 12%, 100% 98%, 97% 100%, 6% 100%, 0 94%, 0 8%)','border-radius':'11px 5px 11px 9px'},
				'css':{'position':'absolute','left':'321px','top':' 258px;','-webkit-clip-path':'polygon(0% 0, 87% 0, 100% 12%, 100% 95%, 100% 100%, 5% 100%, 0 95%, 0 4%)','clip-path': 'polygon(0% 0, 87% 0, 100% 12%, 100% 95%, 100% 100%, 5% 100%, 0 95%, 0 4%)','border-radius':'8px 5px 8px 5px'},
				},
				}
var dis_count=1;
var count = 0;
var aud_id;
var getaudio=['beep-21','button2','button3'];
var url;
var scalVal=1;
$(document).ready(function()
	{
		$('.gotodycbrain6_btn').on('click' ,clickcomp);
	url='./audio/'+getaudio[0]+'.mp3';
	$('#play_aud').attr('src',url);
	$(".leftbottimg").off("click").on("click",goage6Fun)
	aud_id=document.getElementById("play_aud");
	$('.launch_btn').off('click').on('click', Welcome_screen);
	$('.next,.prev').off('click');
	$(".hotspot").off("click");
	$(".page8_btn").off("click");
	$('.goto_btn').off('click').hide();
	$('#square3_1,#cand_1').off('click');
	$('#page5,#icon0,.page8_personality,.personality_list').hide();
	
	$('#threeSixty').off("click").on("click",changeView)	
$('#halfBrainIcon,#fullBrainIcon').off("click").on("click",halfBrainView)
	var i = document.getElementById("main-container");
	$("#main-container").addClass("maxWidthClass");
	
	$('.fullScreen').on('click', function() {
		
			var w = 1024;
			var h = 768;
			var sw = screen.width;
			var sh = screen.height;
			
			if(sw > sh)
				{
					var changeval = sw/w;
					var changeH = sh/h;
					if(changeval > changeH) {var reval = 1 + (changeval - changeH);	}
					else{var reval = changeval;}
					scalVal=reval;
					$('#main-container').css('transform','scale('+reval+')');
				}
			else
				{
					var changeval = sh/h;
					var changeH = sw/w;
					var reval = 1 + (changeval - changeH);
scalVal=reval;					
					$('#main-container').css('transform','scale('+reval+')');
				}
		
		if (
			document.fullscreenElement ||
			document.webkitFullscreenElement ||
			document.mozFullScreenElement ||
			document.msFullscreenElement
			
		) {
$("#main-container").addClass("maxWidthClass")
   //window.close();
		
			// exit full-screen
			if (document.exitFullscreen) {
				
				document.exitFullscreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
			
		}
		else {
			$("#main-container").removeClass("maxWidthClass")
			// go full-screen
			if (i.requestFullscreen) {
				this.requestFullscreen();
			} else if (i.webkitRequestFullscreen) {
				i.webkitRequestFullscreen();
			} else if (i.mozRequestFullScreen) {
				i.mozRequestFullScreen();
			} else if (i.msRequestFullscreen) {
				i.msRequestFullscreen();
			}
			
		
		}
         
	});
	 //brainbeat width height control

$(document).bind('fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange', function (e) {
	var fullscreenElement = document.fullscreenElement ||
			document.webkitFullscreenElement ||
			document.mozFullScreenElement ||
			document.msFullscreenElement
	
	if (!fullscreenElement) {
		
	
		$("#main-container").addClass("maxWidthClass")
		if (document.exitFullscreen) {
				
				document.exitFullscreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		 $('#main-container').css('transform','scale(1)');  	
	} else {
		$("#main-container").removeClass("maxWidthClass")
			// go full-screen
			if (i.requestFullscreen) {
				this.requestFullscreen();
			} else if (i.webkitRequestFullscreen) {
				i.webkitRequestFullscreen();
			} else if (i.mozRequestFullScreen) {
				i.mozRequestFullScreen();
			} else if (i.msRequestFullscreen) {
				i.msRequestFullscreen();
			}
	}
	
});
	
	 $(".page8_right").off("click").on("click",intenClick)
	 $(".rightcircle").off("click").on("click",intenClick1)
	  //$(".page8_right").off("click");
	  //$(".rightcircle").off("click")
	
		drawCircle();
	$(".gotoclose_btn").on('click', clickdymmain); 
	
	$(".dropdown").mouseover(function(){
		
		$(".dropdown-content").show();
		
		
	})
	$(".dropdown").mouseout(function(){
		
		$(".dropdown-content").hide();
		
		
	})
	});
	$(".prevBtn").on("click",function(){
		clickFunction();
		$(".page6").hide();
		$(".page5").show();
		$(".leftroundImg").css("opacity","0.2")
	})
	
	function goage6Fun(){
	$('.page8').hide();
	$('.page6').show();
	$(".leftroundImg").css("opacity","1")
	$('#main-container').css('background-image','url(./images/bg_only-01.png)');
	}
	function Welcome_screen()
	{
	clickFunction();
	$('.page0').hide();
	$('.page1').show();
	$('#main-container').css('background-image','url(./images/page2-01.png)');
	$('.mission-txt').html(mdText[0]);
	$('.next').off('click').on('click', nextScreen);
	}
	function nextScreen(){
	$('.mission-txt').html(mdText[dis_count]);
	$('.num-txt').html(dis_count+1+'/3');
	dis_count++;
	$('.prev').css('background-image','url(./images/prev_enable.png)').css('cursor','pointer');
	$('.prev').off('click').on('click', prevScreen);
	if(dis_count==3){
	$('.next').off('click').css('background-image','url(./images/next_disable.png)').css('cursor','default');
	$('.goto_btn').show().off('click').on('click', evalScreen);
	}
	else{
	$('.next').on('click').css('background-image','url(./images/next_enable.png)').css('cursor','pointer');
	$('.goto_btn').hide();
	}
	}
	function prevScreen(){
	dis_count--;
	$('.mission-txt').html(mdText[dis_count-1]);
	$('.num-txt').html(dis_count+'/3');
	$('.next').off('click').on('click', nextScreen);
	if(dis_count==1){
	$('.prev').off('click').css('background-image','url(./images/prev_disable.png)').css('cursor','default');
	}
	else{
	$('.next').on('click').css('background-image','url(./images/next_enable.png)').css('cursor','pointer');
	}
	if(dis_count==3){$('.goto_btn').show();}else{$('.goto_btn').hide();}
	}
		function evalScreen(){
		clickFunction();
		$('#page5,#icon0').show();
		$(".leftroundImg").css("opacity","0.2")
		skip.length=0;
		skip.push("page5")
		$('.page1').hide();
		$('#main-container').css('background-image','url(./images/bg_only-01.png)');
		$(".dummy").mouseenter(function() {
		mouseoverFunction();
	});
		$('#icon_1').attr('src','./images/icon1-02.png');
		$('#icon_2').attr('src','./images/icon2-02.png');
		$('#icon_3').attr('src','./images/icon3-02.png');
		$('.gotodycbrain6_btn').on('click' ,clickcomp);
		$('#square3_1').off('click').on('click', canditateScreen);
		}
	function canditateScreen()
	{
	clickFunction();
	$('#page5').hide();
	$('.page6').show();
	$(".leftroundImg").css("opacity","1")
	skip.length=0;
	skip.push("page6")
		$('.gotodycbrain6_btn').on('click' ,clickcomp);
	$('#cand_1').off('click').on('click', manScreen);
	$(".textDiv").mouseenter(function() {
	mouseoverFunction();
});
	}
	
	function manScreen(){
	clickFunction();
	$('.page6').hide();
	$('.page7').show().css('display','flex');
		
	$('#main-container').css('background-image','url(./images/page7_bg.png)');
	$('#icon_1').attr('src','./images/icon1.png');
		$('#icon_2').attr('src','./images/icon2.png');
		$('#icon_3').attr('src','./images/icon3.png');
	animateFunction();
	}
	function brainFunction(){
	$('.page7').hide();
	
	$('.page8').show();
	skip.length=0;
	skip.push("page8")
	
		$('.gotodycbrain6_btn').on('click' ,clickcomp);
	
	$(".hotspot").off("click").on("click",hotspotFun)
$(".page8_btn").off("click").on("click",selectFun)	
	}
	
var myVar;

function animateFunction() {
    myVar = setTimeout(brainFunction, 4000);
}
/*var animateFunction = function()
{

	$('.barAnimation').animate({"top":"431px"},5000,'linear')	
	$('.manAnimation').animate({'clip':142},
		{
			duration:5000,
			easing:'linear',
			step:function(now)
			{
				$(this).css({'clip':'rect(0px,60px,'+now+'px,0px)'})
				$(this).css({'-webkit-clip':'rect(0px,60px,'+now+'px,0px)'})
				$(this).css({'-moz-clip':'rect(0px,60px,'+now+'px,0px)'})
			},
			complete:function(now)
			{
			brainFunction()
			}
		})
}*/

var click=false;
var hotspotFun=function(){
	rotateclick();
	var id=$(this).attr("id").split("_")[1]
	$(".hotspot").css("transform","rotate(0deg)")
	//$(this).css("transform","rotate(45deg)")
	$(".labelConatiner").css(brain_label[id]["css"]).fadeIn();
	$(".labelName").html(brain_label[id]["label_name"]);
	$(".labelDes").html(brain_label[id]["label_description"]);
	$(".line").hide()
	//$("#line"+id).fadeIn()
	//alert($(this).css("transform"))
	//alert($(this).attr("data-flag"))
	
	if($(this).attr("data-flag")=="false"){
		$(this).css("transform","rotate(45deg)")
		$("#line"+id).show()
		click=true;
		$(".hotspot").attr("data-flag",false)
		$(".labelConatiner").css(brain_label[id]["css"]).fadeIn();
		$(this).attr("data-flag",true)	
	}
	else{
		$(this).css("transform","rotate(0deg)")
		$("#line"+id).hide()
		$(".labelConatiner").css(brain_label[id]["css"]).fadeOut();
		$(".hotspot").attr("data-flag",false)
	}
}
var passVal=1;
var intenClick=function(){
	
	var id=$(this).attr("id").split("_")[1]
	//alert(id)
	passVal=id
           $(".changeImg").attr("src",'images/page8_'+id+'.png');
           $(".rightcircle").attr("src",'images/knob'+id+'.png') 
$(".heart").css({"position":"absolute","width":+(passArr[passVal-1])+"px","height":+(passArr[passVal-1])+"px","border-radius":+(passArr[passVal-1])+"px","transform-origin": "center"})  		   
         	
}
var passArr=[25,35,45,55,65]
var intenClick1=function(){
	passVal++;
	if(passVal==6){
		
		passVal=1
	}
	$(".heart").css({"position":"absolute","width":+(passArr[passVal-1])+"px","height":+(passArr[passVal-1])+"px","border-radius":+(passArr[passVal-1])+"px","transform-origin": "center","border":""+passVal+"px solid #fff"})
	 //heartBeatradius(5*passVal,5*passVal)
	
	
           $(".changeImg").attr("src",'images/page8_'+passVal+'.png');
           $(".rightcircle").attr("src",'images/knob'+passVal+'.png')   		   
         	
}
var selectFun=function(){clickFunction();
	var id=$(this).attr("id").split("_")[1]
	$(".page8_btn").css("background","#000")
	$(this).css("background","#008ab1")
	$(".p8btn_0,.p8btn_1,.p8btn_2,.p8btn_3,.p8btn_4").hide()
	
		
    $("."+$(this).attr("id")).show()
	$(".page8_subtitle").html(title[id])
	 //$(".page8_right").off("click")
	  $(".changeImg").hide()
	  // $(".rightcircle").off("click")
	   $(".page8_right").off("click").on("click",intenClick)
		  $(".rightcircle").off("click").on("click",intenClick1)
		 
	if(id==2){
		$('.page8_personality,.personality_list').hide();
		$(".img_title").html("CANDIDATE 2")
		$(".leftimg").attr("src","images/lady-01.png")
		$(".leftbottimg").attr("src","images/left_women-01.png")
		$(".p8btn_2").attr("src","images/brain_1.png")
		$(".changeImg").show();
		  $(".page8_right").off("click").on("click",intenClick)
		  $(".rightcircle").off("click").on("click",intenClick1)
		
	}
	else if(id==1){
		$(".changeImg").show();
		  $(".page8_right").off("click").on("click",intenClick)
		  $(".rightcircle").off("click").on("click",intenClick1)
		$('.page8_personality,.personality_list').hide();
		$(".img_title").html("CANDIDATE 1")
	}
	else if(id==3){
	$('.page8_personality,.personality_list').show();
	$(".img_title").html("CANDIDATE 1")
		$(".leftimg").attr("src","images/figure-01.png")
		$(".leftbottimg").attr("src","images/lefthuman-01.png")
		 $(".changeImg").show();
		  $(".page8_right").off("click").on("click",intenClick)
		  $(".rightcircle").off("click").on("click",intenClick1)
		
	}
	else if(id==4){
		clickreportFin();
	}
	else{
		$('.page8_personality,.personality_list').hide();
		$(".img_title").html("CANDIDATE 1")
		$(".leftimg").attr("src","images/figure-01.png")
		$(".leftbottimg").attr("src","images/lefthuman-01.png")
		//$(".p8btn_2").attr("src","images/brain_1.png")
	}
	if(id>0)
	{
	
	$('#threeSixty').css('display','none');
	$('.page8_brain').css('opacity','1').css('display','block');
	$('.heartParent').css({"display":"block"});
	btnFlag = true;
	
	
	controls.reset();
	$('#canvas-div,#halfBrainIcon,#fullBrainIcon,#threeSixty,.intensity_blocker').css('display','none');
	$('.page8_brain').css('opacity','1').css('display','block');
	$('.heartParent').css({"display":"block"});
	$('#p8btn_0 span').text('INFO VIEW');
	}
	else if(id == 0)
	{
	
			if(btnFlag){
			btnFlag = false;
			$('.hotspot').css("transform","rotate(0deg)").attr("data-flag",'false');
			$('#threeSixty').css('display','block').css('opacity','1');
			controls.reset();
			$('#canvas-div,#halfBrainIcon,#fullBrainIcon,.intensity_blocker').css('display','none');
			$('.page8_brain').css('opacity','1').css('display','block');
			$('.heartParent').css({"display":"block"});
			$('#p8btn_0 span').text('3D VIEW');
			}
			else
			{
			changeView();
			}
	
	}/**/
	
		$(".labelConatiner,.line").hide()
	
}

function clickreportFin(){
	$(".page8").hide();
	$(".page9").show();	
	skip.length=0;
	skip.push("page9")
	$(".gotorpt_btn").on('click', clickQues);
}
function clickQues(){
	clickFunction();
	$('.page9').hide();
	$('.page10').show();
	skip.length=0;
	skip.push("page10")
	mcqClick();
	changeQuestion();	
	$(".gototestcom_btn").on('click', clickTestroom);
}
function clickTestroom(){
	$('.page10').hide();
	$('.page11').show();
	skip.length=0;
	skip.push("page11")
	$('.labelConatiner,.personality_list').hide();
	$(".gotodycbrain_btn").on('click', clickdynamicbtn);
	$(".page8_btn").css("background","#000");
	$("#p8btn_0").css("background","#008ab1");
	$(".heart").css({"width":"20px","height":"20px","border-radius":"20px","transform-origin":"center"})
	$(".hotspot,#threeSixty,.threeSixty_txt").show();
	$(".personality_list,.page8_personality,.intensity_blocker").hide()
	$(".mcqbtns").css("transform","rotate(0deg)")
	clickFunction();
	
}
function clickdynamicbtn(){
	$('.page11').hide();
	$('.page6').show();	
	$('#icon_1').attr('src','./images/icon1-02.png');
	$('#icon_2').attr('src','./images/icon2-02.png');
	$('#icon_3').attr('src','./images/icon3-02.png');
	$('#main-container').css('background-image','url(./images/bg_only-01.png)');
	/* $(".gotocom_btn").on('click', clickcomp); */
	clickFunction();
}
var class1;
function clickcomp(){
	$('.page6,#page5,.page8,.page9,.page10,.page11').hide();
	$('#icon_1').attr('src','./images/icon1-02.png');
	$('#icon_2').attr('src','./images/icon2-02.png');
	$('#icon_3').attr('src','./images/icon3-02.png');
	$('.page12').show();
	$(".leftroundImg").css("opacity","0.2")
    var id=$(this).parent()
	class1=$(id).parent().parent().attr("class")
	$(".dropdown-content").hide();
	$(".close_brainnotes").on('click', brainnoteClose);
	/* $(".gotoclose_btn").on('click', clickdymmain); */
}
function clickdymmain(){
	$('#main-container').css('background-image','url(./images/page1-01.png)');
	$('#icon_1').attr('src','./images/icon1.png');
	$('#icon_2').attr('src','./images/icon2.png');
	$('#icon_3').attr('src','./images/icon3.png');
	$(".page13,.goto_btn").hide();
	$(".page0").show();
	$('.mission-txt').html(mdText[0]);
	$('.next').off('click').on('click', nextScreen);
	$(".num-txt").html("1/3")
	$('.next').css('background-image','url(./images/next_enable.png)').css('cursor','pointer');
	$('.prev').off('click').css('background-image','url(./images/prev_disable.png)').css('cursor','default');
	$(".dropdown").hide();
	dis_count=1;
	//canditateScreen();
	clickFunction();
	
}
function brainnoteClose(){
$('.page12').hide();
$('.page6').hide();
		$('.gotodycbrain6_btn').on('click' ,clickcomp);
		$("."+skip[0]).show();
		
		if(skip[0]=='page8'|| skip[0]=='page9'|| skip[0]=='page10'|| skip[0]=='page11'){
			$('#icon_1').attr('src','./images/icon1.png');
		$('#icon_2').attr('src','./images/icon2.png');
		$('#icon_3').attr('src','./images/icon3.png');
			
		}
		else if(skip[0]=='page13'){
		$('#icon_1').attr('src','./images/icon1-03.png');
	$('#icon_2').attr('src','./images/icon2-03.png');
	$('#icon_3').attr('src','./images/icon3-03.png');
		}
		else {
			
			$('#icon_1').attr('src','./images/icon1-02.png');
	$('#icon_2').attr('src','./images/icon2-02.png');
	$('#icon_3').attr('src','./images/icon3-02.png');
	$(".leftroundImg").css("opacity","0.2")
		}
		
		if(skip[0]=="page6"){
			
			$(".leftroundImg").css("opacity","1")
		}
		
}

function clickFunction(){
url='./audio/'+getaudio[0]+'.mp3';
		$('#play_aud').attr('src',url);
		aud_id.play(0);
}
function mouseoverFunction(){
url='./audio/'+getaudio[1]+'.mp3';
	$('#play_aud').attr('src',url);
  aud_id.play(0);
}
function rotateclick(){
url='./audio/'+getaudio[2]+'.mp3';
		$('#play_aud').attr('src',url);
		aud_id.play(0);
}

var cameraanifun = function(){
	
	fullbrain.rotation.y += .02;
	halfbrian.rotation.y += .02;
	//camera.position.x += .02;

	if(numofmove++ < 80){
		requestAnimationFrame( cameraanifun );
		//setTimeout(cameraanifun,100)
	};
	
}
var numofmove = 0;
var changeView = function(){
numofmove = 0;
$('#halfBrainIcon').css({"display":"block"});
$('#fullBrainIcon').css({"display":"none"});

$('.hotspot').css("transform","rotate(0deg)").attr("data-flag",'false');

if($('.page8_brain').css('opacity') == 0)
{
$('#threeSixty').css({"opacity":"1"});
$('.page8_brain').css('opacity','1').css('display','block');


$('#canvas-div,#halfBrainIcon,.intensity_blocker').css('display','none');

$('.hotspot,.heartParent').css('display','block');
$('#p8btn_0 span').text('3D VIEW');
}
else
{

fullbrain.rotation.y = 0;
halfbrian.rotation.y = 0;
controls.reset();
cameraanifun()

$('#threeSixty').css({"opacity":"0.5"});
$('.page8_brain').css('opacity','0').css('display','none');

$('#canvas-div,#halfBrainIcon,.intensity_blocker').css('display','block');
halfbrian.visible = true;
$('.hotspot,.labelConatiner,.line,.heartParent').css('display','none');
$('#p8btn_0 span').text('INFO VIEW');
}
}

var halfBrainView = function(){
if(halfbrian.visible){
halfbrian.visible = false;
$('#fullBrainIcon').css({"display":"block"});
$('#halfBrainIcon').css({"display":"none"});
}
else
{
halfbrian.visible = true;
$('#halfBrainIcon').css({"display":"block"});
$('#fullBrainIcon').css({"display":"none"});
}
}
var notetext=['','','','','','','','','','','',''];
var selectedInd;

	$(".note_close").on("click", function() {notepad();$(".brain_notes").hide();});
	$(".brainnote_1").on("click", function(){checkingFun($(this).attr('id'));
	$(".brain_notes").show();
	});
	
	
	var notepad = function()
	{	
	notetext[selectedInd]=$(".brain_text").val();
	}
	
	
	var checkingFun= function(x)
	{
	noteid= x;
	noteid= noteid.split('_')[1];
	selectedInd = noteid-1;	
	//$(".brain_text1").html(brain_Notes[selectedInd].label_name)
	//$(".brain_notepad").css(brain_Notes[selectedInd].parentcss)
	//$(".brain_notepad1").css(brain_Notes[selectedInd].css)
	
	if(notetext[selectedInd]!="")
	{$(".brain_text").val(notetext[selectedInd]);}
	else
	$(".brain_text").val('');
	}
	
	
$('.brain_text').bind('input propertychange', function() {

	
    notetext[selectedInd]=$(".brain_text").val();
	
});

$(".page13_exit").on("click",function(){
	
	$(".page12,.page6,#page5,.page8,.page9,.page10,.page11").hide();
	
	$(".page13").show();
	$('#icon_1').attr('src','./images/icon1-03.png');
	$('#icon_2').attr('src','./images/icon2-03.png');
	$('#icon_3').attr('src','./images/icon3-03.png');
	skip.length=0;
	skip.push("page13")
	var id=$(this).parent()
	    $(".dropdown-content").hide();
	
})	
//beatWidth height control
var heartBeatradius = function(width, height)
{
	//$(".heart").css({'width':width+'px',"height":height+'px'});
	
		
	
}

function drawCircle() {
	
	
	}