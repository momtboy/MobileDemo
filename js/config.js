/**
 * Created by CHENCONG on 2015/11/19.
 */
var BaseUrl = window.domain +  '/html/h5demo/js';   //指向js工程目录
var mod = {
    baseUrl : BaseUrl,
    paths : {
        'jquery' : 'jquery/jquery.min',
        'resize' : 'base/resize',
        'swiper.jquery' : 'jquery/swiper.jquery.min',
        'require.text' : 'require/require.text',
        'layer' : 'layer/layer.m',
        'tool' : 'base/tool'
    }
    ,shim:{ //加载jquery插件  未使用AMD方式申明的插件
        'swiper.jquery' : ['jquery'],
        'layer' : ['jquery']
    }
    ,urlArgs: "bust=" +  (new Date()).getTime() //开发模式使用
};
requirejs.config(mod);//加载配置项