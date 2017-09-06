'use strict';
/**
 * value服务
 * dict为服务的名字；{}为json对象
 * 使用run()方法（初始化全局的数据，只处理「全局作用域」），修改dict的内容
 */
angular.module('app').value('dict', {}).run(['dict', '$http', function(dict, $http){
  $http.get('data/city.json').success(function(resp){
    dict.city = resp;
  });
  $http.get('data/salary.json').success(function(resp){
    dict.salary = resp;
  });
  $http.get('data/scale.json').success(function(resp){
    dict.scale = resp;
  });
}]);
