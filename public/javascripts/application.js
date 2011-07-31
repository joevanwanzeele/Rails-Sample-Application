// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$( function() {
	$('#micropost_content').keyup( function() {		
		var remaining = 140 - $('#micropost_content').val().length;
		$('#wordcount').html(Math.max(remaining, 0));
		if (remaining <= 0)		
			$('.wordcount').addClass('too_many_characters');
		else		
			$('.wordcount').removeClass('too_many_characters');
	});
});