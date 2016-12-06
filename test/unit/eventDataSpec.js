/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


describe('eventDataSpec', function () {
    beforeEach(module('eventsApp'));

    it('should issue an GET request to /data/event/11 when getFevent is called', inject(function (eventData, $httpBackend) {
        $httpBackend.expectGET('/data/event/11');
        $httpBackend.when('GET', '/data/event/11').respond({});
        eventData.getEvent(11);
        $httpBackend.flush();

        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    }));

    it('should return the correct data when getEvent is called', inject(function (eventData, $httpBackend) {
        $httpBackend.when('GET', '/data/event/11').respond({name: 'My Event'});
        var event = eventData.getEvent(11);
        $httpBackend.flush();

        expect(event.name).toBe('My Event');
    }));

    it('should save the event data', inject(function (eventData, $httpBackend) {
        $httpBackend.when('POST', '/data/event/undefined').respond({});
        var event = {name: 'My Event'};
        eventData.save(event);
        $httpBackend.flush();
        expect(event.id).toBe("undefined");
    }));

    it('should issue a GET reqeust to a data/event when getAllEvents called', inject(function (eventData, $httpBackend) {
        $httpBackend.when('GET', '/data/event').respond([{name: 'My Event'}]);
        var events = eventData.getAllEvents();
        $httpBackend.flush();
        expect(events[0].name).toBe('My Event');
    }));
});