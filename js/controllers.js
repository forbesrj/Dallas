/**
 * Created by Ryan on 10/6/13.
 */

function MenuCtrl($scope, menuItems, categories){
    $scope.menuItems = menuItems;

    $scope.categories = categories;
}

function ItemCtrl($scope, $filter, $routeParams, menuItems){
    var found = $filter("filter")(menuItems,  {id: $routeParams.id});
    $scope.selectedItem =  (found)? found[0]: {"name": "Not Found"};
}
app.controller("MenuCtrl", ['$scope', 'menuItems', 'categories', MenuCtrl]);
app.controller("ItemCtrl", ['$scope', '$filter', '$routeParams', 'menuItems', ItemCtrl]);