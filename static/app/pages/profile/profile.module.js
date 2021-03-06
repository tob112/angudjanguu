/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('app.profile', {
          url: '/profile',
          title: 'Profile',
          templateUrl: 'static/app/pages/profile/profile.html',
          controller: 'ProfilePageCtrl'
        });
  }

})();
