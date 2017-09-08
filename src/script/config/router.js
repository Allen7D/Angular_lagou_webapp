'use strict';
// 路由
// config用于配置
angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'view/main.html',
    controller: 'mainCtrl' //命名规则； controller在前端与用户交互
    //多个路由，用链式的方法。.state(...)
  }).state('position', {
    url: '/position/:id',//基于id切换职位
    templateUrl: 'view/position.html',
    controller: 'positionCtrl'
  }).state('company', {
    url: '/company/:id',
    templateUrl: 'view/company.html',
    controller: 'companyCtrl'
  }).state('search', {
    url: '/search',
    templateUrl: 'view/search.html',
    controller: 'searchCtrl'
  }).state('login', {
    url: '/login',
    templateUrl: 'view/login.html',
    controller: 'loginCtrl'
  }).state('register', {
    url: '/register',
    templateUrl: 'view/register.html',
    controller: 'registerCtrl'
  }).state('me', {
    url: '/me',
    templateUrl: 'view/me.html',
    controller: 'meCtrl'
  }).state('post', {
    url: '/post',
    templateUrl: 'view/post.html',
    controller: 'postCtrl'
  }).state('favorite', {
    url: '/favorite',
    templateUrl: 'view/favorite.html',
    controller: 'favoriteCtrl'
  });
  $urlRouterProvider.otherwise('main '); //默认跳转到「main」
}])
