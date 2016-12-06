'use strict';

eventsApp.controller("EditEventController",
	function EditEventController($scope, eventData, $log) {
		$scope.saveEvent = function (event, newEventForm) {
			if (newEventForm.$valid) {
				eventData.save(event)
					.$promise.then(
					function (response) {
						$log.info("Success", response)
					},
					function (response) {
						$log.error("Failure on save", response)
					}
					);
			}
		};

		$scope.test = function () {
			alert('Test');
		}

		$scope.cancelEdit = function () {
			window.location = '/EventDetails.html';
		};
	}
);