var app = angular.module('formListM', ['toastr']);
app.controller('formListCtrl',function($scope,formSer,toastr,$stateParams,$state,$location){
         //列表
    formSer.InfoAreaList().then(function (response) {
            if(response.data.code == 0){
                $scope.InfoAreaLists = response.data.data;
            }else {
                toastr.error(response.data.msg, '温馨提示');
            }
        })
});

