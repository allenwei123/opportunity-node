var app = angular.module('postDetail', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.views.postDetail", {
        url : "/postDetail",
        views : {
            "content@root.organize.views":{
                templateUrl : "root/organize/views/postDetail/_res/html/index.html",
                controller:"postDetailCtrl"
            },"menu@root.organize.views.postDetail":{
                templateUrl : "root/organize/views/postDetail/_res/html/menu.html",
                controller:"postDetailMenuCtrl"
            }
        }
    }).state("root.organize.views.postDetail.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.organize.views.postDetail":{
                templateUrl : "root/organize/views/postDetail/list/_res/html/index.html",
                controller:'postDetailListCtrl'
            }
        }
    }).state("root.organize.views.postDetail.edit[12]",{
        url:"/edit[12]",
        views:{
            "content@root.organize.views.postDetail":{
                templateUrl : "root/organize/views/postDetail/edit/_res/html/index.html",
                controller:'postDetailEditCtrl'
            }
        }
    }).state("root.organize.views.postDetail.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.organize.views.postDetail":{
                templateUrl : "root/organize/views/postDetail/add/_res/html/index.html",
                controller:'postDetailAddCtrl'
            }
        }
    })
});

