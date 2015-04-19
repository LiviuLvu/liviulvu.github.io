var homeModule = angular.module("homeModule", [])
homeModule.controller('HomeController',function ($scope, $filter) {
//    $scope.pageHeading = 'behold the majesty of your page title';
    $scope.fruits = [
        {name:'oranges', price:20},
        {name:'peach', price:30},
        {name:'blueberries', price:10},
        ];
    var taxTotals = $filter('sumFilter')($scope.fruits);
    console.log(taxTotals);
    $scope.taxTotals=taxTotals;
});
homeModule.filter('titleCase', function() {
    var titleCaseFilter = function(input) {
        var words = input.split(' ');
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
    };
    return titleCaseFilter;
});
homeModule.filter('sumFilter', function() {
    return function(fruits) {
        var taxTotals = 0;
        for (i=0; i<fruits.length; i++) {
            taxTotals = taxTotals + fruits[i].price;
        };
        return taxTotals;
    };
});