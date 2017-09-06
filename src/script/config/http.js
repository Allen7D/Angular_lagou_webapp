'use strict';
angular.module('app').config(['$provide', function($provide){
  $provide.decorator('$http', ['$delegate', '$q', function($delegate, $q){
    $delegate.post = function(url, data, config) {
      //url：提交的路径
      //data：提交的$scope.user
      var def = $q.defer();
      $delegate.get(url).success(function(resp) {//将post改为get
        def.resolve(resp);
      }).error(function(err) {
        def.reject(err);
      });

      return {
        success: function(cb){
          def.promise.then(cb);
        },
        error: function(cb) {
          def.promise.then(null, cb);
        }
      }

    }

    return $delegate;
  }]);
}]);
