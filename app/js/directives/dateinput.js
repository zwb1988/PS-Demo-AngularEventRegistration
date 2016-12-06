'use strict';

eventsApp.directive('dateInput', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/dateinput.html',
		scope: {
			data: '='
		}
	}
});