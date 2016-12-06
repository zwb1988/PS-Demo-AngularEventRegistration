'use strict';

eventsApp.factory("eventData", function($resource) {
    var resource = $resource('/data/event/:id', { id: '@id' }, { "getAll": { method: "GET", isArray: true, params: { something: "foo" } } });
    var idResource = $resource('/data/eventMaxId');

    var getEvent = function(eventId) {
        if (!eventId) { eventId = 1 };
        return resource.get({ id: eventId });
    };

    var save = function(eventData) {
        if (parseInt(eventData.id).toString() === "NaN") {
            eventData.id = "undefined";
        }
        return resource.save(eventData);
    };

    var getMaxId = function() {
        return idResource.get();
    }

    var getAllEvents = function() {
        return resource.query();
    }

    return {
        getEvent: getEvent,
        save: save,
        getMaxId: getMaxId,
        getAllEvents: getAllEvents
    };
});