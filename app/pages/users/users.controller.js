app.controller("UsersController", function ($scope, userService) {
  $scope.users = userService.getUsers();
  $scope.showForm = false;
  $scope.editMode = false;

  $scope.addUser = function () {
    $scope.showForm = true;
    $scope.editMode = false;
    $scope.user = {};
  };

  $scope.editUser = function (user) {
    $scope.showForm = true;
    $scope.editMode = true;
    $scope.user = angular.copy(user);
  };

  $scope.saveUser = function () {
    if ($scope.editMode) {
      userService.updateUser($scope.user);
    } else {
      userService.addUser($scope.user);
    }
    $scope.users = userService.getUsers();
    $scope.showForm = false;
  };

  $scope.deleteUser = function (username) {
    userService.deleteUser(username);
    $scope.users = userService.getUsers();
  };

  $scope.onClose = function () {
    $scope.showForm = false;
  };

  $scope.onSave = function () {
    $scope.users = userService.getUsers();
    $scope.showForm = false;
  };
});
