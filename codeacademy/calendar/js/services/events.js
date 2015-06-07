app.service('events', function ($http) {
    return $http.get('events.json')
        .success(function (data) {
            return data;
        }).error(function (err) {
            alert('unexpected error');
            return err;
        });
});
