var app = angular.module('topClassListM', ['toastr']);
app.controller('topClassListCtrl',function($scope,topClassSer,toastr,$stateParams,$state,$location){
         //列表
    topClassSer.InfoAreaList().then(function (response) {
            if(response.data.code == 0){
                $scope.InfoAreaLists = response.data.data;
            }else {
                toastr.error(response.data.msg, '温馨提示');
            }
        })
});

