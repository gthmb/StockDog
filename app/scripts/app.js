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
      .when( HTTP_PREFIX + '/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when( HTTP_PREFIX + '/watchlist/:listId', {
        templateUrl: 'views/watchlist.html',
        controller: 'WatchlistCtrl',
        controllerAs: 'watchlist'
      })
      .when( HTTP_PREFIX + '/charttest', {
        templateUrl: 'views/charttest.html',
        controller: 'CharttestCtrl',
        controllerAs: 'charttest'
      })
      .otherwise({
        redirectTo: HTTP_PREFIX + '/dashboard'
      });
  });
