//This function is called to show the popup
var showlightpop = function(){
$(".lightpop").show().animate({
    opacity: 1,
  }, 100, function() {
    // Animation complete.
  });
$(".overlay").show();
}

//This function is called to hide the popup
var hidelightpop = function(){
$(".lightpop").hide().css( "opacity", "0" );
$(".overlay").hide();
}

$(function(){

//wrap the lightpop with an overlay
$( ".lightpop" ).wrap(function() {
  return "<div class='overlay'></div>";
});

$( "<a href='javascript:hidelightpop();' class='lightpopclose'></a>" ).appendTo( ".lightpop" ); //add a close button

hidelightpop(); //hide lightpop

$(".lightpopshow").click(function(){ //Show lightpop when an element with a "lightpopshow" class is clicked
{
showlightpop();
}
});

$(".overlay").click(function(event){ //close lightpop when overlay is clicked
{
  if(event.target != this) return;
hidelightpop();
}
});

$(document).keydown(function(event){ //close lightpop when ESC is clicked
			if(event.which == 27){
				hidelightpop();
			}
	});
	
	
});
