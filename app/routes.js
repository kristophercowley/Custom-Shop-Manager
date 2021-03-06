app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/templates/home.html',
            controller: 'MainController',
            controllerAs: 'mc'
        })
        
        .state('fullfilled', {
            url: '/fullfilled',
            templateUrl: '/templates/fullfilled.html',
            controller: 'MainController',
            controllerAs: 'mc'
        })
        
        .state('control-panel', {
            url: '/control-panel',
            templateUrl: '/templates/control-panel.html',
            controller: 'OrderController',
            controllerAs: 'oc'
        }) 
        
        .state('orders', {
            url: '/orders',
            templateUrl: '/templates/orders.html',
            controller: 'OrderController',
            controllerAs: 'oc'
        })
        
        .state('order', {
            url: '/orders:orderId',
            templateUrl: '/templates/order.html',
            controller: 'OrderController',
            controllerAs: 'oc',
            // resolve: {
            //     order: function(){
            //         // go get the order for this id or go back to orders
            //     }
            // }
        })
})

   