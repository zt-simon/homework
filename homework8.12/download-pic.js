/**
 * Created by dllo on 17/8/12.
 */
var fs = require('fs');
var download = require('./download');
fs.readFile('./arr1.json','utf-8',function (error,data) {
    // console.log(data.split(","));
    data.split(",").forEach(function (item,index) {
        console.log(item);
        download(item,'img1',index + ".jpg")
    })

})