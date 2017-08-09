/**
 * Created by dllo on 17/8/9.
 */
var webpage = require('webpage');
var page = webpage.create();
//引入 phantomjs的文件系统;
var fs = require('fs');

phantom.outputEncoding = "utf-8";

//由于浏览器没有控制台输出;
//创建一个浏览器输出函数;
page.onConsoleMessage = function(msg, lineNum, sourceId) {
    console.log('CONSOLE: ' + msg);
};

page.open('http://pianke.me/', function (status) {
    if (status === "success") {
        console.log("加载成功");
        console.log(page.title);
        //include
        //浏览器可以识别其他js库,可以引入一些代码:例如:jQuery
        page.includeJs("https://unpkg.com/jquery@3.2.1/dist/jquery.js", function () {
            //实际情况:浏览加载网页,有部分内容延迟加载;如:ajax请求; 因此延迟10s读取数据;
            setTimeout(function () {
               //对浏览器中的网页进行操作;
                //比如: dom操作,事件;
               var arrstring =  page.evaluate(function () {
                     var arr = [];
                   //通过jq获取对应的img的src并添加到数组中;
                    $(".container>.focus-picture>div a>img").each(function (index,element) {
                         var a = $(element).attr('src');
                         arr.push(a);
                     });
                   //将数组返回
                     return arr;

                })
                //写入文件;
                fs.write('./arr.json',arrstring,'w');

                //关闭phantomjs;
                phantom.exit(0);
            }, 10000)

        })



    } else {
        console.log("加载失败");
        phantom.exit(0);
    }

})







