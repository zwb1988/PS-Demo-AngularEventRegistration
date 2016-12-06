'use strict';

eventsApp.directive('eventDetail', function() {
    return {
        restrict: 'E',
        //replace: true,
        templateUrl: 'templates/directives/eventDetail.html',
        scope: {
            imageUrl: '=',
            name: "=eventName",
            date: "=eventDate",
            time: "=eventTime",
            location: "=eventLocation",
            reload: "&reloadAction"
        }
    }
});

eventsApp.directive('sessionThumbnail', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/sessionThumbnail.html',
        scope: {
            name: '=',
			creatorName: '=',
			duration: '=',
			level: '=',
			abstract: '='
        }
    }
});