'use strict';

eventsApp.directive('upvote',
	function ($compile) {
		return {
			restrict: 'E',
			replace: true, // removes the original element and replace with the new template
			templateUrl: 'templates/directives/upvote.html',
			scope: {
				upvote: "&upvote",
				downvote: "&",
				count: "="
			}
		}
	}
);