var app = angular.module('departmentPostListM', ['toastr']);
app.controller('departmentPostListCtrl',function($scope,departmentPostSer,toastr,$stateParams,$state,$location){
         //列表
    departmentPostSer.InfoAreaList().then(function (response) {
            if(response.data.code == 0){
                $scope.InfoAreaLists = response.data.data;
            }else {
                toastr.error(response.data.msg, '温馨提示');
            }
        })
});

