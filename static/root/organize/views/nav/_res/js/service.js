var app = angular.module('navsServer',[]);
app.factory('navsSer',function ($http) {
    return {
        InfoAreaList : InfoAreaList,
    };
    function InfoAreaList(data) {
        return $http.get('/workRange/maps',{
            params:data
        })
    }
});
