'use strict';
//To check git changestretert
// changesd
var innoCricket = angular.module('innoCricket', ['ngGrid']);

//Routing starts here
  innoCricket.config(function($routeProvider){
    $routeProvider
    .when('/',{templateUrl:'views/update.html', controller:'HomeController'})
    .when ('/profiles',{templateUrl:'views/profiles.html', controller:'ProfilesController'})
    .when ('/gallery',{templateUrl:'views/update.html', controller:'ProfilesController'})
    .when ('/previous',{templateUrl:'views/previous.html', controller:'PreviousController'})
    .when('/player/:playerId', {templateUrl:'views/player-Info.html', controller:'PlayerDetailsController'})

  });
