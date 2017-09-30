var app = angular.module('cenCtrlM', ['toastr']);
app.controller('listCtrl',function($scope,rangeSer,toastr,$stateParams,$state){
    if($scope.InfoAreaLists) return;
    //列表
    rangeSer.InfoAreaList().then(function (response) {
            if(response.data.code == 0){
                $scope.InfoAreaLists = response.data.data;
                if($stateParams.direction){
                    if($stateParams.direction.indexOf('&')){
                        $stateParams.direction = $stateParams.direction.split('&')[0];
                    }
                    angular.forEach($scope.InfoAreaLists,function(obj){
                        if(obj.direction == $stateParams.direction){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeDirection', $stateParams.direction);
                }
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    $scope.myFn = function (name) {
        $scope.myClass = name;
    };
    //获取id
    if($stateParams.direction){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
            case 'close':
                $scope.conShow = true;
                break;
            case 'reset':
                $scope.retShow = true;
                break;
        }
    }
    $scope.cancel = function () {  //取消删除
        $scope.delShow = false;
        $state.go('root.organize.views.range.list[12]',{direction:null,name:null});
    };
    $scope.conCancel = function(){ //取消重启
        $scope.conShow = false;
        $state.go('root.organize.views.range.list[12]',{direction:null,name:null});
    };
    $scope.shop = function () {  //取消关闭
        $scope.conShow = false;
        $state.go('root.organize.views.range.list[12]',{direction:null,name:null});
    };
    //确认删除
    $scope.delFn = function(){//确认删除
        var data = {
            direction:$stateParams.direction
        };
        rangeSer.deleteRange(data).then(function(response){
            if(response.data.code==0){
             /*   count++;*/
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeDirection', null);
                $scope.delShow = false;
                $state.go('root.organize.views.range.list[12]',{direction:null,name:null});
               /* if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.organize.views.range.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.organize.views.range.list[12]',{id:null,name:null,page:$location.search().page-1});
                }*/
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    //重启
    $scope.resetFn = function(){
        var da = {
            direction :$stateParams.direction
        };
        rangeSer.resetRange(da).then(function(response){

            if(response.data.code==0){
                toastr.info( "信息已重启", '温馨提示');
                $scope.$emit('changeDirection', null);
                $scope.retShow = false;
                $state.go('root.organize.views.range.list[12]',{direction:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
    //确认关闭
    $scope.closeFn = function(){
        var data = {
            direction:$stateParams.direction
        };
        rangeSer.closeRange(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已关闭", '温馨提示');
                $scope.$emit('changeDirection', null);
                $scope.conShow = false;
                $state.go('root.organize.views.range.list[12]',{direction:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
    //点击改变列表颜色
    $scope.selectList = function(event){
        angular.forEach($scope.InfoAreaLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.direction = event.direction;
        //向父Ctrl传递事件
        $scope.$emit('changeDirection',$scope.direction);
    };
});

