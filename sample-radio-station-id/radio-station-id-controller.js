angular.module('startApp.controllers')
  .controller('RadioStationIdAppController', ['$scope', '$http', 'SampleAppsService', '$log',
    function ($scope, $http, SampleAppsService, $log) {

      $scope.useLatLong = function(latlong) {

        console.log(latlong, 'latlong')
      }//end useLatLong



    }])//end RadioStationIdAppController
