'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log, $anchorScroll, $cookies, $location, $route) {

        $scope.sortorder = 'name';

        $scope.snippet = '<span style="color:red">hi there</span>';

        $scope.boolValue = false;
        $scope.mystyle = { color: "red" };
        $scope.myclass = "blue";
        var userProfileData = $cookies.get('userProfile');
        if (!userProfileData){
            $location.url('/login');
            return;
        }
        $scope.userProfile = JSON.parse(userProfileData);

        if (!$scope.userProfile.upVoteList) {
            $scope.userProfile.upVoteList = [];
        }

        // eventData.getEvent()
        //     .success(function(data) {
        //         $scope.event = data;
        //     })
        //     .error(function(data, status, headers, config) {
        //         $log.warn(data, status, headers(), config);
        //     });

        // eventData.getEvent($routeParams.eventId)
        //     .$promise.then(
        //     function(data) {
        //         $scope.event = data;
        //         $log.info(data);
        //     })
        //     .catch(
        //     function(response) {
        //         $log.warn(response);
        //     });

        $scope.event = $route.current.locals.event;

        // $scope.event = $route.current.locals.event
        //     .$promise.then(
        //     function(data) {
        //         $scope.event = data;
        //         $log.info(data);
        //     })
        //     .catch(
        //     function(response) {
        //         $log.warn(response);
        //     });

        $scope.upVoteSession = function(session) {
            // if (!$cookies.get(session.id)) {
            //     session.upVoteCount++;
            //     $cookies.put(session.id, session.id)
            // }
            if ($scope.userProfile.upVoteList.indexOf(session.id) === -1) {
                session.upVoteCount++;
                $scope.userProfile.upVoteList.push(session.id);
            }
        };

        $scope.downVoteSession = function(session) {
            // if ($cookies.get(session.id)) {
            //     session.upVoteCount--;
            //     $cookies.remove(session.id);
            // }
            if ($scope.userProfile.upVoteList.indexOf(session.id) >= 0) {
                session.upVoteCount--;
                $scope.userProfile.upVoteList.pop(session.id);
            }
        };

        $scope.scrollToSession = function() {
            $anchorScroll();
        };

        $scope.reload = function() {
            $route.reload();
        };
    }
);