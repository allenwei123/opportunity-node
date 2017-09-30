var app = angular.module('departmentWorkServer',[]);
app.factory('departmentWorkSer',function ($http) {
    return {
        InfoAreaList : InfoAreaList,
    };
    function InfoAreaList(data) {
        return $http.get('/workRange/maps',{
            params:data
        })
    }
});
