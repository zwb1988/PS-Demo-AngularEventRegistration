'use strict';

eventsApp.directive('eventThumbnail',
	function ($compile) {
		return {
			restrict: 'E',
			replace: true, // removes the original element and replace with the new template
			templateUrl: 'templates/directives/eventThumbnail.html',
			scope: {
			    event: "=" // use = if the same as the property name, or use camel case to - seperated attributes
			}
		}
	}
);