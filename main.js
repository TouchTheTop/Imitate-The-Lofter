

$(".close").click(function(){
	// $(this).prev().fadeOut();
	$(this).parent('div').fadeOut('fast');	
// $(this).parent('div').animate({left:'250px'},'fast',function(){
// 	 $(this).fadeOut();
// });

});

$(document).ready(function(){
            var links = $(".pic-athor").find('img');//获取标签为a的内容
            var dixs= $(".pic-hide");
           for (var i =0; i < links.length; i++) {       //逐行遍历
           	var link = links[i];
           	
           	link.onmouseover = onmouse;
           	
            }                   //当鼠标经过某行是调用onmouse函数
            
        });

function onmouse(event) {
	$(".pic-hide-person").css("width",400);
	var theEvent = window.event || arguments.callee.arguments[0];
            var div = document.createElement("div");         //动态创建div标签
            div.style.position ="absolute";                //设置标签属性为手型
            div.style.top = theEvent.clientY;            //设置y坐标
            div.style.left = theEvent.clientX;            //设置x坐标
            div.innerHTML =$(".pic-hide").html();//将要显示的内容添加到后面

         $(this).parent("div").append(div);              //将动态的div跟在body后面         
         $(".pic-hide-person").parent('div').addClass('pic-hide');
         div.onmouseleave =mouseout; annimate();
     }
     function mouseout(event) {
     	var theEvent = window.event || arguments.callee.arguments[0];
     	
     	var div=$(".pic-hide-person").parent('div');
     	div.addClass('pic-hide');
         div.remove('.pic-hide');    //移除该节点下的子节点             
         div.first().prependTo( "body" );
         $(".pic-hide-person").css("width",400);  
         div.css("display","none");   
         return false;
     }
     
     function annimate(){
     	$(".pic-hide").animate({
     		left:'20px' 
     	},'fast');
     }

//          $(".content-model").mouseout(function(){
// mouseout(event);
//          });
