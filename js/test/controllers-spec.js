/**
 * Created by Ryan on 4/12/2014.
 */
'use strict';

describe('MenuCtrl', function(){
    var scope;

    beforeEach(angular.mock.module('menuModule'));

    beforeEach(angular.mock.inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        $controller('MenuCtrl', {$scope: scope});
    }));

    it('should have more than one menu item', function(){
        expect(scope.menuItems.length).lessThan(0);
    })
});