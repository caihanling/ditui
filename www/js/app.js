// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

    /*重置密码*/
    .state('tab.forget-password', {
      url: '/forget-password',
      views: {
        'tab-dash': {
          templateUrl: 'templates/login/forget-password.html',
          controller: 'LoginCtrl'
        }
      }
    })

    /*登录页面*/
    .state('tab.register', {
      url: '/register',
      views: {
        'tab-dash': {
          templateUrl: 'templates/login/register.html',
          controller: 'RegisterCtrl'
        }
      }
    })
    /*完善信息页面*/
    .state('tab.perfect-info', {
      url: '/perfect-info',
      views: {
        'tab-dash': {
          templateUrl: 'templates/login/perfect-info.html',
          controller: 'perfectInfoCtrl'
        }
      }
    })

    /*app主页*/
    .state('tab.index', {
      url: '/index',
      views: {
        'tab-dash': {
          templateUrl: 'templates/home/index.html',
          controller: 'IndexCtrl'
        }
      }
    })

    /*任务详情页面*/
    .state('tab.task' , {
      url:'/task',
      views: {
        'tab-dash': {
          templateUrl: 'templates/home/task.html',
          controller: 'IndexCtrl'
        }
      }
    })

    /*填写任务详情页面*/
    .state('tab.task-input' , {
      url:'/task-input',
      views: {
        'tab-dash': {
          templateUrl: 'templates/home/task-input.html',
          controller: 'IndexCtrl'
        }
      }
    })


    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-task': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

/*    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    */


    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.person', {
    url: '/person',
    views: {
      'tab-person': {
        templateUrl: 'templates/tab-person.html',
        controller: 'PersonCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
