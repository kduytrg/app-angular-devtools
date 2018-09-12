angular.module('home.router', []).config(_homeRoute)

function _homeRoute($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
	$stateProvider
		.state('non', {
			url: '/',
			data : { 
				pageTitle: 'Nón' 
			},
			views: {
				"@": {
					controller: 'HomeController',
					templateUrl: '/views/non.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
	$urlRouterProvider.otherwise('/');
	$urlMatcherFactoryProvider.caseInsensitive(true);
}
