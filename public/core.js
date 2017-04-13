// public/core.js
var scotchTodo = angular.module('cartApp', [])

//controller
function mainController($scope, $http) {
    //hide edit form
    $scope.enableEditForm = false;
    $scope.user = {
      name: "",
      age: "",
      City: ""
    };

    $scope.update = {
      name: "",
      age: "",
      city: ""
    };

    $scope.cancelUpdate = function() {
        $scope.enableEditForm = false;
    };

    // when landing on the page, get all todos and show them
    $scope.getList = function() {
      $http.get('/api/getUsers')
          .success(function(data) {
              $scope.users = data;
          })
          .error(function(data) {
          });
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
            .success(function(data) {
                $scope.getList();
                $scope.user = {};
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    //autofill input on edit
    $scope.enableUpdateForm = function(data) {
      $scope.enableEditForm = true;
      $scope.update.name =  data.Name;
      $scope.update.age = data.Age;
      $scope.update.city = data.City;
      $scope.update.id = data.ID;
    };

    //update user
    $scope.updateUser = function(data) {
        var dataInfo = {
          name : data.name,
          age: data.age,
          city: data.city
        }
        $http.put('/api/updateUser/' + $scope.update.id, dataInfo)
            .success(function(data) {
              $scope.getList();
              $scope.enableEditForm = false;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete user after checking it
    $scope.deleteUser = function(id) {
        if(id) {
          $http.delete('/api/deleteUser/' + id)
              .success(function(data) {
                  $scope.getList();
              })
              .error(function(data) {
                  console.log('Error: ' + data);
              });
        } else {
          //To-do : move this msg to constant service
          console.log('id is missing');
        }
    };

}
