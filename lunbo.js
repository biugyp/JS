/**
 * Created by Administrator on 2017/8/30.
 */
//页面加载完毕后执行
window.onload=function(){
    //首先获取元素
    var container=document.getElementById("container");//获取容器
    var list=document.getElementById("list");//获取图片列表
    var buttons=document.getElementById("buttons").getElementsByTagName("span");//获取5个button组合
    var prev=document.getElementById("prev");//获取左右箭头
    var next=document.getElementById("next");

    //控制图片上的button
    var index=1;
    function showButton(){
        for(var i=0;i<buttons.length;i++){
            if(buttons[i].className=="on"){
                buttons[i].className="";
                break;
            }

        }
        buttons[index-1].className="on";//把定义的类on赋给button数组元素的类名，默认是第一个元素，后面通过调用会改变
    }



    //左右箭头要实现的功能基本一致，可以把给封装一个公共的函数让它们分别以不同的参数去调用
    function animate(offset){
        //注意区分好这里什么时候需要用到数值，什么时候需要字符串
        var newleft=parseInt(list.style.left)+offset;
        list.style.left=newleft+"px";
        if(newleft>-600){
            list.style.left=-3000+"px";//回到最后一张图的位置
        }
        if(newleft<-3000){
            list.style.left=-600+"px";//回到第一张图的位置
        }
    }

    //点击事件绑定，点击右箭头会切换到下一张
    next.onclick=function(){
        if(index==5){
            index=1;
        }
        else{
            index+=1;
        }
       //每次点击左右箭头时，要改变index的值，使其button对应到正确的图片上
        showButton();
       animate(-600);
        //先把获取到转化为数字，因为list.style.left获取到的是字符串,-600改变图片位置，实现滚动效果,运算完最后再加上单位px
    };
    //点击左箭头，位置要加600，与上面的方向相反
    prev.onclick=function(){
        if(index==1){
            index=5;
        }
        else{
            index-=1;
        }
        index-=1;
        showButton();
        animate(600);

    }

};