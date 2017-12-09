var app = angular.module('numberServer',[]);
app.factory('numberSer',function ($http) {
    return {
        InfoAreaList : InfoAreaList,
    };
    function InfoAreaList(data) {
        return $http.get('/workRange/maps',{
            params:data
        })
    }
});
