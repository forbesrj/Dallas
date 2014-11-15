/**
 * Created by Ryan on 10/6/13.
 */

global = { order: {}};

function MenuCtrl($scope, menuItems, categories){
    $scope.menuItems = menuItems;

    $scope.categories = categories;
    global.order = {};
}

function ItemCtrl($scope, $filter, $routeParams, menuItems){
    var found = $filter("filter")(menuItems,  {id: $routeParams.id}, true);
    $scope.selectedItem =  (found)? found[0]: {"name": "Not Found"};
    global.order.menuItem = $scope.selectedItem.name;
    global.order.total = $scope.selectedItem.price;
}

function FixinCtrl($scope, $filter, $routeParams, $window, menuItems, fixins, upgrades){
    var foundUpgrades = $filter("filter")(upgrades, {menuItemId: $routeParams.id}, true);
    $scope.fixinGroups = {};
    if(foundUpgrades.length == 0){
        $window.location.href = './#/order';
    }
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
    $scope.name = '';
    global.order.name = $scope.name;
}

function CompleteCtrl($scope, $routeParams, $filter){
    global.order.name = $routeParams.id;
    $scope.order = global.order;
}
/*app.controller("MenuCtrl", ['$scope', 'menuItems', 'categories', MenuCtrl]);
app.controller("ItemCtrl", ['$scope', '$filter', '$routeParams', 'menuItems', ItemCtrl]);
app.controller("FixinCtrl", ['$scope', '$filter', '$routeParams', '$location', 'menuItems', 'fixins', 'upgrades', FixinCtrl]);
app.controller("OrderCtrl", ['$scope', '$routeParams', OrderCtrl]);
app.controller("CompleteCtrl", ['$scope', '$routeParams', '$filter', CompleteCtrl]);*/