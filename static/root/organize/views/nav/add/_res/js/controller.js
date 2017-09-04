var app = angular.module('addCtrlM', ['toastr']);
app.controller('addCtrl', function($scope,navsSer,$state,toastr){
   /* //添加
    $scope.infoAddFun = function(){
        var vm = $scope;
        vm.appAdd.stayDate = angular.element('.stayDate').val();
        navsSer.addInfo(vm.appAdd).then(function(response){
            if(response.data.code == 0){
                $state.go('root.checkin.infoManage.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };*/

});




