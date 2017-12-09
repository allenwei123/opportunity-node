var app = angular.module('system', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.views.system", {
        url : "/system",
        views : {
            "content@root.organize.views":{
                templateUrl : "root/organize/views/system/_res/html/index.html",
                controller:"systemCtrl"
            },"menu@root.organize.views.system":{
                templateUrl : "root/organize/views/system/_res/html/menu.html",
                controller:"systemMenuCtrl"
            }
        }
    }).state("root.organize.views.system.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.organize.views.system":{
                templateUrl : "root/organize/views/system/list/_res/html/index.html",
                controller:'systemListCtrl'
            }
        }
    }).state("root.organize.views.system.edit[12]",{
        url:"/edit[12]",
        views:{
            "content@root.organize.views.system":{
                templateUrl : "root/organize/views/system/edit/_res/html/index.html",
                controller:'systemEditCtrl'
            }
        }
    }).state("root.organize.views.system.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.organize.views.system":{
                templateUrl : "root/organize/views/system/add/_res/html/index.html",
                controller:'systemAddCtrl'
            }
        }
    })
});

