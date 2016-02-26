/* global Firebase */
app.controller('MainController', function ($scope, ShirtService, DBREF, $firebaseObject, $firebaseArray, $firebaseAuth) {
    // var db = new Firebase(DBREF);
    var ref = new Firebase(DBREF)
    // var syncObject = new $firebaseObject(ref);
    // syncObject.$bindTo($scope, 'data');
    $scope.orders = $firebaseArray(ref);
    // $scope.orders.$add({test: "From Home Base", hope: "This works?"})
    // $scope.test = "Hello from main controller!";   
    // $scope.orders = ShirtService.getOrders();
    $scope.customers = [
        {
            userName: "John Doh",
            userEmail: "john@doh.com",
            userOrders: []
        }
    ]
   
    
    // $scope.testFB = function(){
    //     console.log("testFB working?", $scope.customers[0])
    // db.child('orders').child('branch').get({name:"anonymous", thing: "That Thing"});
    // }
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