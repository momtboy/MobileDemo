/**
 * Created by CHENCONG on 2015/9/25.
 */
require(['jquery', 'tool', 'require.text!../commonHtml/header.html', 'require.text!../commonHtml/footer.html', 'require.text!../commonHtml/index/banner.html', 'avalon', 'resize', 'swiper.jquery'], function ($, $tool, head, footer, banner, avalon) {

    //插入各种零部件
    var $body = $('body'),$banner = $('#swiper-banner');
    $body.prepend(head, footer);
    $banner.append(banner);

    //启动avalon服务
    avalon.ready(function(){
        avalon.define({
            $id : 'nav',
            nav_data : {
                '首页' : 'http://www.baidu.com',
                '新闻' : 'http://news.baidu.com',
                '动态' : '###',
                '产品' : '###',
                '我们' : '###'
            }
        });
        var bannerIndex = 1;
        avalon.define({
            $id : 'banner',
            banner_data : [
                'http://placeholder.qiniudn.com/1280x600/CE0A01',
                'http://placeholder.qiniudn.com/1280x600/159F5C',
                'http://placeholder.qiniudn.com/1280x600/FC9724',
                'http://placeholder.qiniudn.com/1280x600/4FA7F0'
            ],
            startBanner : function(){
                bannerIndex === 1 && bannerIndex++ && bannerStart();
            }
        });
        avalon.scan();
    });
    //调用幻灯片
    function bannerStart(){
        if($('.swiper-container').find('div').length){
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                autoplay: 1500,
                autoplayDisableOnInteraction: false
            });
        }
    }

});

