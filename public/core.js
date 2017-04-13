// public/core.js
var scotchTodo = angular.module('cartApp', [])

//controller
.controller('mainController', ['$scope', '$http' , function($scope, $http) {
    //hide edit form
    $scope.enableEditForm = false;
    $scope.user = {
      name: "",
      age: "",
      City: ""
    };

    $scope.cancelUpdate = function() {
        //$scope.enableEditForm = false;
        $scope.user = {
          name: "",
          age: "",
          city: ""
        };
    };

    // when landing on the page, get all todos and show them
    $scope.getList = function() {
      $http.get('/api/getUsers')
        .then(function(response) {
          $scope.users = response.data;
         })
    };

    $scope.emptyInput = function() {
      //to reset validation errors
      $scope.userForm.user_name.$setUntouched();
      $scope.userForm.user_name.$setPristine();
      $scope.userForm.user_age.$setUntouched();
      $scope.userForm.user_age.$setPristine();
      $scope.userForm.user_city.$setUntouched();
      $scope.userForm.user_city.$setPristine();
      $scope.enableEditForm = false;
      $scope.user = {
        name: "",
        age: "",
        city: ""
      };
    };

    //calling on page load
    $scope.getList();

    // when submitting the add form, send the text to the node API
    $scope.createUser = function(data) {
        var userInfo = {
          name : data.name,
          age: data.age,
          city: data.city
        };
        $http.post('/api/addUser', userInfo)
            .then(function(data) {
                $scope.getList();
                $scope.user = {};
            })
    };

    //autofill input on edit
    $scope.enableUpdateForm = function(data) {
      $scope.enableEditForm = true;
      $scope.user.name =  data.Name;
      $scope.user.age = data.Age;
      $scope.user.city = data.City;
      $scope.user.id = data.ID;
    };

    //update user
    $scope.updateUser = function(data) {
        var dataInfo = {
          name : data.name,
          age: data.age,
          city: data.city
        }
        $http.put('/api/updateUser/' + $scope.user.id, dataInfo)
            .then(function(data) {
              $scope.getList();
              $scope.enableEditForm = false;
            })
    };

    // delete user after checking it
    $scope.deleteUser = function(id) {
        if(id) {
          $http.delete('/api/deleteUser/' + id)
              .then(function(data) {
                  $scope.getList();
              })
        } else {
          //To-do : move this msg to constant service
          console.log('id is missing');
        }
    };

}]);
