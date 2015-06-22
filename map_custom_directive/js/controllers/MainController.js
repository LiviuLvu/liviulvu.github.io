app.controller('MainController', function ($scope) {
    $scope.mapCenter = {
        lat: 45.753503427673,
        lng: 21.2262216210365,
        zoom: 18
    };
    $scope.mapMarkers = [
        {
            lat: 45.753503427673,
            lng: 21.2257,
            message: "This is the heart of Timisoara"
        }, {
            lat: 45.7541,
            lng: 21.2257,
            message: "Beautiful memories"
        }
    ];
});
