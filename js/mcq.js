mcqObject = {
          
     "0":{
	      "title":"QUESTION 1",
	      "question":"Which brain lobe is responsible for interpreting visual stimuli and information?<br/><br/>Select the correct region",
		  "answer":"OCCIPITAL&nbsp;LOBE",
		  'eventName' : 'click',
		 
	   },
    "1": {
	      "title":"QUESTION 2",
	      "question":"This candidate displays problems with memory, speech perception, and language skills.<br/><br/>Which brain structure is damaged?",
	      "answer":"TEMPORAL&nbsp;LOBE",
		  'eventName' : 'click'
	   },
	"2": {
	      "title":"QUESTION 3",
	      "question":"This candidate displays changes in sexual habits and socialization.<br/><br/>Which brain structure is damaged?",
	      "answer":"FRONTAL&nbsp;LOBE",
		  'eventName' : 'click'
	   },
	"3":{
	      "title":"QUESTION 4",
	      "question":"This part of the brain is heavily associated with the formation of memories.<br/><br/>Select the correct region",
	      "answer":"TEMPORAL&nbsp;LOBE",
		  'eventName' : 'click'
	  },
	"4":{
	      "title":"QUESTION 5",
	      "question":"Match each label with the corresponding brain region",
		  "answer":"FRONTAL&nbsp;LOBE",
		  'eventName' : 'drag',
		  'dragElement':[['Frontal Lobe','-203px','284px;'],['Parietal Lobe','-203px','329px'],['Temporal Lobe','-203px','374px'],['Occipital Lobe','-203px','419px'],['Cerebellum','-203px','464px']],
		  'dropElement':[['0','25px','33px'],['1','265px','47px'],['3','445px','109px'],['2','25px','402px'],['4','425px','449px']]
		 
	  }  
}
var completedQue = [];
var clickBtnId = 0;
var currentQuestion=0;
var mcqQueNo,mcqQueTxt,mcqCrtAnswer;
var dragCompArr = [];

function mcqClick()
{
	mcqResetFn();
	eventName = mcqObject[currentQuestion]['eventName'];
	if(eventName == 'click') $('.mcqbtns').off('click').on('click',mcqBtnClkFn).css({'dispaly':'block'});
	for(var i = 0;i < Object.keys(mcqObject).length;i++){ completedQue[i] = 0; }
	if(eventName == 'drag') for(var i = 0 ; i < mcqObject[currentQuestion]['dragElement'].length;i++) dragCompArr[i] = 0;
}
var eventName = '';
function mcqBtnClkFn()
{
	
	if(eventName == 'click')
	{
		clickBtnId = $(this).attr('id').split('_')[1];
		mcqCrtAnswer = mcqObject[currentQuestion]['answer'].toLowerCase();
		labelTxt = brain_label[clickBtnId]["label_name"].toLowerCase();
		rotateclick();
		$(".mcqbtns").css("transform","rotate(0deg)")
		$(".labelConatiner").css(brain_label[clickBtnId]["mcqcss"]).fadeIn();
		$(".labeltxtval").html(brain_label[clickBtnId]["label_name"]);
		$(".line").hide();
		answerCheckfn()
		if($(this).attr("data-flag")=="false")
		{
			$(this).css("transform","rotate(45deg)")
			$('#mcqline'+clickBtnId).show();
			$(".mcqbtns").attr("data-flag",false)
			$(".labelConatiner").css(brain_label[clickBtnId]["mcqcss"]).fadeIn();
			$(this).attr("data-flag",true)	
		}
		else
		{
			$(this).css("transform","rotate(0deg)")
			$("#mcqline"+clickBtnId).hide()
			$(".labelConatiner").css(brain_label[clickBtnId]["mcqcss"]).fadeOut();
			$(".mcqbtns").attr("data-flag",false)
		}
	}
	else if(eventName == 'drag')
	{
		
	}
}
function answerCheckfn()
{
	$('.responseTxt').show();
	if(mcqCrtAnswer == labelTxt)
	{
		nextArrowEnable();
		$('.responseTxt').html('CORRECT').css('color','#52942e');
		completedQue[currentQuestion]=1;
		$('.dummyMcq').show();
		EndMcQ();
	}
	else
	{
		$('.responseTxt').html('INCORRECT').css('color','#e1432e');
	}
}
function nextArrowEnable()
{
	if(currentQuestion < Object.keys(mcqObject).length-1) $('.mcqrightArrow').css({'background-image':'url("images/next_enable.png")','cursor':'pointer'}).off('click').on('click',nextArrClick);	
}
function nextArrClick()
{
	if(eventName == 'drag')
	{
		$('.responseTxt,.line').hide();	
		$(".labelConatiner").css(brain_label[clickBtnId]["mcqcss"]).hide();
		$(".mcqbtns").attr("data-flag",false).show();
		$('.dummyMcq').hide();
		$(".mcqbtns").css("transform","rotate(0deg)")
	}
	$('.dragarea').empty();
	currentQuestion++;
	changeQuestion();
}
function changeQuestion()
{
	eventName = mcqObject[currentQuestion]['eventName'];
	if(currentQuestion < Object.keys(mcqObject).length)
	{
		$('.questionNumeber').html(mcqObject[currentQuestion]['title']);
		$('.mcqquestion').html(mcqObject[currentQuestion]['question']);
		$('.totalQuestion').html(' '+Object.keys(mcqObject).length);
		$('.currentQuestion').html((currentQuestion+1)+' ');
		$('.mcqrightArrow').css({'background-image':'url("images/next_disable.png")','cursor':'default'}).off('click');
		if(eventName == 'click')
		{
			$('.mcqLabel').show();
			$('.dragarea').hide();
			$('.responseTxt,.line').hide();	
			$(".labelConatiner").css(brain_label[clickBtnId]["mcqcss"]).hide();
			$(".mcqbtns").attr("data-flag",false);
			$('.dummyMcq').hide();
			$(".mcqbtns").css("transform","rotate(0deg)")
		}
		if(eventName == 'drag')
		{	
			$(".mcqbtns").attr("data-flag",false);
			$(".mcqbtns").css("transform","rotate(0deg)")
			$('.dragarea').show();
			for(var i = 0 ; i < mcqObject[currentQuestion]['dragElement'].length;i++) dragCompArr[i] = 0;
			$('.responseTxt,.line,.dummyMcq,.mcqLabel').hide();
			$('.mcqline').show();
			$('.mcqbtns').off('click').css({'dispaly':'block'});
			for(var i = 0;i< mcqObject[currentQuestion]['dragElement'].length;i++)
			{
				$('.dragarea').append('<div class="drag" id="drag_'+i+'" style="left:'+mcqObject[currentQuestion]['dragElement'][i][1]+';top:'+mcqObject[currentQuestion]['dragElement'][i][2]+';" >'+mcqObject[currentQuestion]['dragElement'][i][0]+'</div>')
				$('.dragarea').append('<div class="drop" id="drop_'+i+'" style="left:'+mcqObject[currentQuestion]['dropElement'][i][1]+';top:'+mcqObject[currentQuestion]['dropElement'][i][2]+';" ></div>')
			}
			$('.drag').draggable({containment:'.dragcontainment',drag:dragfun,revert:true,stop:stopfun,disabled:false,'cursor':'pointer'});
			$('.drop').droppable({drop:dropfun});
			
		}
	}
}
var dragId;
var dropId;
function stopfun(event,ui)
{
	$('.drag').css({'z-index':'20'});
}

function dragfun(event,ui)
{
	$(this).css({'z-index':'50'});
	dragId = $(this).attr('id').split('_')[1];
 /* var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
    var newLeft = ui.originalPosition.left + changeLeft; // adjust new left by our zoomScale
 
    var changeTop = ui.position.top - ui.originalPosition.top // find change in top
    var newTop = ui.originalPosition.top + changeTop  // adjust new top by our zoomScale
 console.log(newTop+":::::::::"+newLeft)
    ui.position.left = newLeft;
    ui.position.top = newTop; 
	$(this).css({"top": newTop+"px","left": newLeft+"px"}) */
   
	
	/* var boundReached = false,
	    changeLeft = ui.position.left - ui.originalPosition.left,
        newLeft = ui.originalPosition.left + changeLeft / scalVal,

        changeTop = ui.position.top - ui.originalPosition.top,
        newTop = ui.originalPosition.top + changeTop / scalVal;


    // right bound check
    if(ui.position.left > containmentW - objW) {
      newLeft = (containmentW - objW) / scalVal;
      boundReached = true;
    }

    // left bound check
    if(newLeft < 0) {
      newLeft = 0;
      boundReached = true;
    }

    // bottom bound check
    if(ui.position.top > containmentH - objH) {
      newTop = (containmentH - objH) / _zoom;
      boundReached = true;
    }

    // top bound check
    if(newTop < 0) {
      newTop = 0;
      boundReached = true;
    }

    // fix position
    ui.position.left = newLeft;
    ui.position.top = newTop; */
	
}
function dropfun(event,ui)
{
	dropId = $(this).attr('id').split('_')[1];
	if(mcqObject[currentQuestion]['dropElement'][dropId][0] == dragId)
	{
		$(this).droppable({disabled:true});
		$(ui.draggable).draggable({revert:false,disabled:true}).css({'border':'none','cursor':'default'});
		$('#drag_'+dragId).draggable({disabled:true});
		dragCompArr[dropId] = 1;
		$(ui.draggable).position({my: "center",	at: "center",of: this});
		if(dragCompArr.indexOf(0)==-1)
		{
			nextArrowEnable();
			completedQue[currentQuestion]=1;
			EndMcQ();
		}
	}
}

function EndMcQ()
{
	if(completedQue.indexOf(0) == -1 )
	{
		$('.continueBtn').show().off('click').on('click',clickTestroom);
	}
}

function mcqResetFn()
{
	completedQue = [];
	clickBtnId = 0;
	currentQuestion=0;
	mcqQueNo = '';
	mcqQueTxt = ''
	mcqCrtAnswer = '';
	$('.labelConatiner').hide();
	eventName = '';
	$('.continueBtn').hide().off('click');
	dragId = '';
	dropId = '';
	dragCompArr = [];
}