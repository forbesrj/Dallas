/**
 * Created by Ryan on 10/6/13.
 */
function MenuCtrl($scope){
    $scope.menuItems = [
        {"name": "Nacho Mamas", "price": 8.5, "category": 2, "imageUrl": "http://i2.cdn.turner.com/cnn/2011/images/06/17/t1larg.mexican.food.ts.jpg", "isVisible": true },
        {"name": "Nacho Daddies", "price": 5.5, "category": 2, "imageUrl": "", "isVisible": true},
        {"name": "Mine Nachos", "price": 10.5, "category": 2, "imageUrl": "", "isVisible": true},
        {"name": "Jalapeno Pobblers", "price": 3.5, "category": 1, "imageUrl": "", "isVisible": true},
        {"name": "Holy Frijoles", "price": 3, "category": 1, "imageUrl": "", "isVisible": true},
        {"name": "Chips and Salsa", "price": 1.5, "category": 1, "imageUrl": "", "isVisible": true},
        {"name": "Sopapillas", "price": 3.5, "category": 3, "imageUrl": "", "isVisible": true},
        {"name": "Churro Burrito", "price": 3.5, "category": 3, "imageUrl": "", "isVisible": true},
        {"name": "Nacho Mamas", "price": 3.5, "category": 2, "imageUrl": "", "isVisible": true}
    ];

    $scope.categories = [
        {"name": "Appetizer", "id": 1, "index": 1},
        {"name": "Entree", "id": 2, "index": 2},
        {"name": "Dessert", "id": 3, "index": 3}
    ];
}