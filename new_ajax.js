/**
 * Created by 11959 on 2017/11/23.
 */
function ajax(url,fuSucc,fuFaild){
            //1.创建Ajax对象
            //非IE6浏览器
            if (window.XMLHttpRequest){
                var oAjax=new XMLHttpRequest();
            }
            else {

                //IE6
                var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
            }
            //2.链接服务器
            //open(方法，文件名,异步传输)
            oAjax.open("get",url,true);

            //3.发送请求
            oAjax.send();

            //4.接收返回
            oAjax.onreadystatechange= function () {
                //oAjax.readyState //浏览器和服务器，进行到哪一步了
                if(oAjax.readyState==4){       //4代表着通讯完成或者接收完成
                    if (oAjax.status==200)//成功
                    {
                        fuSucc(oAjax.responseText);
                    }
                    else {
                        if (fuFaild){
                            fuFaild(oAjax.status);
                        }
                        //alert("失败"+oAjax.status);
                    }
                }
            };
}