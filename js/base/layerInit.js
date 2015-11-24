/**
 * Created by CHENCONG on 2015/11/18.
 */
define(['jquery', 'layer'], function ($, layer) {

    var $layer = {
        /**
         * 美化alert提示框
         * @param content
         * @param callback
         */
        alert : function(content,callback){
            layer.open({
                type : 0,
                closeBtn : false,
                content : content,
                btn : ['确定'],
                yes : function(index){
                    typeof callback === 'function' && callback.call(this,index);
                }
            });
        },
        /**
         * 美化confirm提示框
         * @param content
         * @param callback
         */
        confirm : function(content,callback){
            layer.open({
                type : 0,
                shadeClose : false,
                content : content,
                btn : ['确定','取消'],
                yes : function(index){
                    typeof callback === 'function' ? callback.call(this,index) : layer.close(index);
                }
            });
        },
        /**
         * loading加载
         * @param callback
         */
        load : function(callback){
            var index = layer.open({
                type : 2,
                shadeClose : false,
                time : 5000
            });
            typeof callback === 'function' && callback.call(this,index);//将layer传入callback 方便外部调用  layer.close(index)关闭加载层
        },
        /**
         * 自定义弹出层
         * @param title
         * @param obj  DOM 对象节点
         * @param yesName
         */
        showPop : function(title,obj,yesName){
            var btns = ['确定','取消'];
            if(yesName) btns[0] = yesName; //只能定义确定按钮文字
            var layero = layer.open({
                title : title,
                type : 1, //自定义弹出框内容
                btn : btns,
                shadeClose : false, //是否点击遮罩时关闭层
                content : obj,  //传入DOM对象
                yes : function(index){

                },
                no : function(){

                },
                success : function(elem){  //层成功弹出层的回调函数，返回一个参数为当前层元素对象

                }
            });
        },
        /**
         * 关闭弹出层
         * @param index
         */
        close : function(index){ //传入需要关闭的index  整型
            var i = parseInt(index);
            if(typeof i !== 'number'|| i < 0) return;
            layer.close(i);
        }
    };

    return $layer;
});
