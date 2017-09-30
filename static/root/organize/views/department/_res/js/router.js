var app = angular.module('department', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.views.department", {
        url : "/department",
        views : {
            "content@root.organize.views":{
                templateUrl : "root/organize/views/department/_res/html/index.html",
                controller:"departmentCtrl"
            },"menu@root.organize.views.department":{
                templateUrl : "root/organize/views/department/_res/html/menu.html",
                controller:"departmentMenuCtrl"
            }
        }
    }).state("root.organize.views.department.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.organize.views.department":{
                templateUrl : "root/organize/views/department/list/_res/html/index.html",
                controller:'departmentListCtrl'
            }
        }
    }).state("root.organize.views.department.edit[12]",{
        url:"/edit[12]",
        views:{
            "content@root.organize.views.department":{
                templateUrl : "root/organize/views/department/edit/_res/html/index.html",
                controller:'departmentEditCtrl'
            }
        }
    }).state("root.organize.views.department.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.organize.views.department":{
                templateUrl : "root/organize/views/department/add/_res/html/index.html",
                controller:'departmentAddCtrl'
            }
        }
    })
});

