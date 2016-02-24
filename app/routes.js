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
            controller: ('OrderController'),
            controllerAs: ('oc')
        })
})

   