function changeClass() {
			var button = document.getElementById('home-button').classList;
			
			var class_options = [
				'move-right', 
				'move-up', 
				'move-left', 
				'move-down', 
				'none',
			];

			class_options.splice(class_options.indexOf(button[0]), class_options.indexOf(button[0]));
			button.remove(button[0]);
			button.add(class_options[Math.floor(Math.random() * class_options.length)]);
		};
function featuresComeIn() {
	document.getElementById('features-come-left').classList.add('features-come-in');
	document.getElementById('features-come-right').classList.add('features-come-in')
};

$(window).on('scroll', function(){
	if ($("html").scrollTop() > 400) {
		featuresComeIn();
	};
});


