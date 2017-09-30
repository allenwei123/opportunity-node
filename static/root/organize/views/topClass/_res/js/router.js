var app = angular.module('topClass', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.views.topClass", {
        url : "/topClass",
        views : {
            "content@root.organize.views":{
                templateUrl : "root/organize/views/topClass/_res/html/index.html",
                controller:"topClassCtrl"
            },"menu@root.organize.views.topClass":{
                templateUrl : "root/organize/views/topClass/_res/html/menu.html",
                controller:"topClassMenuCtrl"
            }
        }
    }).state("root.organize.views.topClass.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.organize.views.topClass":{
                templateUrl : "root/organize/views/topClass/list/_res/html/index.html",
                controller:'topClassListCtrl'
            }
        }
    }).state("root.organize.views.topClass.edit[12]",{
        url:"/edit[12]",
        views:{
            "content@root.organize.views.topClass":{
                templateUrl : "root/organize/views/topClass/edit/_res/html/index.html",
                controller:'topClassEditCtrl'
            }
        }
    }).state("root.organize.views.topClass.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.organize.views.topClass":{
                templateUrl : "root/organize/views/topClass/add/_res/html/index.html",
                controller:'topClassAddCtrl'
            }
        }
    })
});

