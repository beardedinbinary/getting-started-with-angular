
var myNameSpace = angular.module('myApp', []);

myNameSpace.controller('MyController', function MyController($scope){
	$scope.author = {
		'name': 'Steve Balistreri',
		'title': 'Philanthropic Tech Tychoon',
		'company': 'BeardedInBinary.com'
	}
});

