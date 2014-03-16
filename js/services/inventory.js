/**
 * Created by Ryan on 10/6/13.
 */
var serviceApp = angular.module('menuServices', []);
serviceApp.factory('menuItems', function(){
    return [
        {"id": 1, "name": "Nacho Mamas", "price": 8.5, "category": 2, "imageUrl": "mamas.jpg", "isVisible": true },
        {"id": 2, "name": "Nacho Daddies", "price": 5.5, "category": 2, "imageUrl": "daddies.jpg", "isVisible": true},
        {"id": 3, "name": "Mine Nachos", "price": 10.5, "category": 2, "imageUrl": "mine.jpg", "isVisible": true},
        {"id": 4, "name": "Jalapeno Pobblers", "price": 3.5, "category": 1, "imageUrl": "", "isVisible": true},
        {"id": 5, "name": "Holy Frijoles", "price": 3, "category": 1, "imageUrl": "", "isVisible": true},
        {"id": 6, "name": "Chips and Salsa", "price": 1.5, "category": 1, "imageUrl": "", "isVisible": true},
        {"id": 7, "name": "Sopapillas", "price": 3.5, "category": 3, "imageUrl": "", "isVisible": true},
        {"id": 8, "name": "Churro Burrito", "price": 3.5, "category": 3, "imageUrl": "", "isVisible": true},
        {"id": 9, "name": "Nacho Kids", "price": 3.5, "category": 2, "imageUrl": "kids.jpg", "isVisible": true},
        {"id": 9, "name": "Hamburguesa", "price": 3500.1, "category": 2, "imageUrl": "", "isVisible": false}
    ];
});
serviceApp.factory('categories', function(){
    return [
        {"name": "Appetizer", "id": 1, "index": 1},
        {"name": "Entree", "id": 2, "index": 2},
        {"name": "Dessert", "id": 3, "index": 3}
    ];
});