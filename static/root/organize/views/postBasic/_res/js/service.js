var app = angular.module('postBasicServer',[]);
app.factory('postBasicSer',function ($http) {
    return {
        InfoAreaList : InfoAreaList,
    };
    function InfoAreaList(data) {
        return $http.get('/workRange/maps',{
            params:data
        })
    }
});
