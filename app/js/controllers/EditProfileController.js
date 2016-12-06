'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder, userData, $log) {
        $scope.user = {};

        $scope.getGravatarUrl = function (email) {
            return gravatarUrlBuilder.buildGravatarUrl(email);
        };

        $scope.saveProfile = function (profile) {
            userData.saveUserProfile(profile)
                .$promise
                .then(
                function (response) { $log.info(response); },
                function (response) { $log.error(response); }
                );
        };
    }
);

