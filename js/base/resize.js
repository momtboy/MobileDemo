/**
 * Created by CHENCONG on 2015/10/26.
 * 监听窗口大小 改变HTML根元素大小
 */
//define(function(){
//    (function(doc, win){
//        var docEl = doc.documentElement,
//            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//            recalc = function () {
//                var clientWidth = docEl.clientWidth;
//                if (!clientWidth || clientWidth > 641) return;
//                docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
//            };
//        if (!doc.addEventListener) return;
//        win.addEventListener(resizeEvt, recalc, false);
//        doc.addEventListener('DOMContentLoaded', recalc, false);
//    })(document, window);
//    var _init = function(){
//        var docEl = document.documentElement,clientWidth = docEl.clientWidth;
//        if (!clientWidth || clientWidth > 641) return;
//        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
//    };
//    _init();
//});
define(function(){!function(a,b){var c=a.documentElement,d="orientationchange"in window?"orientationchange":"resize",e=function(){var a=c.clientWidth;!a||a>641||(c.style.fontSize=20*(a/320)+"px")};a.addEventListener&&(b.addEventListener(d,e,!1),a.addEventListener("DOMContentLoaded",e,!1))}(document,window);var a=function(){var a=document.documentElement,b=a.clientWidth;!b||b>641||(a.style.fontSize=20*(b/320)+"px")};a()});