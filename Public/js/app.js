angular.module('testerApp', ['ui.router', 'ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'ui.grid'])
.config(['$urlRouterProvider', '$stateProvider', '$mdThemingProvider', function ($urlRouterProvider, $stateProvider, $mdThemingProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'templates/homeTmpl.html',
		controller: 'homeCtrl'
	})
	.state('teacherLogin', {
		url: '/teacherLogin',
		templateUrl: 'templates/teacherLoginTmpl.html',
		controller: 'teacherLoginCtrl'
	})
	.state('teacherRequest', {
		url: '/teacherRequest',
		templateUrl: 'templates/teacherRequestTmpl.html',
		controller: 'teacherRequestCtrl'
	})
	.state('studentLogin', {
		url: '/studentLogin',
		templateUrl: 'templates/studentLoginTmpl.html',
		controller: 'studentLoginCtrl'
	})
	.state('studentInfo', {
		url: '/studentInfo',
		templateUrl: 'templates/studentInfoTmpl.html',
		controller: 'studentInfoCtrl'
	})
	.state('classInfo', {
		url: '/classInfo',
		templateUrl: 'templates/classInfoTmpl.html',
		controller: 'classInfoCtrl'

	})
    .state('courseSelect', {
        url: '/courseSelect',
        templateUrl: 'templates/courseSelectTmpl.html',
        controller: 'courseSelectCtrl'
    })
    .state('courseOverview', {
        url: '/course/:courseId',
        templateUrl: 'templates/courseOverview.html',
        controller: 'courseOverviewCtrl'
    });

//		.state('student', {
//				url: '/student/:studentId',
//				templateUrl: 'templates/studentTmpl.html',
//				controller: 'studentCtrl'
//     });
	
	
	$mdThemingProvider.theme('default')
		.accentPalette('blue', {
			'default': '500',
			'hue-1': '300',
			'hue-2': '200',
			'hue-3': '50'
		})
		.primaryPalette('green', {
			'default': '500',
			'hue-1': '300',
			'hue-2': '200',
			'hue-3': '50'
		})
		.warnPalette('red', {
			'default': '500',
			'hue-1': '300',
			'hue-2': '200',
			'hue-3': '50'
		});
}]);
