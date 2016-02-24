app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: ('/home'),
            templateUrl: ('/templates/home.html'),
            controller: ('MainController'),
            controllerAs: ('mc')
        })
        
        .state('fullfilled', {
            url: ('/fullfilled'),
            templateUrl: ('/templates/fullfilled.html'),
            controller: ('FullfilledController'),
            controllerAs: ('oc')
        })
        
        .state('control-panel', {
            url: ('/control-panel'),
            templateUrl: ('/templates/control-panel.html'),
            controller: ('OrderController'),
            controllerAs: ('oc')
        })
})

   