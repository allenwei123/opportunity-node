var app = angular.module('navs', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.views.nav", {
        url : "/nav",
        views : {
            "content@root.organize.views":{
                templateUrl : "root/organize/views/nav/_res/html/index.html",
                controller:"navsCtrl"
            },"menu@root.organize.views.nav":{
                templateUrl : "root/organize/views/nav/_res/html/menu.html",
                controller:"navsMenuCtrl"
            }
        }
    }).state("root.organize.views.nav.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.organize.views.nav":{
                templateUrl : "root/organize/views/nav/list/_res/html/index.html",
                controller:'listCtrl'
            }
        }
    }).state("root.organize.views.nav.edit[12]",{
        url:"/edit[12]",
        views:{
            "content@root.organize.views.nav":{
                templateUrl : "root/organize/views/nav/edit/_res/html/index.html",
                controller:'editCtrl'
            }
        }
    }).state("root.organize.views.nav.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.organize.views.nav":{
                templateUrl : "root/organize/views/nav/add/_res/html/index.html",
                controller:'addCtrl'
            }
        }
    })
});

