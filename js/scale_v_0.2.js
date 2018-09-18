var scaleRatio,leftPos=0;
function ScaleElements()
{
	var stageHeight=768,stageWidth=1024,scaleX ,scaleY,scale;
	//alert(window.innerHeight);
	
	this.scale=function()
	{
		this.draw();
		$(window).on('resize',this.draw);
	}
	this.draw=function()
	{	
		scaleX = window.innerWidth / stageWidth;
		scaleY = window.innerHeight / stageHeight;
		scale = Math.min(scaleX, scaleY);
		scaleRatio=scale;
		leftPos=scale*1024;
		console.log(scaleRatio);
		if(window.innerWidth>leftPos)
		{
			leftPos=window.innerWidth-leftPos;
			leftPos=leftPos/2;
		}
		else
		{
			leftPos=0;
		}
		
		if(navigator.platform.match(/iPhone|iPod|iPad/))
		{			
			if(window.innerWidth==1024)
			{				
				scale = "scale(" + 1 + "," + scale + ")";
				leftPos=0;
				$('body').css({transform:scale,position:'absolute',top:'0px',left:leftPos+'px'});
			}else{
				scale = "scale(" + scale + "," + scale + ")";
				$('body').css({transform:scale,position:'absolute',top:'0px',left:leftPos+'px'});
			}
		}
		else if(scaleRatio<1)
		{
			scale = "scale(" + scale + "," + scale + ")";
			$('.page10').css({transform:scale,position:'absolute',top:'0px',left:leftPos+'px'});
		}
		else
		{
			leftPos=window.innerWidth-1024;
			leftPos=leftPos/2;
			scaleRatio = 1;
			$('body').css({position:'absolute',top:'0px',left:leftPos+'px'});
		}
		
	}
	

}