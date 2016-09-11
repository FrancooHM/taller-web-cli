angular.module('TallerWebApp', []).
controller('MainController', function($scope, $http) {
  console.log('document ready...');
  $scope.getData = getData;

  function getData() {
    $http.get('http://138.68.3.211:3000/example').then(function(responseJson) {
      $scope.data = responseJson.data.data;
    });
  };

});
