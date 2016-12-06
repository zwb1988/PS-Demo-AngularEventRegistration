'use strict';

eventsApp.controller('CacheSampleController',
	function CacheSampleController($scope, myCache, $parse) {
		$scope.addToCache = function (key, value) {
			myCache.put(key, value);
		};

		$scope.readFromCache = function (key) {
			return myCache.get(key);
		};

		$scope.getCacheStatus = function (key) {
			return myCache.info();
		};

		// var fn = $parse('2 + 5');
		// console.log(fn());

		// var context1 = { event: { name: "Context 1" } };
		// var context2 = { event: { name: "Context 2" } };

		// var getter = $parse("event.name");
		// console.log(getter(context1));
		// console.log(getter(context2));

		// console.log(getter(context2, context1));

		// var setter = getter.assign;
		// setter(context2, "Modified");
		// console.log(getter(context2));
	}
);