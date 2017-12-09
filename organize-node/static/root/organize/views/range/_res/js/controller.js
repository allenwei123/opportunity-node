var app = angular.module('range', [{
    files:[
        "root/organize/views/range/_res/js/service.js"
    ]
}]);
app.controller('rangeCtrl',function ($scope,$state) {
    if ($state.current.url == '/range') {//默认加载列表
        $state.go('root.organize.views.range.list[12]');
    }
    $scope.$on("listDirection", function(event,dir){
        $scope.direction = dir;
    });
}).controller('rangeMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName+"Menu";
    $scope.navClass= function(name){
        $scope.menuClass = name;
    };
    if (window.location.href.split('direction=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.direction = window.location.href.split('direction=')[1];
        if($location.search().name){
            $scope.menuClass = $location.search().name + 'Menu'
        }
    }
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]'&& window.location.href.indexOf('direction=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, msg){
        $scope.idList = msg;
    });
    $scope.$on("getCustomer", function(event, num){
        $scope.customerNum = num;
    });
    $scope.$on("listDirection", function(event,dir){
        $scope.direction = dir;
    });

    $scope.delete = function(){
        if($scope.direction){
            $state.go('root.organize.views.range.list[12]',{direction:$scope.direction,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu';
        }
    };
    $scope.close = function(){
        if($scope.direction){
            $state.go('root.organize.views.range.list[12]',{direction:$scope.direction,name:'close'});
            $scope.menuClass = 'closeMenu';
        }
    };
    $scope.reset = function(){
        if($scope.direction){
            $state.go('root.organize.views.range.list[12]',{direction:$scope.direction,name:'reset'});
            $scope.menuClass = 'resetMenu';
        }
    };
    $scope.edit = function(){
        if($scope.direction){
            $state.go('root.organize.views.range.edit[12]',{direction:$scope.direction});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.direction = null;
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.direction = null;
    };
});
