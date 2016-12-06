/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

describe('eventThumbnailSpec', function () {
    beforeEach(module('eventsApp'));
    beforeEach(module('templates/directives/eventThumbnail.html')); //use relative path
    var el;
    
    beforeEach(inject(function($compile, $rootScope){
        var scope = $rootScope.$new();
        scope.event = {"name": "Angular Expo",
            "id": 1,
            "date": "1/1/2013",
            "time": "10:30 am",
            "location": {
                "address": "Google Headquarters",
                "city": "Mountain View",
                "province": "CA"
            }
        };
        
        el = angular.element("<event-thumbnail event='event'/>");
        $compile(el)(scope);
        console.log(el[0].outerHTML); //before digest, it still shows old directive element tag
        scope.$digest(); // cause a data bind to html
        console.log(el[0].outerHTML); //after digest, it will contains all htmls with binded values
    }));
    
    it('should bind the data', function() {
        expect(el.text()).toContain("Angular Expo");
    });
})
