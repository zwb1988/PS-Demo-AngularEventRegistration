'use strict';

eventsApp.directive('mySample',
	function ($compile) {
		return {
			restrict: 'E', // restrict to element level, default is A, e.g. A = <div my-directive/> & E = <my-directive/> & C = <div class="my-sample"/>
			template: "<input type='text' ng-model='sampleData' /> {{ sampleData }} <br/>", // the template is the same as the link property below
			// link: function (scope, element, attrs, controller) {
			// 	var markup = "<input type='text' ng-model='sampleData' /> {{ sampleData }} <br/>";
			// 	angular.element(element).html($compile(markup)(scope));
			// }
			scope: { //isolated scope
				
			}
		};
	}
);