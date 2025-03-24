function userInputController($scope, $element, $attrs) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    if (!$attrs.fieldtype) {
      $ctrl.fieldType = "text";
    } else {
      $ctrl.fieldType = $attrs.fieldtype;
    }
  };

  $ctrl.$onChanges = function (changes) {
    if (changes.errorMessage) {
      $ctrl.error = changes.errorMessage.currentValue;
    }
  };
}

app.component("userInput", {
  templateUrl: "app/components/user-input/user-input.view.html",
  controller: userInputController,
  bindings: {
    ngModel: "=",
    title: "@",
    errorMessage: "<",
    fieldType: "@?",
  },
});
