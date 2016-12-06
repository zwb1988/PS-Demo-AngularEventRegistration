'use strict';

eventsApp.directive('greeting', function () {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		template: "<div><button class='btn' ng-click='sayHello()'>Say Hello</button><div ng-transclude></div></div>",
		controller: 'GreetingController'
	}
}).directive('finnish', function () {
	return {
		restrict: 'A',
		require: '^greeting',
		link: function (scope, element, attrs, controller) {
			controller.addGreeting('hei');
		}
	}
}).directive('chinese', function () {
	return {
		restrict: 'A',
		require: '^greeting',
		link: function (scope, element, attrs, controller) {
			controller.addGreeting('你好');
		}
	}
});

eventsApp.controller('GreetingController',
	function GreetingController($scope) {
		var greetings = ['Hello'];
		$scope.sayHello = function () {
			alert(greetings.join());
		};
		this.addGreeting = function (greeting) {
			greetings.push(greeting);
		};
	}
);