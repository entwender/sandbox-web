'use strict';

angular.module('myApp.photos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photos', {
    templateUrl: 'photos/photos.html',
    controller: 'PhotosCtrl'
  });
}])

.controller('PhotosCtrl', [function() {

}]);