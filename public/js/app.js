angular.module('testerApp', ['ui.router', 'ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'ui.grid', 'toastr'])
.config(['$urlRouterProvider', '$stateProvider', '$mdThemingProvider', function ($urlRouterProvider, $stateProvider, $mdThemingProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home', {
			url: '/home',
			template: require('../components/landing/landing.view.html'),
			controller: 'homeCtrl'
		})
		.state('teacherLogin', {
			url: '/teacherLogin',
			template: require('../components/landing/teacher-login/teacherLogin.view.html'),
			controller: null
		})
		.state('teacherRequest', {
			url: '/teacherRequest',
			template: require('../components/teacher-landing/teacherRequestTmpl.html'),
			controller: null
		})
		.state('studentLogin', {
			url: '/studentLogin',
			template: require('../components/landing/student-login/studentLogin.view.html'),
			controller: null
		})
		.state('studentInfo', {
			url: '/studentInfo',
			template: require('../components/teacher-landing/studentInfoTmpl.html'),
			controller: 'studentInfoCtrl'
		})
		.state('classInfo', {
			url: '/classInfo',
			template: require('../components/teacher-landing/classInfoTmpl.html'),
			controller: 'classInfoCtrl'

		})
	  .state('courseSelect', {
	      url: '/courseSelect',
	      template: require('../components/student-landing/course-select/courseSelect.view.html'),
	      controller: 'courseSelectCtrl'
	  })
	  .state('testContent', {
	      url: '/testContent',
	      template: require('../components/student-tests/studentTest.view.html'),
	      controller: null
	  })
	  .state('testQuestions', {
	      url: '/testQuestions',
	      template: require('../components/student-tests/test-questions/testQuestions.view.html'),
	      controller: 'testQuestionsCtrl'
	  })
	  .state('testResults', {
	      url: '/testResults',
	      template: require('../components/student-tests/test-results/testResults.view.html'),
	      controller: null
	  });

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
