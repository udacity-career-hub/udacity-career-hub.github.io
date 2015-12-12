$(document).ready(function() {
	$('.toctree-l1').on('click', 'a', function(evt) {
		var pageName = $(evt.target).attr('href');
		pageName = 'career_' + pageName.replace(/(#|.html)/, '');
		amplitude.logEvent(pageName);
	});
});
