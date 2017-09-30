var app = angular.module('systemListM', ['toastr']);
app.controller('systemListCtrl',function($scope,systemSer,toastr,$stateParams,$state,$location){
         //列表
    systemSer.InfoAreaList().then(function (response) {
            if(response.data.code == 0){
                $scope.InfoAreaLists = response.data.data;
            }else {
                toastr.error(response.data.msg, '温馨提示');
            }
        })
});

