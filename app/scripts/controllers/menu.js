'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl', function () {
    this.items = [
      {
        id: 'strawberry-pudding',
        name: 'Strawberry Pudding',
        img: 'strawberry-pudding.jpg',
        rating: 5.0
      },
      {
        id: 'strawberry-pudding2',
        name: 'Strawberry Pudding 2',
        img: 'strawberry-pudding2.jpg',
        rating: 3.0
      }
    ];

    this.increment = function(item) {
      item.rating = ((item.rating * 10) + 1) /10;
    };

    this.decrement = function(item) {
      item.rating = ((item.rating * 10) - 1) /10;
    };

  });



