'use strict';
//To check git changestretert
// changesd
var innoCricket = angular.module('innoCricket', []);

//Routing starts here
  innoCricket.config(function($routeProvider){
    $routeProvider
    .when('/',{templateUrl:'views/update.html', controller:'HomeController'})
    .when ('/profiles',{templateUrl:'views/profiles.html', controller:'ProfilesController'})
    .when ('/gallery',{templateUrl:'views/update.html', controller:'ProfilesController'})
    .when ('/previous',{templateUrl:'views/update.html', controller:'ProfilesController'})

  });
