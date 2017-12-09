var app = angular.module('departmentPost', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.views.departmentPost", {
        url : "/departmentPost",
        views : {
            "content@root.organize.views":{
                templateUrl : "root/organize/views/departmentPost/_res/html/index.html",
                controller:"departmentPostCtrl"
            },"menu@root.organize.views.departmentPost":{
                templateUrl : "root/organize/views/departmentPost/_res/html/menu.html",
                controller:"departmentPostMenuCtrl"
            }
        }
    }).state("root.organize.views.departmentPost.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.organize.views.departmentPost":{
                templateUrl : "root/organize/views/departmentPost/list/_res/html/index.html",
                controller:'departmentPostListCtrl'
            }
        }
    }).state("root.organize.views.departmentPost.edit[12]",{
        url:"/edit[12]",
        views:{
            "content@root.organize.views.departmentPost":{
                templateUrl : "root/organize/views/departmentPost/edit/_res/html/index.html",
                controller:'departmentPostEditCtrl'
            }
        }
    }).state("root.organize.views.departmentPost.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.organize.views.departmentPost":{
                templateUrl : "root/organize/views/departmentPost/add/_res/html/index.html",
                controller:'departmentPostAddCtrl'
            }
        }
    })
});

