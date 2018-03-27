$(document).ready(function(){

	$('.bar').each(function(){
		var id = $(this).attr('id');
		inView("#"+id).on('enter', function(){
		    	activeBar($('#'+id));
		    });
	});

	// $('.bar').each(function(){
	// 	var bar = $(this);
	// 	bar.on('show', function(){
	// 		console.log('ok');
	// 		activeBar($(this));
	// 	});
	// });
});

function activeBar(bar){
	var actual = bar.width();
	var max = parseInt(bar.attr('value'));
	var idInt = setInterval(function(){
		if(actual >= max){
			clearInterval(idInt);
		}else{
			actual++;
			bar.width(actual+'%');
		}
	}, 15);
}