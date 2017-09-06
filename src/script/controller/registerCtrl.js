'use strict';
angular.module('app').controller('registerCtrl', ['$interval', '$http', '$scope', '$state', function($interval, $http, $scope, $state){
  $scope.submit = function() {
    //  没有api接口，用Ng的装饰器将post改为get
    //  post得到对象{success:... ,error:... }
    $http.post('data/regist.json',$scope.user).success(function(resp){
      console.log(resp);
      $state.go('login');
    });
  };
  var count = 60;
  $scope.send = function() {
    //发送短信
    $http.get('data/code.json').success(function(resp){
      if(1===resp.state) {
        count = 60;
        $scope.time = '60s';
        var interval = $interval(function() {
          //倒计时
          if(count<=0) {
            $interval.cancel(interval);
            $scope.time = '';
          } else {
            count--;
            $scope.time = count + 's';
          }
        }, 1000);
      }
    });
  }
}]);
