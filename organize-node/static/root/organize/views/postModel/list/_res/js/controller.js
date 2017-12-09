var app = angular.module('postModelListM', ['toastr']);
app.controller('postModelListCtrl',function($scope,postModelSer,toastr,$stateParams,$state,$location){
         //列表
    postModelSer.InfoAreaList().then(function (response) {
            if(response.data.code == 0){
                $scope.InfoAreaLists = response.data.data;
            }else {
                toastr.error(response.data.msg, '温馨提示');
            }
        })
});

