'use strict';

eventsApp.controller('TimeoutSampleController',
	function TimeoutSampleController($scope, $timeout) {
		$scope.cancel = function () {
			$timeout.cancel(promise);
		};

		setTimeout(function () {
			$scope.name = "Hello World";
		}, 3000);
	}
);