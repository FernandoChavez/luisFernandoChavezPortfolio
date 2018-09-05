jQuery(document).ready(function(){
	restarBar();
});

$( ".finishAnimation" ).click(function() {
	$(".skillbar-bar").finish()
});

$( ".restartAnimation" ).click(function() {
	$(".skillbar-bar").finish()
	$(".skillbar-bar").width(0);
		restarBar();
});

let restarBar = () => {
    jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},5000);
	  });
};
