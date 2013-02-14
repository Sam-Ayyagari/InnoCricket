innoCricket.controller('ProfilesController',

    function ProfilesController($scope, $routeParams, $http) {      
      //console.debug('Profiles page');
      $scope.players = players = [];

      $http({method: 'GET', url: '/myangular/data/players.json'}).
        success(function(data, status, headers, config) {
         // console.log('Inside success callback');
          data.forEach(function(player){
            //console.log(player.playerName);
            players.push(player.playerName);
          })
          // this callback will be called asynchronously
          // when the response is available
        }).
        error(function(data, status, headers, config) {
          // console.log('Inside error callback');
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      });

      


});
