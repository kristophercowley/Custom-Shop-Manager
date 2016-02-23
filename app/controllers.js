app.controller('MainController', function($scope, ShirtService){
    $scope.test = "Hello from main controller!"
    $scope.shirts = ShirtService.getShirts();
})

app.controller('OrderController', function($scope){
    $scope.test = "Hello from order controller!"
})

app.controller('BlankController', function($scope){
    $scope.test = "Hello from blank controller!"
})

app.controller('Blank2Controller', function($scope){
    $scope.test = "Hello from blank2 controller!"
})