/**
 * Created by dllo on 17/8/9.
 */
//引入webpage并创建;

var page = require('webpage').create();
//设置phantom编码格式;
phantom.outputEncoding= 'utf-8';
//通过phantom打开网页;
page.open('http://www.douban.com',function (status) {
    //成功时
    if(status=='success'){
        console.log("成功")
        console.log(page.title);

        var content = page.evaluate(function () {
            var element = document.querySelector('body');

            return element.textContent;

        });
        console.log(content);

        //失败时
    }else {
        console.log("失败");
    }
    phantom.exit(0);// 将phantom关闭;
})





