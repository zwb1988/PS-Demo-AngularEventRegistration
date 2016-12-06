'use strict';

eventsApp.controller('LoginController',
	function LoginController($scope, userData, $log, $cookies) {
		$scope.user = {}

		$scope.cancel = function () {
			window.location = '/EventDetails.html';
		}

		$scope.login = function (user) {
			userData.getUserProfile(user.userName, function (profile) {
				if (!profile) return;
				if (profile.password === user.password) {
					if (!profile.upVoteList) {
						profile.upVoteList = [];
					}
					$cookies.put('userProfile', JSON.stringify(profile));
				}
			});
		}
	}
);