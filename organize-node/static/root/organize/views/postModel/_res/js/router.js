var app = angular.module('postModel', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.views.postModel", {
        url : "/postModel",
        views : {
            "content@root.organize.views":{
                templateUrl : "root/organize/views/postModel/_res/html/index.html",
                controller:"postModelCtrl"
            },"menu@root.organize.views.postModel":{
                templateUrl : "root/organize/views/postModel/_res/html/menu.html",
                controller:"postModelMenuCtrl"
            }
        }
    }).state("root.organize.views.postModel.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.organize.views.postModel":{
                templateUrl : "root/organize/views/postModel/list/_res/html/index.html",
                controller:'postModelListCtrl'
            }
        }
    }).state("root.organize.views.postModel.edit[12]",{
        url:"/edit[12]",
        views:{
            "content@root.organize.views.postModel":{
                templateUrl : "root/organize/views/postModel/edit/_res/html/index.html",
                controller:'postModelEditCtrl'
            }
        }
    }).state("root.organize.views.postModel.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.organize.views.postModel":{
                templateUrl : "root/organize/views/postModel/add/_res/html/index.html",
                controller:'postModelAddCtrl'
            }
        }
    })
});

