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
    $scope.watchlist = WatchlistService.query($routeParams.listId);
    $scope.stocks = $scope.watchlist.stocks;
    $scope.newStock = {};

    console.log('initing', $scope.watchlist);

    var addStockModal = $modal({
    	scope: $scope,
    	templateUrl: 'views/templates/addstock-modal.html',
    	show: false
    });

    $scope.showStockModal = function(){
    	addStockModal.$promise.then(addStockModal.show);
    };

    $scope.addStock = function(){
    	// not sure why i have to re-declare this...
    	$scope.watchlist = WatchlistService.query($routeParams.listId);

    	$scope.watchlist.addStock({
    		listId: $routeParams.listId,
    		company: $scope.newStock.company,
    		shares: $scope.newStock.shares
    	});

    	addStockModal.hide();
    	$scope.newStock = {};
    };
  });
