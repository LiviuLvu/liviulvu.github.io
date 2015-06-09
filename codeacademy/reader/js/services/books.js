app.service('books', function ($http) {
    return $http.get('books.json')
        .success(function (data) {
            return data;
        }).error(function (err) {
            alert('unexpected error');
            return err;
        });
});
