'use strict';

eventsApp.factory("userData", function ($resource) {
	var userService = $resource("/data/user/:userName", { userName: "@userName" });

	var getAll = userService.queryAll = function () {
		return userService.query({});
	}

	var getUserProfileAsync = function (userName, callback) {
		userService.get({ userName: userName })
			.$promise
			.then(function (response) {
				if (!callback) return;
				callback(response);
			});
	}

	var saveUserProfileAsync = function (userProfile) {
		return userService.save(userProfile);
	}

	return {
		getAll: getAll,
		getUserProfile: getUserProfileAsync,
		saveUserProfile: saveUserProfileAsync
	}
});