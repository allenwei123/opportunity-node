var app = angular.module('editCtrlM', ['toastr']);
app.controller('editCtrl', function($scope, navsSer,$stateParams,$state,toastr){
 /*   var editData ={id: $stateParams.id};
    //获取ID
    navsSer.findInfoId(editData).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.infoEditFun = function(){
        navsSer.editGetInfo($scope.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.checkin.infoManage.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };*/
});





