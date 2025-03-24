app.service("validationService", function (userService) {
  this.isUsernameUnique = function (username, editMode) {
    var users = userService.getUsers();
    return editMode || !users.some((user) => user.username === username);
  };

  this.isValidEmail = function (email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  this.isValidPassword = function (password) {
    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordPattern.test(password);
  };

  this.isPasswordMatch = function (password, repeatPassword) {
    return password === repeatPassword;
  };

  this.isNotEmpty = function (value) {
    return value && value.trim() !== "";
  };
});
