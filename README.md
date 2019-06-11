# es6
学习es6的基本用法的仓库
# 打卡 6月11日
技术胖  es6 之旅走起 ---> 好记性不如烂笔头
##  新的声明方式
var：它是variable的简写，可以理解成变量的意思。
let：它在英文中是“让”的意思，也可以理解为一种声明的意思。
const：它在英文中也是常量的意思，在ES6也是用来声明常量的，常量你可以简单理解为不变的量。

var 是声明全局变量
let 声明局部变量(可以在循环中使用它,避免变量污染)
const 声明一个常量 (一旦声明不允许改变)

## 变量的解构赋值
1.数组的解构赋值
2.对象的解构赋值
3.圆括号的使用
4.字符串的解构赋值
注意:
1.数组模式和赋值模式严格统一
2.解构的默认值
3.undefined和null的区别

## 扩展运算符和rest运算符
1.(...)扩展运算符
2.(...)rest运算符
3.for...of 循环

## 字符串操作
1.字符串模板  ( ``  ${} )配合使用
支持html标签
支持运算符
2.字符串的查找
es5中:判断位置 indexOf
判断是否存在 includes
判断开头是否存在: startsWith
判断结尾是否存在: endsWith
3.复制字符串
repeat(3) //数字是复制倍数

## ES6数字操作
1.二进制 (0b)  八进制(0o)
2.数字的判断
判断是否是数字:isFinite
判断是否是NaN:isNaN
判断是否为整数:isInteger
判断是否是安全整数:isSafeInteger
最大安全整数:MAX_SAFE_INTEGER
最小安全整数:MIN_SAFE_INTEGER
3.数字的装换
转换为整数parseInt
装换为浮点数parseFloat

## ES6数组操作
1.JSON转换成字符串Array.from()
2.文本、数字转换为字符串 Array.of()
3.查找三个参数:find()
4.填充数组:三个参数fill()
5.数组的遍历
for...of循环
循环内容 arr
循环索引 arr.keys()
循环内容+索引 arr.entries()
6.entries()实例方法 --->next().value

##ES6中的箭头函数和扩展
1.参数默认值 b=1
2.主动抛出错误 theow new Error
3.函数的严格模式 'use strict'
注意:默认值与严格模式冲突 (小坑)
4.获取需要传递参数的个数 add.length
5.箭头函数 =>
6.箭头函数中使用{}

##ES6中函数和数组补漏
1.对象的函数解构 : JSON格式数据当作参数，传递到函数内部进行处理
2.数组的函数解构 : ...arr
3.in()判断对象或者数组中是否存在某个值
4.数组的遍历方法
  ①forEach()
  ②filter()
  ③some()
  ④map() 替换的作用
5.数组转换字符串
  ①join('|')
  ②toString() 只能用逗号隔开

##ES6中的对象
1.对象赋值
2.对象的Key值构建
3.自定义对象方法
4.对象Object.is()比较  注意: 区别 ===   (===为同值相等，is()为严格相等)
5.对象合并 Object.assign()合并对象

##Symbol 在对象中的作用
1.声明Symbol ===>意思是全局标记
2.Symbol的打印
3.Symbol在对象中的应用:使用Symbol构建对象的Key，并调用和赋值
4.Symbol对象元素的保护作用










