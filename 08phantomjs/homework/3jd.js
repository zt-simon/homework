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

page.open("https://www.jd.com/?cu=true&utm_source=baidu-pinzhuan&utm_medium=cpc&utm_campaign=t_288551095_baidupinzhuan&utm_term=0f3d30c8dba7459bb52f2eb5eba8ac7d_0_d77e46e7e37d4a88b79f72de1bbb4a38",function (status) {

    if(status === "success"){
        // console.log("成功");
        // console.log(page.title);
        page.includeJs("https://unpkg.com/jquery@3.2.1/dist/jquery.js",function () {

            setTimeout(function () {

                var arrstring = page.evaluate(function () {
                    var arr = [];

                    $(".J_f .grid_c1 .box_bd .J_sk_list_wrapper ul>li .sk_item_pic>a img ").each(function (index,element) {
                        var a = $(element).attr('src').replace("//","https://");
                        arr.push(a);
                    });
                    return arr;
                })
                fs.write('./arr1.json',arrstring,'w');
                // console.log(arrstring);
                phantom.exit(0);
            },10000)

        })

    }else {
        console.log("加载失败");
        phantom.exit(0);
    }


})



