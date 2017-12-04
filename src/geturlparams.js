function LoadUrlGetValues(key) 
{
    var regs = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
}

//var Lid = LoadUrlGetValues('id');
//if (Lid != null)    alert(Lid);


var jiathis_config = {
	slide:{
		url: "http://www.cnooc.com.cn/art/2017/11/28/art_91_2792941.html",
	}
};

/*
//第一种方式：使用appId,signature
var shareData = {
    appId: 'wx2c82806de7e9cc08',
    signature: '0f9de62fce790f9a083d5c99e95740ceb90c27ed',
    title: '标题',
    desc: '简介',
    link: 'http://www.cnooc.com.cn/art/2017/11/28/art_91_2792941.html',
    imgUrl: 'https://avatars2.githubusercontent.com/u/24887957?s=40&v=4'
};
$.wechatShare(shareData);
*/