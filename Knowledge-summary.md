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
12. 父级.replaceChild(新节点，被替换节点) //替换子节点
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

## 3、Event 事件详解1
## 4、Event 事件详解2
## 5、事件深入应用
## 6、鼠标滚轮、COOKIE




