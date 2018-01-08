app.config(function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
$stateProvider
    .state('mainpage_login', {
      url:'/login',
      views: {
      'header': {
        templateUrl: 'Pages/header/header.html'
      },
      'body': {
        templateUrl: 'Pages/Login/login.html',
        controller:'loginctrl'
      }
    }
    })
    .state('mainpage_register', {
        url:'/register',
      views: {
        'header': {
          templateUrl: 'Pages/header/header.html'
        },
      'body': {
        templateUrl: 'Pages/register/register.html',
        controller:'registerCtrl'
      }
    }
    })
    .state('homepage', {
      url:'/homepage',
      views: {
        'header': {
          templateUrl: 'Pages/header/header.html'
        },
      'body': {
        templateUrl: 'Pages/Homepage/homepage.html'
      }
    }
    })
    .state('homepage.AddTask', {
      url:'/AddTask',
      templateUrl: 'Pages/AddTask/addTask.html',
      controller:'addTaskCtrl'
    })
    .state('homepage.ViewAllTasks', {
      url:'/ViewAllTasks',
      templateUrl: 'Pages/ViewTask/ViewTask.html',
      controller:'ViewTaskCtrl'
    })
    .state('homepage.editTask', {
      url:'/EditTask',
      templateUrl: 'Pages/EditTask/EditTask.html',
      controller:'EditTaskCtrl'
    })
})
