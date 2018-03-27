$(document).ready(function(){

	$('.bar').each(function(){
		var bar = $(this);
		var id = bar.attr('id');
		inView("#"+id).on('enter', function(){
		    	bar.css('max-width', bar.attr('value')+'%');
		    });
	});
});