/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

describe('filtersSpec', function () {
    beforeEach(module('eventsApp'));
    
    it('when pass 3 into a filter, it should return text Half Day', inject(function(durationsFilter){
        expect(durationsFilter(3)).toBe('Half Day');
    }));
});