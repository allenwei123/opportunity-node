var app = angular.module('postBasic', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.views.postBasic", {
        url : "/postBasic",
        views : {
            "content@root.organize.views":{
                templateUrl : "root/organize/views/postBasic/_res/html/index.html",
                controller:"postBasicCtrl"
            },"menu@root.organize.views.postBasic":{
                templateUrl : "root/organize/views/postBasic/_res/html/menu.html",
                controller:"postBasicMenuCtrl"
            }
        }
    }).state("root.organize.views.postBasic.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.organize.views.postBasic":{
                templateUrl : "root/organize/views/postBasic/list/_res/html/index.html",
                controller:'postBasicListCtrl'
            }
        }
    }).state("root.organize.views.postBasic.edit[12]",{
        url:"/edit[12]",
        views:{
            "content@root.organize.views.postBasic":{
                templateUrl : "root/organize/views/postBasic/edit/_res/html/index.html",
                controller:'postBasicEditCtrl'
            }
        }
    }).state("root.organize.views.postBasic.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.organize.views.postBasic":{
                templateUrl : "root/organize/views/postBasic/add/_res/html/index.html",
                controller:'postBasicAddCtrl'
            }
        }
    })
});

