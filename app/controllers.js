app.controller('MainController', function ($scope, ShirtService) {
    $scope.test = "Hello from main controller!"
    $scope.orders = ShirtService.getOrders();
    // $scope.customers = [
    //     {
    //         userName: "John Doh",
    //         userEmail: "john@doh.com",
    //         userOrders: []
    //     }
    // ]
    // $scope.orders = [
    //     {
    //         orderNum: 8675309,
    //         orderCust: "John Doh",
    //         orderColor: "Black",
    //         orderSize: "xxl",
    //         orderImg: "bcw"
    //     }
    // ]
})

app.controller('OrderController', function ($scope) {
    $scope.test = "Hello from order controller!"
})

app.controller('BlankController', function ($scope) {
    $scope.test = "Hello from blank controller!"
})

app.controller('Blank2Controller', function ($scope) {
    $scope.test = "Hello from blank2 controller!"
})