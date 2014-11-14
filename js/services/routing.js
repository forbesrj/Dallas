/**
 * Created by Ryan on 10/6/13.
 */
var app = angular.module('menuModule', ['menuServices']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/item/:id', {templateUrl:'partials/item.html', controller: 'ItemCtrl'})
        .when('/fixins/:id', {templateUrl:'partials/fixins.html', controller: 'FixinCtrl'})
        .when('/order', {templateUrl:'partials/order.html', controller: 'OrderCtrl'})
        .when('/menu', {templateUrl:'partials/menu.html', controller: 'MenuCtrl'})
        .when('/complete', {templateUrl: 'partials/complete.html', controller: 'CompleteCtrl'})
        .otherwise({redirectTo: '/about', templateUrl:'partials/about.html'})
}]);