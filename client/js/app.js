angular.module('fanFlight', ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider){

    $urlRouterProvider
      .otherwise('home');

    $stateProvider
    .state('home', {
                    url: '',
                    templateUrl: '',
                    // controller: '',
    });
  });
