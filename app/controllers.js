/* global Firebase */
app.controller('MainController', function($scope, ShirtService, DBREF, $firebaseObject, $firebaseArray, $firebaseAuth, $timeout) {
    // jQuery ui draggable resizable
    $timeout(function() {
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
    $scope.shelf = function(i) {
        $scope.archives.$add(i);
        $scope.orders.$remove(i);
        console.log($scope.archives);
    }
    $scope.delete = function(archive) {
        $scope.archives.$remove(archive);
    }


  


})

app.controller('OrderController', function($scope) {
    $scope.test = "Hello from order controller!"
      // Zing Charts Line
    $scope.myJson = {
        type: 'line',
        series: [
            { values: [54, 23, 34, 23, 43] },
            { values: [10, 15, 16, 20, 40] }
        ]
    };
    
      // Zing Charts 2
    $scope.myJson2 = {
        type: 'pie',
        series: [
            { values: [54, 23, 34, 23, 43] },
            { values: [10, 15, 16, 20, 40] }
        ]
    };
    
       // Zing Charts 3
    $scope.myJson3 = {
        type: 'bar',
        series: [
            { values: [54, 23, 34, 23, 43] },
            { values: [10, 15, 16, 20, 40] }
        ]
    };
})

app.controller('BlankController', function($scope) {
    $scope.test = "Hello from blank controller!"
})

app.controller('Blank2Controller', function($scope) {
    $scope.test = "Hello from blank2 controller!"
})