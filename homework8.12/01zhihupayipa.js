/**
 * Created by dllo on 17/8/11.
 */

var webpage = require('webpage');
var page =webpage.create();
var fs = require('fs');

phantom.outputEncoding = "utf-8";

page.onConsoleMessage = function (msg,lineNum,sourceId) {
    console.log('CONSOLE:'+msg);
}

page.open("http://daily.zhihu.com",function (status) {
    if(status==="success"){
        page.includeJs("https://unpkg.com/jquery@3.2.1/dist/jquery.js",function () {

            setTimeout(function () {
                var arrstring = page.evaluate(function () {
                    var arr = [];
                    $("img").each(function (index,element) {
                        var a = $(element).attr('src')
                        arr.push(a);
                    })

                    return arr;

                })

                fs.write('./arr.json',arrstring,'w')
                phantom.exit(0);
            },10000)


        })
    } else {
        console.log('加载失败')
        phantom.exit(0);
    }
})



