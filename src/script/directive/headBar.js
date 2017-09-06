'use strict';
//该指令被多次服用
angular.module('app').directive('appHeadBar', [function(){
  return { 
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/headBar.html',//直接在bulid目录下
    scope: {
      text: '@' //直接从position.html直接接收字符串
    },
    link: function($scope) {
      $scope.back = function() {
        window.history.back();//返回上一页面操作
      };
    }
  };
}]);
