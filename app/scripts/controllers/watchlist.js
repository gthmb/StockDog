'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:WatchlistCtrl
 * @description
 * # WatchlistCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp')
  .controller('WatchlistCtrl', function ($scope, $routeParams, $modal, WatchlistService, CompanyService) {
    $scope.companies = CompanyService.query();
    $scope.watchlist2 = WatchlistService.query($routeParams.listId);
    $scope.stocks = $scope.watchlist2.stocks;
    $scope.newStock = {};

    var addStockModal = $modal({
    	scope: $scope,
    	templateUrl: 'views/templates/addstock-modal.html',
    	show: false
    });

    $scope.showStockModal = function(){
    	addStockModal.$promise.then(addStockModal.show);
    };

    $scope.addStock = function(){
    	$scope.watchlist2.addStock({
    		listId: $routeParams.listId,
    		company: $scope.newStock.company,
    		shares: $scope.newStock.shares
    	});

    	addStockModal.hide();
    	$scope.newStock = {};
    };
  });
