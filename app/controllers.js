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

app.controller('OrderController', function($scope, DBREF, $firebaseArray) {
    $scope.test = "Hello from order controller!";
    var ref = new Firebase(DBREF);
    var activeRef = ref.child('Active Orders');
    $scope.orders = $firebaseArray(activeRef);
    console.log($scope.orders);
    // console.log($scope.orders.ActiveOrders);

    // Zing Charts Line
    $scope.myJson = {
        type: 'line',
        series: [
            { values: [54, 23, 34, 23, 43, 45, 12, 1, 22, 32, 12, 77] },
            { values: [10, 15, 16, 20, 40, 3, 4, 5, 6, 7, 8, 98] }
        ],

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
            { values: [54, 23, 34, 23, 43, 45, 12, 1, 22, 32, 12, 77] },
            { values: [10, 15, 16, 20, 40, 3, 4, 5, 6, 7, 8, 98] }
        ]
    };

    // Zing 4 test config
    var myConfig = {
        "graphset": [
            {
                "type": "mixed",
                "scale-x": {
                    "values": ["Jan", "Feb", "Mar", "Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],
                    "guide": {
                        "line-width": "1px",
                        "line-style": "solid"
                    },
                    "label": {
                        "text": "Month",
                        "font-size": "20px"
                    },
                    "item": {
                        "font-size": "10px",
                        "visible": true
                    }
                },
                "scale-y": {
                    "values": "0:50:10",
                    "line-width": "1px",
                    "line-style": "solid",
                    "tick": {
                        "visible": true,
                        "placement": "outer",
                        "size": "12px"
                    },
                    "item": {
                        "font-size": "10px",
                        "visible": true
                    },
                    "guide": {
                        "line-width": "1px",
                        "line-style": "solid"
                    }
                },
                "plot": {
                    "alpha": 1,
                    "hover-state": {
                        "visible": false
                    }
                },
                "series": [
                    {
                        "type": "bar",
                        "values": [47, 32, 37, 48, 44, 34, 45, 34, 45, 45, 12, 23],
                        "text": "Safari",
                        "background-color": "#7eac10"
                    }
                ]
            }
        ]
    };
    // end test

    zingchart.render({
        id: 'myChart4',
        data: myConfig,
        height: "100%",
        width: "100%"
    });
})

app.controller('BlankController', function($scope) {
    $scope.test = "Hello from blank controller!"
})

app.controller('Blank2Controller', function($scope) {
    $scope.test = "Hello from blank2 controller!"
})