/**
 * Created by Ryan on 10/6/13.
 */

function MenuCtrl($scope, menuItems, categories){
    $scope.menuItems = menuItems;

    $scope.categories = categories;
}

function ItemCtrl($scope, $filter, $routeParams, menuItems){
    var found = $filter("filter")(menuItems,  {id: $routeParams.id}, true);
    $scope.selectedItem =  (found)? found[0]: {"name": "Not Found"};
}

function FixinCtrl($scope, $filter, $routeParams, menuItems, fixins, upgrades){
    var foundUpgrades = $filter("filter")(upgrades, {menuItemId: $routeParams.id}, true);
    $scope.fixinGroups = {};
    angular.forEach(fixins, function(fixin){
        var upgrade = $filter("filter")(foundUpgrades, {fixinId: fixin.id}, true);
        if(upgrade.length > 0){
            if ($scope.fixinGroups.length == 0 || !$scope.fixinGroups[fixin.group]) {
                $scope.fixinGroups[fixin.group] = [];
            }
            fixin.standard = upgrade[0].standard;
            $scope.fixinGroups[fixin.group].push(fixin);
        }
    });
}

function OrderCtrl($scope, $routeParams){

}
app.controller("MenuCtrl", ['$scope', 'menuItems', 'categories', MenuCtrl]);
app.controller("ItemCtrl", ['$scope', '$filter', '$routeParams', 'menuItems', ItemCtrl]);
app.controller("FixinCtrl", ['$scope', '$filter', '$routeParams', 'menuItems', 'fixins', 'upgrades', FixinCtrl]);
app.controller("OrderCtrl", ['$scope', '$routeParams', OrderCtrl]);