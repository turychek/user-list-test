var app = angular.module("myApp", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when("", "/users");
  $urlRouterProvider.when("/", "/users");

  $urlRouterProvider.otherwise("/404");

  $stateProvider
    .state("users", {
      url: "/users",
      templateUrl: "app/pages/users/users.view.html",
      controller: "UsersController",
    })
    .state("403", {
      url: "/403",
      templateUrl: "app/pages/errors/403.html",
    })
    .state("404", {
      url: "/404",
      templateUrl: "app/pages/errors/404.html",
    });
});
