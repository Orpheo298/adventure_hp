import MainController from './app/home/main.controller';
import StoreController from './app/home/store.controller';

export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider,
  $urlRouterProvider: angular.ui.IUrlRouterProvider,
  $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      abstract: true,
      url: '/',
      controller: MainController,
      controllerAs: 'controller',
      templateUrl: './app/home/main.html'
    })
    .state('app.home', {
      url: '',
      templateUrl: './app/home/home.html'
    })
    .state('app.store', {
      url: '',
      templateUrl: './app/home/store.html',
      controller: StoreController,
      controllerAs: 'controller',
    })
    .state('about', {
      url: '/about',
      templateUrl: './app/about/about.html'
    })
    ;
}
