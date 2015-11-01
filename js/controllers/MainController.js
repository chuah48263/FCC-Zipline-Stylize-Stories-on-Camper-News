'use strict';

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
  var stories;
  $http.get('http://www.freecodecamp.com/news/hot?callback=JSON_CALLBACK')
  .success(function(data){
    stories = data;
  });
}]);
