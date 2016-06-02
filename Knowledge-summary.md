# JavaScriptDOM知识点总结

标签（空格分隔）： javascript

---

## 1、DOM基础概念、操作
```javascript
//集合：.length属性，[0]
 1. 元素.childNodes //（只读属性集合- 不包含子子节点以下）
//标准：包含文本和元素类型的节点，包含非法嵌套节点
//IE6、7：只包含元素类型的节点
if ( oUl.childNodes[i].nodeType == 1 ) {
			oUl.childNodes[i].style.background = 'red';
		}
 2. 元素.nodeType //（只读属性） 元素1，属性2，文本3
 3. 元素.attributes  //（只读属性集合）
 4. 元素.children //无兼容性问题
 5. firstChild,lastChild,nextSibling,previousSibling
//兼容性  firstChild标准包含文本节点  firstElementChild标准
var oFirst = str.firstElementChild || str.firstChild
 6. 元素.parentNode  //父节点
 7. 元素.offsetParent //定位父节点，默认为body
//ie6,7：1.当前元素没有定位默认是body，如果有定位则是html、
//2.如果当前元素的某个父级触发了layout，那么offsetParent就会被指向到这个触发了layout特性的父节点上
 8. 元素.offsetLeft   元素.offsetTop  //定位默认为html
//有定位父级	IE6、7：a.如果自己没有定位，那么offsetLeft[Top]是到body的距离   b.如果自己有定位，那么就是到'定位父级的距离'
 9. 元素宽高：//style.width : 样式宽 || clientWidth : 可视区宽 || offsetWidth : 占位宽
 10. 属性相关：
//元素.getAttribute(名称);      //元素.removeAttribute(名称);
//元素.setAttribute(名称，值);
 11. 创建、添加、删除elements
var oLl = document.createElement('li'); 
oUl.appendChild( oLi ); oUl.removeChild( oLi );
 12. 父级.insertBefore(newEle，插入Ele);
if ( oUl.children[0] ) {        //IE无第二参数报错
	oUl.insertBefore( oLi, oUl.children[0] );
} else {                        //标准先appendChild
	oUl.appendChild( oLi );
}
 13. 父级.replaceChild(新节点，被替换节点) //替换子节点
//appendChild,insertBefore,replaceChild都可以操作动态创建出来的节点，也可以操作已有节点，均为Ctrl+X操作
13.getPos();        //获取元素在页面的绝对位置
function getPos(obj) {
    var pos = {left:0, top:0};
	while (obj) {
		pos.left += obj.offsetLeft;
		pos.top += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return pos;
	}
13.document.createDocumentFragment();       //文档碎片（用处不大）
 14. document.getElementsByClassName();
```
## 2、DOM、BOM方法属性
#### **1、表格操作**
```javascript
tHead,tBodies,tFoot,rows,cells
oTab.tBodies[0].rows[1].cells[1];
//表格创建（数据添加），隔行变色，删除一行
```
#### **2、表单操作**
```javascript
oForm.元素name   //表单元素的获取
onchange      //当值发生改变时触发
1.text :      //光标离开判断后触发
2.radio，checkbox  name[0]   //标准：点击后触发   失焦后触发
  oForm.name[0].checked              //判断当前是否被选中
oForm.name[0].checked = true/false;
3.select      //选择后触发
onsubmit        //oForm.onsubmit = ;
if(.value = '') return false;    //阻止提交
.submit()        //用于自动提交
onreset          return confirm('');    //重置确认
```
#### **3、BOM基础**
```javascript
1.open(url,方式);     //默认打开空页面新窗口
var opener = open();   opener(window).document····
//返回值为新窗口的window对象   
2.close();            //关闭本窗口有兼容性问题
opener.close();     //无问题
3.window.navigator.userAgent    //浏览器信息
4.window.location
window.location.href        //url同上
window.location.search      //url?后的内容
window.location.hash        //url#后的内容（幻灯片，相册）
```
#### **4、文档宽高窗口事件**
```javascript
1.可视区尺寸
document.documentElement.clientWidth
document.documentElement.clientHeight
2.滚动距离
document.body.scrollTop/scrollLeft
document.documentElement.scrollTop/scrollLeft
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;        //兼容性问题：chrome
3.内容高度
document.body.scrollHeight
4.文档高度
document.documentElement.offsetHeight   //兼容性问题：IE为可视高度
document.body.offsetHeight      //无问题，推荐使用          
5.onscroll,onresize             //根据时间触发
```
## 3、Event 事件
#### **1、焦点事件**
`元素.onfocus`----`obj.focus()`
`元素.onblur`----`obj.blur()`
`oText.select()`
#### **2、event事件对象**
```javascript
//event-在事件函数中调用
//ie/chrome:event为一个内置全局对象
//ff:通过事件函数第一个参数传入
function fn1(ev){
    var ev = ev || event;
    ev.clientX/clientY;
}
onmousemove //时间
```
#### **3、事件流**
```javascript
1.事件冒泡：实例：分享到、仿select
阻止冒泡：event.cancelBubble = true;
2.事件绑定：
//低ie:obj.attachEvent(事件名称,函数);
obj.attachEvent('onclick',fn1);
//this指向window       非标准：倒序执行
//标准:obj.addEventListener(事件名称，函数，是否捕获);
obj.addEventListener('click',fn1,true);
是否捕获：默认为false.
false:冒泡；        //出去
true:捕获。         //进来
3.fn1.call()方法：
参数1可改变内部this指向，之后为原参数列表
4.事件函数的取消：
第一种：document.onclick = null;
第二种：document.detachEvent('onclick',fn1);
document.removeEventListener('click',fn1,false/true);
5.事件默认行为的阻止：
return false;           //第一种绑定
ev.preventDefault();    //addEventListener();
6.右键菜单事件：document.oncontextmenu;
```
#### **4、键盘事件**
```javascript
onkeydown onkeyup
event.keyCode:数字类型 键值
ctrlKey,shiftKey,altKey     //boolean 事件发生时按下返回true
event.ctrlKey
```
#### **5、拖拽**
```javascript
//原理：onmousedown -> onmousemove -> onmouseup
//全局捕获：
.setCapture()  .releaseCapture()
//文字被选中问题
标准：阻止默认事件      低ie：全局捕获
```
## 4、鼠标滚轮、COOKIE
#### **1、鼠标滚轮**
```javascript
.onmousewheel()         //ie,chrome
ev.wheelDelta           //上：120   下：-120
.DOMMouseScroll()       //ff
ev.detail               //上：-3    下：3
//判断鼠标滚轮上下  boolean
var b = true;
if(ev.wheelDelta){
    b = ev.wheelDelta > 0 ? true : false;
}else{
    b = ev.detail < 0 ? true : false;
}
//阻止默认事件：
return false;
if(ev.preventDefault) ev.preventDefault();
```
#### **2、cookie**
```javascript
var oDate = new Date();
oDate.setDate(oDate.getDate() + t);     //设置过期时间
document.cookie = '名称 = 值;expires=' + oDate.toGMTString();   //设置cookie      
oDate.toGMTString();    //将日期对象转为string格式
encodeURL('字符');   decodeURL();         //字符编码、解码
```
## 5、Ajax基础
#### **1、基础**
1. 配置服务器程序：AMP
2. Ajax 无刷新数据读取 （异步，同步）
3. 使用Ajax 字符集编码 阻止缓存
4. eval()的使用
5. HTTP请求的方法：get ,post
 1. get方式：用于获取数据   
放入`URL/?name=attr&name=attr`
通过网址/容量小/安全性差/没缓存
 2. post：用于提交数据
通过http Content/容量大/安全性好点/有缓存
#### **2、编写Ajax**
```javascript
function ajax(url,fnSecc,fnFaild) {
    //创建Ajax对象
	if (window.XMLHttpRequest) {
		var oAjax = new XMLHttpRequest();
	}else{
		var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//连接到服务器
	//open(方法,文件名,异步传输)
	oAjax.open('GET',url,true);
	//发送请求
	oAjax.send();
	//接收返回值
	oAjax.onreadystatechange = function () {
		if (oAjax.readyState == 4) {    //读取完成
			if (oAjax.status == 200) {  //成功
				fnSecc(oAjax.responseText);
			}else{
				if (fnFaild) fnFaild(oAjax.status);
			}
		}
	}
}
```
#### **3、其他**
1. 变量与属性
`a:报错`===`window.a:undefined`
2. 请求状态监控
onreadystatechange事件
readyState属性：请求状态
0    （未初始化）还没有调用open()方法
1    （载入）已调用send()方法，正在发送请求
2    （载入完成）send()方法完成，已收到全部响应内容
3    （解析）正在解析响应内容
4    （完成）响应内容解析完成，可以在客户端调用了
status属性：请求结果
3. 其他
```
ajax('URL?t=new Date().getTime()',function(){
    var arr = eval(str);
},fnFaild);
```
## 6、面向对象
#### **1、面向对象基础知识**
1. 使用对象时，只关注对象提供的功能，不关注其内部细节
2. **面向对象编程(OOP)的特点**
抽象：抓住核心问题
封装：不考虑内部实现，只考虑功能使用
继承：从已有对象上，继承出新的对象
3. **对象的组成**
方法——函数：过程、动态的
属性——变量：状态、静态的
4. **原型prototype**
原型是class，修改他可以影响一类元素
给对象添加方法，类似于行间样式
给原型添加方法，类似于class
5. **编写**
 1. 原则：1.1.构造函数：加属性。2. 原型：加方法
 2. 把面向过程的程序，改写成面向对象的形式
     1. 原则：不能有函数套函数、但可以有全局变量
     2. 过程
    onload	→	构造函数
    全局变量	→	属性
    函数		→	方法
    改错
    this、事件、闭包、传参
    对象与闭包
    通过闭包传递this





