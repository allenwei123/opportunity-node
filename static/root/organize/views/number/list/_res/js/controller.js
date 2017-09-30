var app = angular.module('numberListM', ['toastr']);
app.controller('numberListCtrl',function($scope,numberSer,toastr,$stateParams,$state,$location){
         //列表
    numberSer.InfoAreaList().then(function (response) {
            if(response.data.code == 0){
                $scope.InfoAreaLists = response.data.data;
            }else {
                toastr.error(response.data.msg, '温馨提示');
            }
        })
});

