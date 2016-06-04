/* global Firebase */

app.controller('MainController', function ($scope, ShirtService, ChatService, DBREF, $firebaseObject, $firebaseArray, $firebaseAuth, $timeout) {
    ChartService.chartData.$loaded(function(res){
    ChartService.updateChartData()     
    })
    // jQuery ui draggable resizable
    $timeout(function () {
        $('.image-div').resizable({ aspectRatio: true });
    }, 3000)

    // var db = new Firebase(DBREF);
    var ref = new Firebase(DBREF)

    var activeRef = ref.child('Active Orders');
    $scope.orders = $firebaseArray(activeRef);

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
    $scope.remove = function (i) {
        console.log('removing from archive',i)
        $scope.archives.$remove(i);
    }
})

app.controller('OrderController', function (ChartService, $scope, DBREF, $firebaseArray, $firebaseObject) {
    $scope.test = "Hello from order controller!";
    var ref = new Firebase(DBREF);
    var activeRef = ref.child('Active Orders');
    $scope.orders = $firebaseArray(activeRef);

    // console.log($scope.orders);
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
    // $scope.myJson3 = {
    //     type: 'bar',
    //     series: [
    //         { values: [54, 23, 34, 23, 43, 45, 12, 1, 22, 32, 12, 77] },
    //         { values: [10, 15, 16, 20, 40, 3, 4, 5, 6, 7, 8, 98] }
    //     ]
    // };
    // $scope.myJson3 = {
    //     type: 'bar',
    //     series: [
    //         { values: [0] },
    //         // { values: [0] }
    //     ]
    // };



    $scope.$watch(ChartService.myJson3, function (ref) {
        $scope.myJson3 = ChartService.myJson3;
    })
    $scope.myJson3 = ChartService.myJson3;

    // Not fully functional// should update on new order
    $scope.$watch($scope.orders, function (ref) {
        console.log("service watcher running update");
        $scope.myJson3 = ChartService.updateChartData();
    })

    $scope.orders.$loaded(function(res){
        for (var i = 0; i < res.length; i++) {
            var current = res[i]
            // console.log("current service", current)
            ChartService.myJson3.series[0].values.push(current.grandTotal);
        }
        $scope.myJson3 = ChartService.myJson3;
        
    })
    // Updates chart on view change
    $scope.$on('$stateChangeSuccess', function () {
        
    });

    // Zing 4 test config
    var myConfig = {
        "graphset": [
            {
                "type": "mixed",
                "scale-x": {
                    "values": ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
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

app.controller('BlankController', function ($scope) {
    $scope.test = "Hello from blank controller!"
})

app.controller('Blank2Controller', function ($scope) {
    $scope.test = "Hello from blank2 controller!"
})