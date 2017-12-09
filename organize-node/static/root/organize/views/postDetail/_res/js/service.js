var app = angular.module('postDetailServer',[]);
app.factory('postDetailSer',function ($http) {
    return {
        InfoAreaList : InfoAreaList,
    };
    function InfoAreaList(data) {
        return $http.get('/workRange/maps',{
            params:data
        })
    }
});
