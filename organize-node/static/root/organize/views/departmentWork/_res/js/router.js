var app = angular.module('departmentWork', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.views.departmentWork", {
        url : "/departmentWork",
        views : {
            "content@root.organize.views":{
                templateUrl : "root/organize/views/departmentWork/_res/html/index.html",
                controller:"departmentWorkCtrl"
            },"menu@root.organize.views.departmentWork":{
                templateUrl : "root/organize/views/departmentWork/_res/html/menu.html",
                controller:"departmentWorkMenuCtrl"
            }
        }
    }).state("root.organize.views.departmentWork.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.organize.views.departmentWork":{
                templateUrl : "root/organize/views/departmentWork/list/_res/html/index.html",
                controller:'departmentWorkListCtrl'
            }
        }
    }).state("root.organize.views.departmentWork.edit[12]",{
        url:"/edit[12]",
        views:{
            "content@root.organize.views.departmentWork":{
                templateUrl : "root/organize/views/departmentWork/edit/_res/html/index.html",
                controller:'departmentWorkEditCtrl'
            }
        }
    }).state("root.organize.views.departmentWork.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.organize.views.departmentWork":{
                templateUrl : "root/organize/views/departmentWork/add/_res/html/index.html",
                controller:'departmentWorkAddCtrl'
            }
        }
    })
});

