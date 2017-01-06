'use strict'

angular.module('startApp.controllers')
.factory('RadioStationIdSampleAppService', function ( $http, $q, $rootScope, $log ) {
  return {
	allCollections: function () {
	  var dfd = $q.defer()
	  $http({method: 'GET', url: '/gnsdk/1.1/collections'})
	  .success(function (result) {
		$log.debug(result, '/gnsdk/1.1/collections')
		var collections = result.data && result.data.collections && result.data.collections.collection
		dfd.resolve(collections)
	  })
	  .error(function (data, status, headers, config) {
		dfd.reject(status)
	  })
	  return dfd.promise
	}
  }
})

