var app = angular.module('number', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.views.number", {
        url : "/number",
        views : {
            "content@root.organize.views":{
                templateUrl : "root/organize/views/number/_res/html/index.html",
                controller:"numberCtrl"
            },"menu@root.organize.views.number":{
                templateUrl : "root/organize/views/number/_res/html/menu.html",
                controller:"numberMenuCtrl"
            }
        }
    }).state("root.organize.views.number.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.organize.views.number":{
                templateUrl : "root/organize/views/number/list/_res/html/index.html",
                controller:'numberListCtrl'
            }
        }
    }).state("root.organize.views.number.edit[12]",{
        url:"/edit[12]",
        views:{
            "content@root.organize.views.number":{
                templateUrl : "root/organize/views/number/edit/_res/html/index.html",
                controller:'numberEditCtrl'
            }
        }
    }).state("root.organize.views.number.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.organize.views.number":{
                templateUrl : "root/organize/views/number/add/_res/html/index.html",
                controller:'numberAddCtrl'
            }
        }
    })
});

