'use strict';
angular.module('app').directive('appPositionClass', [function(){
  return {
    restrict: 'A',
    replace: true,
    scope: {
      com: '='
    },
    templateUrl: 'view/template/positionClass.html',
    link: function($scope) {
      $scope.showPositionList = function(idx) {
        $scope.positionList = $scope.com.positionClass[idx].positionList;
        $scope.isActive = idx;
      }
      $scope.$watch('com', function(newVal){
        //com不一定能及时传递过来，需要watch
        if(newVal)
         //如果newVal数值存在，则立马初始化
          {$scope.showPositionList(0);}
      });
    }
  };
}]);
