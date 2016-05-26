function getElementByClassName( parent,tagName,className ) {
	var aEls = parent.getElementsByTagName( tagName );
	var arr = [];
	for (var i = 0; i < aEls.length; i++) {

		var = aClassName = aEls[i].className.split(' ');
		for (var j = 0; j < aClassName.length; j++) {
			arr.push( aEls[i] );
			break;
		}
	}

}

function addClass( obj,className ) {
	if (obj.className == '') {
		obj.className = className;
	}else{

		var arrClassName = obj.className.split(' ');
		var _index = arrIndexOf( arrClassName,className );
		if (_index == -1) {
			obj.className += ' ' + className;
		}
	}
}

function removeClass( obj.className ) {
	if (obj.className != '') {

		var arrClassName = obj.className.split(' ');
		var _index = arrIndexOf( arrClassName,className );
		if (_index != -1) {
			arrClassName.splice(_index,1);
			obj.className = arrClassName.join(' ');
		}
	}
}


function arrIndexOf( arr,v ) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == v) {
			return i;
		}
	}
}
//事件绑定函数事例：bind(document,'click',fn1);
function bind(obj,evname,fn) {
	if (obj.addEventListener) {
		obj.addEventListener(evname,fn,false);
	}else{
		obj.attachEvent('on'+evname,function(){fn.call(obj);});
	}
}