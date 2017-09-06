'use strict';
angular.module('app').controller('positionCtrl', ['$log', '$q', '$http', '$state', '$scope', 'cache', function($log, $q, $http, $state, $scope, cache){
  $scope.isLogin = !!cache.get('name');
  // 判断是否已登录
  $scope.message = $scope.isLogin?'投个简历':'去登录';
//获取职位详情
  function getPosition() {
    var def = $q.defer();
    $http.get('data/position.json', {
      params: {
        id: $state.params.id
      }
    }).success(function(resp) {
      $scope.position = resp;
      if(resp.posted) {
        $scope.message = '已投递';
      }
      def.resolve(resp); //传递参数到回调
    }).error(function(err) {
      def.reject(err); //执行失败
    });
    return def.promise;
  }
//获取公司详情
  function getCompany(id) {
    $http.get('data/company.json?id='+id).success(function(resp){
      $scope.company = resp;
    })
  }

//一旦进入此页面，立马执行
  getPosition().then(function(obj){
    getCompany(obj.companyId);
  });

  $scope.go = function() {
    if($scope.message !== '已投递') {
      if($scope.isLogin) {
        $http.post('data/handle.json', {
          id: $scope.position.id
        }).success(function(resp) {
          $log.info(resp);
          $scope.message = '已投递';
        });
      } else {
        $state.go('login');
      }
    }
  }
}]);
