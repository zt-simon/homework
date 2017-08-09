/**
 * Created by dllo on 17/8/9.
 */
var webpage = require('webpage');
var page = webpage.create();
var fs = require('fs');

phantom.outputEncoding = "utf-8";

page.onConsoleMessage = function(msg, lineNum, sourceId) {
    console.log('CONSOLE: ' + msg);
};

page.open("https://www.douban.com",function (status) {

        if(status === "success"){
            // console.log("成功");
            // console.log(page.title);
            page.includeJs("https://unpkg.com/jquery@3.2.1/dist/jquery.js",function () {

                setTimeout(function () {

                    var arrstring = page.evaluate(function () {
                        var arr = [];

                        $("#anony-video>.wrapper .main ul li .video-cover>a").each(function (index,element) {
                            var a = $(element).css('background-image').replace('url(','').replace(')','');
                            arr.push(a);
                        });
                        return arr;
                    })
                    fs.write('./arr.json',arrstring,'w');
                    // console.log(arrstring);
                    phantom.exit(0);
                },20000)


            })

        }else {
            console.log("加载失败");
            phantom.exit(0);
        }


})