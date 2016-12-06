/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

describe('calendarHelperSpec', function () {
    beforeEach(module('eventsApp'));
    
    it('should return January when give a zero', inject(function (calendarHelper) {
        expect(calendarHelper.getMonthName(0)).toBe('January');
    }));
});
