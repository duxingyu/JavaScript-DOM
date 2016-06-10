"use strict";
var a = null;
// alert(typeof fn1);
// function fn1() {
// 	var a = NaN;
// 	alert(typeof a);
// }
// fn1();
// var result = Number.MAX_VALUE +Number.MAX_VALUE;
// result = Number.POSITIVE_INFINITY;
// alert(isFinite(result));
// a = 070;
// a = 0.1;
// var b = 0.2;
// alert(a + b);	// = 0.3.....4
// alert(1/0);		//Infinity
// alert(NaN == NaN)
// alert(Boolean(0));
// a = ['a'];
// alert(isNaN(a));
// alert(Number(null))		// 0 	****************************
// alert(Number(' '));		// 0
// alert(Number('070'));			//70
// alert(parseInt('070'));		//	ES3 ==> 56  ES6 ==> 70
// alert(parseInt('070',8));		//	八进制用法
// alert(parseInt('0xAF'));		// 	正常
// parseInt('AF',16) == parseInt('0xAF')
// a = '\u03a3';alert(a.length);	// a.length = 1
// a = true;alert(a.toString());
// a = 10;alert(a.toString(2));		//转为二进制
// alert(String(a));					//注意位置(x) null/undefined ==> null/undefined

// var a1 = -18;alert(a1.toString(2));			// = -10010 
// alert(~a1);								//按位非		反码 ==> 17
// alert(25&3);alert(25|3);alert(25^3);		//按位与 => 1 ; 按位或 => 27	按位异或 => 26	
// alert(2 << 5);		//左移 => 64
// alert(64 >> 5);		//有符号右移  =>2
// alert(-64 >>> 5);		//无符号右移  => 134218826  整数无影响
// alert(3>NaN);alert(3<=NaN);			//全为false
// alert(null == undefined);			// true  NaN/undefined比较不进行类型转换
// var a2 = (5,2,1,4,9);alert(a2);			//a2 = 9 最后一个值
