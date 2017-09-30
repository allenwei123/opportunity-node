var app = angular.module('number', [{
    files:[
        "root/organize/views/number/_res/js/service.js"
    ]
}]);
app.controller('numberCtrl',function ($scope,$state) {

    if ($state.current.url == '/number') {//默认加载列表
        $state.go('root.organize.views.number.list[12]');
    }

}).controller('numberMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $scope.menuClass = urlName?'listMenu':urlName;
    $scope.navClass= function(name){
        $scope.menuClass = name;
    };
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
            $state.go('root.customer.basicinfo.list.delete[12]',{id:$scope.idList});
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
});
