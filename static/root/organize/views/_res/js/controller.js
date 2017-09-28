var app = angular.module('views', [{
    files:[
        "root/organize/views/_res/js/service.js"
    ]
}]);
app.controller('viewsCtrl',function ($scope,$state) {
    if ($state.current.url == '/views') {//默认加载列表
        $state.go('root.organize.views.nav');
    }
}).controller('viewMenuCtrl',function($scope,$state,$rootScope,$location){
    var active =$location.path().split('/')[3];
    $scope.navCla=active?active:'views';
    $scope.navClass= function(name){
        $scope.navCla = name;
    };
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
    if($location.path().split('/').slice(-1)=='list'){
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
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.customer.basicinfo.list.delete[12]',        {id:$scope.idList});
        }
    };
    $scope.congeal = function(){
        if($scope.idList){
            $state.go('root.customer.basicinfo.list.congeal[12]',{id:$scope.idList});
        }
    };
    $scope.edit = function(){
        if($scope.customerNum){
            $state.go('root.customer.basicinfo.edit[12]',{cusNum:$scope.customerNum});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    $scope.change = function(){
        $scope.mag = 'navAble';
      /* console.log(active);
         console.log($scope.navCla);*/
    };
});

