var app = angular.module('cenCtrlM', ['ng-pagination','toastr']);
app.controller('listCtrl',function($scope,navsSer,toastr,$stateParams,$state,$location){
    //列表
    function activatePage(page) {
        var listData = {
            page: page || 1
        };
        navsSer.InfoAreaList(listData).then(function (response) {
            if (response.data.code == 0) {
                $scope.InfoAreaLists = response.data.data;
                if ($stateParams.id) {
                    if ($stateParams.id.indexOf('&')) {
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.InfoAreaLists, function (obj) {
                        if (obj.id == $stateParams.id) {
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }
});

