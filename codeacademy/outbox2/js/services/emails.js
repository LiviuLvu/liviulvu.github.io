app.factory('emails', function ($http) {
    return $http.get('emails.json')
            .success(function (data) {
                return data;
            }).error(function (err) {
                alert('unexpected error');
                return err;
            });
});
