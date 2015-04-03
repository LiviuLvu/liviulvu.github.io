parking.directive("alert", function () {
    return {
        restrict: 'E',
        scope: {
            topic: '=',
            description: '=',
            close: '&',
            open: '&'
        },
        templateUrl: "alert.html",
        replace: true
    };
});