'use strict';

angular.module('culturaColectivaApp', [
  'culturaColectivaApp.auth',
  'culturaColectivaApp.admin',
  'culturaColectivaApp.constants',
  'culturaColectivaApp.services', 
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'froala'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
