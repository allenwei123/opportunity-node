var app = angular.module('organize', []);
app.controller('organizeCtrl', function ($scope,$state) {
    if ($state.current.url == '/organize') {//默认加载列表
        $state.go('root.organize.views');
    }
}).controller('navCtrl',function($scope,$state,$location){
    var active =$location.path().split('/')[4];
    $scope.navCla=active?active:'views';
    $scope.navClass= function(name){
       $scope.navCla=name
    };
  /* $scope.date = [1,2,3,4,5,6,7,8,9];
    $scope.data = [{name:"深圳",age:["钦州","北海","南宁"]},{name:"广州"},{name:"上海"},{name:"北京",age:["钦州","北海","南宁"]}];*/
    $scope.isSelected = true;
    $scope.home = function () {
        $scope.menuClass = 'homeMenu';
    };
    $scope.notice = function () {
        $scope.menuClass = 'noticeMenu';
    };
    $scope.know = function () {
        $scope.menuClass = 'knowMenu';
    };
    $scope.archives = function () {
        $scope.menuClass = 'archivesMenu';
    };
    $scope.sudden = function () {
        $scope.menuClass = 'suddenMenu';
    };
    $scope.bonus = function () {
        $scope.menuClass = 'bonusMenu';
    };
    $scope.commendable = function () {
        $scope.menuClass = 'commendableMenu';
    };
    $scope.ambition = function () {
        $scope.menuClass = 'ambitionMenu';
    };
    $scope.contract = function () {
        $scope.menuClass = 'contractMenu';
    };
    $scope.business = function () {
        $scope.menuClass = 'businessMenu';
    };
    $scope.budget = function () {
        $scope.menuClass = 'budgetMenu';
    };
    $scope.fund = function () {
        $scope.menuClass = 'fundMenu';
    };
    $scope.accounting = function () {
        $scope.menuClass = 'accountingMenu';
    };

    $scope.follow = function () {
        $scope.menuClass = 'followMenu';
    };
    $scope.centripetal = function () {
        $scope.menuClass = 'centripetalMenu';
    };
        /*资质管理*/
    $scope.aptitude = function () {
        $scope.navClass = 'aptitudeMenu';
    };
    $scope.synopsis = function () {
        $scope.navClass = 'synopsisMenu';
    };
    $scope.company = function () {
        $scope.navClass = 'companyMenu';
    };
    $scope.organize = function () {
        $scope.navClass = 'organizeMenu';
    };
    $scope.personnel = function () {
        $scope.navClass = 'personnelMenu';
    };
});


