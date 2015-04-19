parking.controller("parkingCtrl", function ($scope) {
    $scope.appTitle = "This element has access to controller";
    $scope.showAlert = true;
    $scope.myTopic = "Undercover agent";
    $scope.myMessage = "This message will hide itself after you click close";
    $scope.closeAlert = function () {
        $scope.showAlert = false;
    };
    $scope.openAlert = function () {
        $scope.showAlert = true;
    };
});
