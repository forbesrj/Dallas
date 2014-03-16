/**
 * Created by Ryan on 10/6/13.
 */
var app = angular.module('menuModule', ['menuServices']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/menu/:id', {templateUrl:'partials/item.html', controller: 'ItemCtrl'})
        .otherwise({redirectTo: '/menu', templateUrl:'partials/menu.html'})
}]);