'use strict';

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://www.freecodecamp.com/news/hot?callback=JSON_CALLBACK')
  .success(function(data){
    console.log(data);
  });
}]);
