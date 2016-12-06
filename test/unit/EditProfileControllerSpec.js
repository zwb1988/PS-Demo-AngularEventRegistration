/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

describe('EditProfileControllerSpec', function () {
    var $controllerConstructor, scope, mockGravatarUrlBuilder;
    beforeEach(module('eventsApp'));

    beforeEach(inject(function ($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockGravatarUrlBuilder = sinon.stub({buildGravatarUrl: function () {}});
    }));

    it('should build the gravatar with the given email', function () {
        $controllerConstructor('EditProfileController',
                {'$scope': scope, gravatarUrlBuilder: mockGravatarUrlBuilder});
                
        var email = "abc@abc.com";
        scope.getGravatarUrl(email);
        
        expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBeTruthy();
    });
});