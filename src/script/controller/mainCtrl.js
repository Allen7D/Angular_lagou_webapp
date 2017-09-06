'use strict';
//新建mainCtrl模块，该模块依赖$http、$scope模块
//该模块拥有依赖的模块的指令,方法
angular.module('app').controller('mainCtrl', ['$http', '$scope', function($http, $scope){
  $http.get('/data/positionList.json').success(function(resp){
    $scope.list = resp;
  });
}]);
