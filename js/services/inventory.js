/**
 * Created by Ryan on 10/6/13.
 */
var serviceApp = angular.module('menuServices', []);
serviceApp.factory('menuItems', function(){
    /*var results;
    $.ajax({
        method: 'GET',
        accept: 'application/json',
        url: 'http://localhost:9000/menuitem/',
        async: false,
        success: function(data){
            results = data;
        }
    });
    return data;*/
    return [
        {"id": 1, "name": "Nacho Mamas", "price": 8.5, "category": 2, "imageUrl": "mamas.jpg", "isVisible": true},
        {"id": 2, "name": "Nacho Daddies", "price": 5.5, "category": 2, "imageUrl": "daddies.jpg", "isVisible": true},
        {"id": 3, "name": "Mine Nachos", "price": 10.5, "category": 2, "imageUrl": "mine.jpg", "isVisible": true},
        {"id": 4, "name": "Jalapeno Pobblers", "price": 3.5, "category": 1, "imageUrl": null, "isVisible": true},
        {"id": 5, "name": "Holy Frijoles", "price": 3, "category": 1, "imageUrl": null, "isVisible": true},
        {"id": 6, "name": "Chips and Salsa", "price": 1.5, "category": 1, "imageUrl": null, "isVisible": true},
        {"id": 7, "name": "Sopapillas", "price": 3.5, "category": 3, "imageUrl": null, "isVisible": true},
        {"id": 8, "name": "Churro Burrito", "price": 3.5, "category": 3, "imageUrl": null, "isVisible": true},
        {"id": 9, "name": "Nacho Kids", "price": 3.5, "category": 2, "imageUrl": "kids.jpg", "isVisible": true},
        {"id": 10, "name": "Hamburguesa", "price": 3500.1, "category": 2, "imageUrl": null, "isVisible": false}
    ];
});
serviceApp.factory('fixins', function(){
    return [
        {"id": 1, "name": "Ground Beef", "group": null},
        {"id": 2, "name": "Fajita Steak", "group": null},
        {"id": 3, "name": "Fajita Chicken", "group": null},
        {"id": 4, "name": "Salsa", "group": null},
        {"id": 5, "name": "Sour Cream", "group": null},
        {"id": 6, "name": "Guacamole", "group": null},
        {"id": 7, "name": "Queso", "group": null},
        {"id": 8, "name": "Black Beans", "group": "beans"},
        {"id": 9, "name": "Pinto Beans", "group": "beans"},
        {"id": 10, "name": "Refried Beans", "group": "beans"},
        {"id": 11, "name": "Extra Frijoles", "group": null},
        {"id": 12, "name": "Jalepenos", "group": null},
        {"id": 13, "name": "Onions", "group": null},
        {"id": 14, "name": "Olives", "group": null},
        {"id": 15, "name": "Ground Beef", "group": null},
        {"id": 16, "name": "Ground Beef", "group": null},
        ];
});
serviceApp.factory('upgrades', function(){
   return [
       {"id": 1, "menuItemId": 1, "fixinId": 1, "price": 0, "standard": true},
       {"id": 2, "menuItemId": 1, "fixinId": 2, "price": 2, "standard": false},
       {"id": 3, "menuItemId": 1, "fixinId": 3, "price": 2, "standard": false},
       {"id": 4, "menuItemId": 1, "fixinId": 4, "price": 0, "standard": false},
       {"id": 5, "menuItemId": 1, "fixinId": 5, "price": 0, "standard": false},
       {"id": 6, "menuItemId": 1, "fixinId": 6, "price": 1, "standard": false},
       {"id": 7, "menuItemId": 1, "fixinId": 8, "price": 0, "standard": false},
       {"id": 8, "menuItemId": 1, "fixinId": 9, "price": 0, "standard": true},
       {"id": 9, "menuItemId": 1, "fixinId": 10, "price": 0, "standard": false},
       {"id": 10, "menuItemId": 1, "fixinId": 12, "price": 0, "standard": false},
       {"id": 11, "menuItemId": 1, "fixinId": 13, "price": 0, "standard": false},
       {"id": 12, "menuItemId": 1, "fixinId": 14, "price": 0, "standard": true},
       {"id": 13, "menuItemId": 2, "fixinId": 1, "price": 0, "standard": false},
       {"id": 14, "menuItemId": 2, "fixinId": 2, "price": 0, "standard": false},
       {"id": 15, "menuItemId": 2, "fixinId": 3, "price": 0, "standard": false},
       {"id": 16, "menuItemId": 2, "fixinId": 4, "price": 0, "standard": true},
       {"id": 17, "menuItemId": 2, "fixinId": 5, "price": 0, "standard": true},
       {"id": 18, "menuItemId": 2, "fixinId": 6, "price": 0, "standard": true},
       {"id": 19, "menuItemId": 2, "fixinId": 8, "price": 0, "standard": false},
       {"id": 20, "menuItemId": 2, "fixinId": 9, "price": 0, "standard": true},
       {"id": 21, "menuItemId": 2, "fixinId": 10, "price": 0, "standard": false},
       {"id": 22, "menuItemId": 2, "fixinId": 12, "price": 0, "standard": false},
       {"id": 23, "menuItemId": 2, "fixinId": 13, "price": 0, "standard": true},
       {"id": 24, "menuItemId": 2, "fixinId": 14, "price": 0, "standard": true},
       {"id": 25, "menuItemId": 3, "fixinId": 1, "price": 0, "standard": false},
       {"id": 26, "menuItemId": 3, "fixinId": 2, "price": 2, "standard": false},
       {"id": 27, "menuItemId": 3, "fixinId": 3, "price": 2, "standard": false},
       {"id": 28, "menuItemId": 3, "fixinId": 4, "price": 0, "standard": false},
       {"id": 29, "menuItemId": 3, "fixinId": 5, "price": 0, "standard": false},
       {"id": 30, "menuItemId": 3, "fixinId": 6, "price": 2, "standard": false},
       {"id": 31, "menuItemId": 3, "fixinId": 8, "price": 0, "standard": false},
       {"id": 32, "menuItemId": 3, "fixinId": 9, "price": 0, "standard": true},
       {"id": 33, "menuItemId": 3, "fixinId": 10, "price": 0, "standard": false},
       {"id": 34, "menuItemId": 3, "fixinId": 12, "price": 0, "standard": false},
       {"id": 35, "menuItemId": 3, "fixinId": 13, "price": 0, "standard": false},
       {"id": 36, "menuItemId": 3, "fixinId": 14, "price": 0, "standard": false},
       {"id": 37, "menuItemId": 5, "fixinId": 11, "price": 3.5, "standard": false}
   ];
});
serviceApp.factory('categories', function(){
    return [
        {"name": "Appetizer", "id": 1, "index": 1},
        {"name": "Entree", "id": 2, "index": 2},
        {"name": "Dessert", "id": 3, "index": 3}
    ];
});