'use strict';

/**
 * @ngdoc directive
 * @name stockDogApp.directive:stkSignFade
 * @description
 * # stkSignFade
 */
angular.module('stockDogApp')
	.directive('stkSignFade', function ($animate) {
		return {
			restrict: 'A',
			link: function postLink(scope, element, attrs) {
				var oldVal = null;
				attrs.$observe('stkSignFade', function(newVal){

					if(oldVal && oldVal === newVal){
						return;
					}

					var oldPrice = parseFloat(oldVal);
					var newPrice = parseFloat(newVal);
					oldVal = newVal;

					if(oldPrice && newPrice){
						var animationClass = 'change-' + ((oldPrice > newPrice) ? 'down' : 'up');
						$animate.addClass(element, animationClass).then(function(){
							$animate.removeClass(element, animationClass);
						});
					}
				});
			}
		};
	});