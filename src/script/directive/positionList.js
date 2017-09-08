'use strict';
angular.module('app').directive('appPositionList', ['$http', function($http){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/positionList.html',
    //降低 指令 和 控制器 之间的耦合度
    //数据存放在控制器中，由指令来控制，便于复用
    scope: {
      data: '=', //共享data（继承）
      filterObj: '=',
      isFavorite: '='
    },
    link: function($scope) {
      $scope.select = function(item) {
        $http.post('data/favorite.json', {
          id: item.id,
          select: !item.select
        }).success(function(resp){
          item.select = !item.select;
        })
      };
    }
  };
}]);
