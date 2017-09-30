var app = angular.module('postBasicListM', ['toastr']);
app.controller('postBasicListCtrl',function($scope,postBasicSer,toastr,$stateParams,$state,$location){
         //列表
    postBasicSer.InfoAreaList().then(function (response) {
            if(response.data.code == 0){
                $scope.InfoAreaLists = response.data.data;
            }else {
                toastr.error(response.data.msg, '温馨提示');
            }
        })
});

