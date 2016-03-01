/* global Firebase */
app.controller('MainController', function ($scope, ShirtService, DBREF, $firebaseObject, $firebaseArray, $firebaseAuth, $timeout) {
    // jQuery ui draggable resizable
    $timeout(function(){
        $('.image-div').resizable({ aspectRatio: true });
    }, 3000)
    
    // var db = new Firebase(DBREF);
    var ref = new Firebase(DBREF)
    // var syncObject = new $firebaseObject(ref);
    // syncObject.$bindTo($scope, 'data');
    
    var activeRef = ref.child('Active Orders');
    $scope.orders = $firebaseArray(activeRef);
    
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
    //Declares archive fire array
    var archRef = ref.child('Archives');
    $scope.archives = $firebaseArray(archRef);
    // Sends Active order to archive array
    $scope.shelf = function (i) {
        $scope.archives.$add(i);
        $scope.orders.$remove(i);
        console.log($scope.archives);
    }
    // $scope.delete = function(i){
    // .remove? angular fire
   
    
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