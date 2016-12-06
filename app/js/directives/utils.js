'use strict';

eventsApp.directive('focus', function () {
	return {
		restrict: 'A',
		link: function (scope, element) {
			element.focus();
		}
	}
});

eventsApp.directive('defaultButton', function () {
	return {
		restrict: 'A',
		link: function (scope, element) {
			element.on('keydown keypress', function(event){
				var keyCode = event.which || event.keyCode;
				if (keyCode === 13){
					element.click();
				}
			})
		}
	}
});