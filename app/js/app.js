'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute', 'ngCookies'])
    .config(function ($routeProvider, $locationProvider, $compileProvider) {
        $routeProvider
            .when(
            '/newEvent',
            {
                templateUrl: 'templates/NewEvent.html',
                controller: 'EditEventController'
            }
            ).when(
            '/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController',
                resolve: {
                    events: function ($route, eventData) {
                        return eventData.getAllEvents().$promise;
                    }
                }
            }
            ).when(
            '/event/:eventId',
            {

                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController',
                resolve: {
                    event: function ($route, eventData) {
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            }
            ).when(
            '/editProfile',
            {
                templateUrl: 'templates/EditProfile.html',
                controller: 'EditProfileController'
            }
            ).when(
            '/login',
            {
                templateUrl: 'templates/Login.html',
                controller: 'LoginController'
            }
            ).when(
            '/about',
            {
                template: '<h3 style="color: green">This is the about page</h3>'
            }
            ).when(
            '/sampleDirective',
            {
                templateUrl: 'templates/sampleDirective.html',
                controller: 'SampleDirectiveController'
            }
            );

        $routeProvider.otherwise(
            { redirectTo: '/events' }
        );

        $locationProvider.html5Mode(true);
        
        $compileProvider.debugInfoEnabled(true);
    })
    .factory('myCache', function ($cacheFactory) {
        return $cacheFactory('myCache', { capacity: 3 });
    })
    // .config(function($interpolateProvider) {
    // 	$interpolateProvider.startSymbol('[[').endSymbol(']]');	
    // })
    ;
