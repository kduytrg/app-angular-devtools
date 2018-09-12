angular.module('about.router', []).config(_aboutRoute)

function _aboutRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('giay', {
			url: '/about',
			data : { 
				pageTitle: 'Giày' 
			},
			views: {
				"@": {
					controller: 'AboutController',
					templateUrl: '/views/giay.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
