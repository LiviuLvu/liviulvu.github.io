parking.directive("alert", function () {
    return {
        restrict: 'E',
        scope: {
            topic: '=',
            description: '=',
            close: '&'
        },
        templateUrl: "alert.html",
        replace: true,
        transclude: true
    };
});