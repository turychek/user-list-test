function userFormController(userService, validationService, $scope) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    if ($ctrl.user) {
      $ctrl.formData = angular.copy($ctrl.user);
    } else {
      $ctrl.formData = {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        user_type: "",
        password: "",
        repeat_password: "",
      };
    }
  };

  $ctrl.errors = {};

  function validateForm() {
    $ctrl.errors = {};

    if (!validationService.isNotEmpty($ctrl.formData.username)) {
      $ctrl.errors.username = "Username is required";
    } else if (
      !validationService.isUsernameUnique(
        $ctrl.formData.username,
        $ctrl.editMode
      )
    ) {
      $ctrl.errors.username = "Username is already taken";
    }

    if (!validationService.isNotEmpty($ctrl.formData.first_name)) {
      $ctrl.errors.first_name = "First name is required";
    }

    if (!validationService.isNotEmpty($ctrl.formData.last_name)) {
      $ctrl.errors.last_name = "Last name is required";
    }

    if (!validationService.isValidEmail($ctrl.formData.email)) {
      $ctrl.errors.email = "Invalid email format";
    }

    if (!$ctrl.editMode) {
      if (!validationService.isValidPassword($ctrl.formData.password)) {
        $ctrl.errors.password =
          "Password must be at least 8 characters and contain at least one letter and one number";
      }

      if (
        !validationService.isPasswordMatch(
          $ctrl.formData.password,
          $ctrl.formData.repeat_password
        )
      ) {
        $ctrl.errors.repeat_password = "Passwords do not match";
      }
    }

    if (!$ctrl.formData.user_type) {
      $ctrl.errors.user_type = "User type is required";
    }

    return Object.keys($ctrl.errors).length === 0;
  }

  $ctrl.saveUser = function () {
    if (!validateForm()) {
      return;
    }

    var userData = angular.copy($ctrl.formData);

    if ($ctrl.editMode) {
      if (!userData.password) {
        delete userData.password;
      }
      delete userData.repeat_password;
      userService.updateUser(userData);
    } else {
      userData.id = Date.now();
      delete userData.repeat_password;
      userService.addUser(userData);
    }

    $ctrl.onSave();
    $ctrl.onClose();
  };

  $ctrl.deleteUser = function () {
    if ($ctrl.formData.username) {
      userService.deleteUser($ctrl.formData.username);
      $ctrl.onSave();
      $ctrl.onClose();
    }
  };
}

app.component("userForm", {
  templateUrl: "app/components/user-form/user-form.view.html",
  controller: [
    "userService",
    "validationService",
    "$scope",
    userFormController,
  ],
  bindings: {
    editMode: "<",
    user: "<",
    onClose: "&",
    onSave: "&",
  },
});
