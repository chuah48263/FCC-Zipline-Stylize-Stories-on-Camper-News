'use strict';

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://www.freecodecamp.com/news/hot?callback=JSON_CALLBACK')
    .success(function(data) {
      $scope.stories = data;
      for (var i in data) {
        var upVotedUsers;
        for (var j in data[i].upVotes) {
          upVotedUsers += data[i].upVotes[j].upVotedByUsername + ', ';
        }
        upVotedUsers = upVotedUsers.substring(0, upVotedUsers.length -
          2);
        $scope.stories[i].upVoted = upVotedUsers;
      }
      for (var k in data) {
        if (data[k].image === '') {
          $scope.stories[k].image =
            'http://www.visituganda.com/uploads/noimage.png';
        }
      }
      for (var l in data) {
        if (data[l].headline.length > 35) {
          $scope.stories[l].headline = data[l].headline.substring(0, 32) +
            '...';
        }
      }
      $('select#select').val('None');
    })
    .error(function(error) {
      console.error(error);
    });
}]);
