/**
 * Created by Ryan on 10/6/13.
 */

function ItemCtrl($scope, $filter, $routeParams, menuItems){

    $scope.selectedItem =  $filter("search")(menuItems,  {id: $routeParams.id});


}