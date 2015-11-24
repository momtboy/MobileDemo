/**
 * Created by CHENCONG on 2015/10/7.
 */
define(['jquery'], function ($) {
    var JsPb = {
        windowResize : function(callback){
            var timer = null;
            $(window).resize(function(){
                timer && clearTimeout(timer);
                timer = setTimeout(function(){
                    typeof callback === 'function' && callback.call(this);
                },79);
            })
        },
        tab : function(elementType,tabNav,tabBox,curClass,callback){
            elementType = elementType || 'mouseover';
            curClass = curClass || 'cur';
            if(!tabNav) return false;if(!tabBox) return false;
            $(document).on(elementType,tabNav,function(){
                if(!$(this).hasClass(curClass)){
                    var index = $(this).index(tabNav);
                    $(this).addClass(curClass).siblings(tabNav).removeClass(curClass);
                    $(tabBox).eq(index).removeClass('ks-hidden').siblings(tabBox).addClass('ks-hidden');
                    typeof callback === 'function' && callback.call(this);
                }
            });
        }
    };
    return JsPb;
});