'use strict';

/**
 * @ngdoc overview
 * @name stockDogApp
 * @description
 * # stockDogApp
 *
 * Main module of the application.
 */

angular
  .module('stockDogApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap'
  ])
  .constant('HTTP_PREFIX', (window.location.hostname.indexOf('github.io') > 0) ? '/StockDog' : '')
  .config(function ($routeProvider, HTTP_PREFIX) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/watchlist/:listId', {
        templateUrl: 'views/watchlist.html',
        controller: 'WatchlistCtrl',
        controllerAs: 'watchlist'
      })
      .when('/charttest', {
        templateUrl: 'views/charttest.html',
        controller: 'CharttestCtrl',
        controllerAs: 'charttest'
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  });
