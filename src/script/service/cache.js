'use strict';
/**
 * 注入「cache服务」
 * 实际注入的是「cache对象」,可以包含「属性和方法」
 *
 * 使用服务的原因：全局同步。所以cache、数据一次性读取 and so on 可以用服务实现。
 */
angular.module('app').service('cache', ['$cookies', function($cookies){
    this.put = function(key, value){
      $cookies.put(key, value);
    };
    this.get = function(key) {
      return $cookies.get(key);
    };
    this.remove = function(key) {
      $cookies.remove(key);
    };
}]);
