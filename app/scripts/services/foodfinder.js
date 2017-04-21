'use strict';

/**
 * @ngdoc service
 * @name udaciMealsApp.foodFinder
 * @description
 * # foodFinder
 * Service in the udaciMealsApp.
 */
angular.module('udaciMealsApp')
  .service('foodFinder', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getMenu = function() {
      return $.get('/menu/menu.json');
      // return $.getJSON('http://localhost:3000/forms/58eaf722f3d31e0a6996abf0/');
    };
  });
