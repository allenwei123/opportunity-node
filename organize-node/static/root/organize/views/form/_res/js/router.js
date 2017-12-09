var app = angular.module('form', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.views.form", {
        url : "/form",
        views : {
            "content@root.organize.views":{
                templateUrl : "root/organize/views/form/_res/html/index.html",
                controller:"formCtrl"
            },"menu@root.organize.views.form":{
                templateUrl : "root/organize/views/form/_res/html/menu.html",
                controller:"formMenuCtrl"
            }
        }
    }).state("root.organize.views.form.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.organize.views.form":{
                templateUrl : "root/organize/views/form/list/_res/html/index.html",
                controller:'formListCtrl'
            }
        }
    }).state("root.organize.views.form.edit[12]",{
        url:"/edit[12]",
        views:{
            "content@root.organize.views.form":{
                templateUrl : "root/organize/views/form/edit/_res/html/index.html",
                controller:'formEditCtrl'
            }
        }
    }).state("root.organize.views.form.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.organize.views.form":{
                templateUrl : "root/organize/views/form/add/_res/html/index.html",
                controller:'formAddCtrl'
            }
        }
    })
});

