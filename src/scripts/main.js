var angular = require('angular');
console.log("aaaaa");
console.log(angular);
var app=angular.module("myApp",[]);
console.log(app);
app.controller("main-controller",["$scope",function($scope){
  console.log("hello angular + webpack !");

}]);
