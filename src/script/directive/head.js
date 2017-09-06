'use strict';

// cache服务在 service > cache.js中
angular.module('app').directive('appHead', ['cache', function(cache){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/head.html',
    link: function($scope) {
      $scope.name = cache.get('name') || '';
    }
  };
}]);
