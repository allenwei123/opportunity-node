var app = angular.module('postModel', [{
    files:[
        "root/organize/views/postModel/_res/js/service.js"
    ]
}]);
app.controller('postModelCtrl',function ($scope,$state) {

    if ($state.current.url == '/postModel') {//默认加载列表
        $state.go('root.organize.views.postModel.list[12]');
    }

}).controller('postModelMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
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
