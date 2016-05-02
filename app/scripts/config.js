/**
 * Demo application for the event Friday of Knowledge.
 * Marcos Perira - ITEC 2016
 */

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index/main");

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "views/main.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.members', {
            url: "/members",
            templateUrl: "views/members.html",
            data: { pageTitle: 'Members List' }
        })
        .state('index.queue', {
            url: "/queue",
            templateUrl: "views/queue.html",
            data: { pageTitle: 'Queye List' }
        })
}

angular
    .module('coffeeManager')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
