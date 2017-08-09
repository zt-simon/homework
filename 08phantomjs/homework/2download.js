/**
 * Created by dllo on 17/8/9.
 */
var fs = require('fs');
var request = require('request');
var download = require('./download');

fs.readFile('./arr.json','utf-8',function (error,data) {
    var dataArr = data.split(",");
    dataArr.forEach(function (item,index) {
        download(item,"images",index+'.jpg')
    })

})
