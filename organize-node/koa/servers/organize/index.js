var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function () {
    /*******员工机会市场化平台*********/
    this.InfoAreaList = function (argvs) { //列表
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/workRange/v1/flat/list${urlEncode(argvs,true)}`,
        };
        return request(options);
    };
    this.addRangeList = function (argvs) { //添加
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/workRange/v1/flat/add`,
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    this.getRangeData = function (argvs) {  //编辑获取数据
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/workRange/v1/flat/find/`+encodeURIComponent(argvs.direction),
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };

    this.rangeEdit = function (argvs) { //编辑
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/workRange/v1/flat/update/`+encodeURIComponent(argvs.directionEdit),
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        console.log(options.uri);
        return request(options);
    };
    this.deleteRange = function (argvs) {       //删除
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/workRange/v1/flat/delete/`+encodeURIComponent(argvs.direction),
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.closeRange = function (argvs) {       //关闭
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/workRange/v1/flat/close/`+encodeURIComponent(argvs.direction),
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.resetRange = function (argvs) {       //重启
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/workRange/v1/flat/open/`+encodeURIComponent(argvs.direction),
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };


    return this;
};
