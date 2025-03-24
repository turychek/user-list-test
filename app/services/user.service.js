app.service("userService", function () {
  var users = JSON.parse(localStorage.getItem("myApp.users")) || [];

  this.getUsers = function () {
    return users;
  };

  this.addUser = function (user) {
    users.push(user);
    localStorage.setItem("myApp.users", JSON.stringify(users));
  };

  this.updateUser = function (updatedUser) {
    users = users.map((user) =>
      user.username === updatedUser.username ? updatedUser : user
    );
    localStorage.setItem("myApp.users", JSON.stringify(users));
  };

  this.deleteUser = function (username) {
    users = users.filter((user) => user.username !== username);
    localStorage.setItem("myApp.users", JSON.stringify(users));
  };

  this.getUserByUsername = function (username) {
    return users.find((user) => user.username === username) || {};
  };
});
