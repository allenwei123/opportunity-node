var app = angular.module('editCtrlM', ['toastr']);
app.controller('editCtrl', function($scope, rangeSer,$stateParams,$state,toastr){
    var data = {direction:$stateParams.direction};
    $scope.ath = null;
    rangeSer.getRangeData(data).then(function (response) {
        if(response.data.code == 0){
            $scope.edit = response.data.data;
            $scope.arr = {};
            angular.forEach($scope.edit,function (obj) {
                $scope.editM = obj;
                $scope.directionEdit = obj.direction;
                $scope.projectFlatTOs = obj.projectFlatBOs;
                angular.forEach($scope.projectFlatTOs,function (obj1) {
                    angular.forEach(obj1.classifyFlatBOs,function (obj2) {
                       angular.forEach(obj2.workRangeListBOs,function (obj3) {
                           return obj3;
                       })
                   })
                })
            });
        }
    });
    //科目
    $scope.projectFlatTOs = [{classifyFlatBOs:[{workRangeListBOs:[{workRanges:[''],node:['']}]}]}];
    $scope.addObj = function () {
        var obj = {classifyFlatBOs:[{workRangeListBOs:[{workRanges:[''],node:['']}]}]};
        $scope.projectFlatTOs.push(obj);
    };
    $scope.delObj = function (flag) {
        if( $scope.projectFlatTOs.length == 1) return;
        $scope.projectFlatTOs.splice(flag,1);
    };
    //专业分类
    $scope.addObj1 = function (index) {
        var obj1 = {workRangeListBOs:[{workRanges:[''],node:['']}]};
        $scope.projectFlatTOs[index].classifyFlatBOs.push(obj1);
    };
    $scope.delObj1 = function (index,flag) {
        if($scope.projectFlatTOs[index].classifyFlatBOs.length == 1) return;
        $scope.projectFlatTOs[index].classifyFlatBOs.splice(flag,1)
    };
    //工作范围
    $scope.addObj2 = function (i,index,flag) {
        var obj2 = '';
        $scope.projectFlatTOs[i].classifyFlatBOs[index].workRangeListBOs[flag].workRanges.push(obj2);
    };
    $scope.delObj2 = function (i,index,flag,faz) {
        if($scope.projectFlatTOs[i].classifyFlatBOs[index].workRangeListBOs[flag].workRanges.length == 1) return;
        $scope.projectFlatTOs[i].classifyFlatBOs[index].workRangeListBOs[flag].workRanges.splice(faz,1);
    };
        //工作界面版
    $scope.addObj3 = function (i,index,flag) {
        var obj3 = '';
        $scope.projectFlatTOs[i].classifyFlatBOs[index].workRangeListBOs[flag].node.push(obj3);
    };
    $scope.delObj3 = function (i,index,flag,faz) {
        if($scope.projectFlatTOs[i].classifyFlatBOs[index].workRangeListBOs[flag].node.length == 1) return;
        $scope.projectFlatTOs[i].classifyFlatBOs[index].workRangeListBOs[flag].node.splice(faz,1);
    };
    $scope.editFun = function () {
        var data = {
            directionEdit:$scope.directionEdit,
            status1:$scope.editM.status1,
            direction:$scope.editM.direction,
        };
        console.log($scope.projectFlatTOs)
        for(var i =0;i<$scope.projectFlatTOs.length;i++){
            var o = $scope.projectFlatTOs;
            var k = $scope.projectFlatTOs[i].classifyFlatBOs;
            data['projectFlatTOs['+i+']'+'.project'] =o[i].project;
            for(var j =0;j<$scope.projectFlatTOs[i].classifyFlatBOs.length;j++){
                data['projectFlatTOs['+i+']'+'.classifyFlatTOs['+j+']'+'.classify'] =k[j].classify;
                for(var e =0;e<$scope.projectFlatTOs[i].classifyFlatBOs[j].workRangeListBOs.length;e++){
                    var q = $scope.projectFlatTOs[i].classifyFlatBOs[j].workRangeListBOs;
                    data['projectFlatTOs['+i+']'+'.classifyFlatTOs['+j+']'+'.workRangeListTOs['+e+']'+'.workRange'] =q[e].workRanges.join(',');
                    data['projectFlatTOs['+i+']'+'.classifyFlatTOs['+j+']'+'.workRangeListTOs['+e+']'+'.node'] = q[e].node.join(',');
                }
            }
        }
        rangeSer.editRange(data).then(function (response) {
            if(response.data.code == 0){
                $state.go('root.organize.views.range.list[12]');
                toastr.success('编辑成功','温馨提示')
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        })
    }
});






