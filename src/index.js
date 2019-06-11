/*  var：它是variable的简写，可以理解成变量的意思。
	let：它在英文中是“让”的意思，也可以理解为一种声明的意思。
	const：它在英文中也是常量的意思，在ES6也是用来声明常量的，常量你可以简单理解为不变的量。
 */

 //var b = 'vuesea';
 //console.log(b);



/* var a = "vuesea";
window.onload = function () {
	console.log(a);
}
*/

/* var a = 2;
{
	var a= 3;
}
console.log(a); //3  因为var是全局声明
 */


 /* {
	 let a =3
 }
 console.log(a) */


 /* var a = 2
 {
	 let a =3

 }

console.log(a) //2  因为let是局部变量 
*/

//适用场景 :循环
/* for (let i = 0; i < 10; i++) {
	console.log('循环体中:'+i)	
} */
//console.log('循环体外:'+i)


/* const a = 'vuesea'
var a = 'vue海'
console.log(a) */

//变量的解构赋值
/* let a = 0
let b = 1
let c = 3

let [a,b,c] = [0,1,3]
 */

//数组模式和赋值模式严格统一
//let [a,[b,c],d] = [1,[2,3],4]


//解构的默认值
/* let [foo = true] = []
console.log(foo)
 */
/* let [a,b='vuesea']=['vue海']
console.log(a+b) */

//注意 undefined 和 null
/* let [a,b = 'vuesea']=['vue海', undefined]
console.log(a+b) */
/* let [a, b = 'vuesea'] = ['vue海', null]
console.log(a + b) */

//解构赋值不仅可以用于对象 还适用于数组
/* let {foo,bar} = {foo:'vuehsea',bar:'vue海'}
console.log(foo+bar) //区别于数组，对象无次序
 */
//圆括号的使用，如果再解构赋值前定义了变量，这时候再解构赋值会出现问题
/* let foo
{foo} = {foo:'vuehai'}
console.log(foo)
 */
/* let foo 
({foo} = {foo: 'vuehai'})
console.log(foo)
 */

//字符串的解构赋值
/* const [a,b,c,d,e,f] = "vuesea"
console.log(a,b,c,d,e,f) */

//## 扩展运算符 和 rest运算符
//...  解决参数和对象数组未知情况下的编程 -->代码更加健壮和简洁

//当编写一个方法时,我们允许它传入的参数是不确定的--->使用对象扩展运算符
/* function vuesea(...arg) {
	console.log(arg[0])
	console.log(arg[1])
	console.log(arg[2])
	console.log(arg[3])
}
vuesea(1,2,3) */

//扩展运算符的优点
//这是对内存堆栈的引用，而非真正的赋值!!!
/* let arr1 =['www','vuesea','com']
let arr2 = arr1
console.log(arr2)
arr2.push('sunQingHai')
console.log(arr1) */

//可以使用...扩展运算符解决
/* let arr1 = ['www', 'vuesea', 'com']
let arr2 = [...arr1]
console.log(arr2)
arr2.push('sunQingHai')
console.log(arr2)
console.log(arr1) */

//rest运算符

/* function vuesea(first, ...arg) {
	console.log(arg.length);
}
vuesea(0,1,2,3,4,5,6,7) */

//使用循环输出rest运算符
/* function vuesea(first,...arg) {
	for (const val of arg) {
		console.log(val)
	}	
}
vuesea(0,1,2,3,4,5,6,7) */
//for…of的循环可以避免我们开拓内存空间，增加代码运行效率

//字符串模板
//  ES6 中对字符串新增的操作,最重要的就是字符串模板
// ES5中 字符串拼接
/* let vuesea = '技术海'
let blog = '非常高兴你能看到这篇文章,我是你们的老朋友'+ vuesea +'.这节课我们要学习字符串模板.'
console.log(blog) */
//使用ES6字符串模板
/* let vuesea = '技术海'
let blog = `非常高兴你能看到这篇文章,我是你们的老朋友${vuesea}.这节课我们要学习字符串模板.`
console.log(blog) */
//而且支持html标签
/* let jspang = '技术胖';
let blog = `<b>非常高兴你能看到这篇文章</b>，我是你的老朋友${jspang}。<br/>这节课我们学习字符串模版。`;
document.write(blog); */
//对运算的支持
/* let a = 1
let b = 2
let result = `${a+b}`
console.log(result) */


//字符串查找
//===>es5 中 查找是否存在
/* let vuesea = '技术海'
let bolg = '非常高兴你能看到这篇文章，我是你的老朋友技术海。这节课我们学习字符串模版。'
console.log(bolg.indexOf(vuesea)) */

//===>es6中新增加了includes
/* let vuesea = '技术海'
let bolg = '非常高兴你能看到这篇文章，我是你的老朋友技术海。这节课我们学习字符串模版。'
console.log(bolg.includes(vuesea))
//判断开头是否存在
console.log(bolg.startsWith(vuesea))
//判断结尾是否存在
console.log(bolg.endsWith(vuesea))

//复制字符串
console.log('vuesea|'.repeat(3)) */

// 数字操作
// 二进制和八进制
/* let binary = 0B010101
console.log(binary)
let octal = 0o666
console.log(octal) */
//2.数字判断和转换
//3.数字验证Number.isFinite(xx)
/* let a = 11/4
console.log(Number.isFinite(a))
console.log(Number.isFinite('111'))
console.log(Number.isFinite('vuesea'))
console.log(Number.isFinite(NaN))
console.log(Number.isFinite(undefined))
//NaN 验证
console.log(Number.isNaN(NaN));
//整数验证
console.log(Number.isInteger(a)) */
//整数转换 和浮点数转换
/* let a = '9.18'
console.log(Number.parseInt(a))
console.log(Number.parseFloat(a))
 */
//整数取值范围操作
/* let a = Math.pow(2,53)-1
console.log(a)
//最大安全整数
console.log(Number.MAX_SAFE_INTEGER)
//最小安全整数
console.log(Number.MIN_SAFE_INTEGER)
//安全整数的判断 isSafeInteger()
console.log(Number.isSafeInteger(a))
console.log(Number.isSafeInteger(666))

 */

 //ES6 中新增的数组知识
 // JSON 数组格式转换
 /* let json = {
	 '0':'vuesea',
	 '1':'技术海',
	 '2':'凌云的小跟班',
	 length:3
 }
 
 let arr = 	Array.from(json)
 console.log(arr)
 */
//文本, 变量转换为数组
/* let arr = Array.of(3,4,5,6)
console.log(arr) */
/* let arr = Array.of('vuesea', '技术海', '凌云的小跟班')
console.log(arr)
 */
//find()实例方法,从数组中查找
/* let arr = [1,2,3,4,5,6,7,8,9]
console.log(arr.find(function (value,index,arr) {
	return value>50
})) */
//fill()实例方法,把数组进行填充
//第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置
/* let arr = [1,2,3,4,5,6,7,8,9]
arr.fill('vuesea',2,5)
console.log(arr) */

//数组的遍历 for...of循环
/* let arr = ['vuesea','技术海','凌云的小跟班']

for (let item of arr){
	console.log(item)
} */
//for..of 循环的索引
/* let arr = ['vuesea', '技术海', '凌云的小跟班']

for (let index of arr.keys()) {
	console.log(index)
} */
//同时输出
/* let arr = ['vuesea', '技术海', '凌云的小跟班']

for (let [index,val] of arr.entries()) {
	//console.log(index+ ':' +val)
	console.log(`${index} : ${val}`)
} */

//entries()实例方法
/* let arr = ['vuesea', '技术海', '凌云的小跟班']
let list = arr.entries()
console.log(list.next().value)
console.log(list.next().value)
console.log(list.next().value) */

//es5 定义一个函数,实现加法
/* function add(a,b) {
	return a+b
}
console.log(add(1, 2)) */
//es6新增默认值
/* function add(a, b=1) {
	return a + b
}
console.log(add(1))
 */
//主动抛出错误
/* function add(a,b) {
	if(a == 0){
		throw new Error('This is error')
	}
	return a+b
}
console.log(add(0)) */

//函数中的严格模式
//'use strict'

/* function add(a,b) {
	'use strict'
	if (a == 0) {
		throw new Error('This is error')
	}
	return a + b
}
console.log(add(1,2)) */
//注意 :默认值 和严格模式冲突

//获得需要传递的参数个数
/* function add(a, b) {
	'use strict'
	if (a == 0) {
		throw new Error('This is error')
	}
	return a + b
}
console.log(add.length) */

//箭头函数
/* var add = (a,b=1) => a+b
console.log(add(1))
//箭头函数 中{}使用如果箭头函数中由多句话
var add = (a,b=1) => {
	console.log('vuesea')
	return a+b
}
console.log(add(1)) */

//对象的函数解构 JSON格式数据当作参数，传递到函数内部进行处理
/* let json = {
	a:'vuesea',
	b:'技术海'
}
function fun({a,b='vuesea'}) {
	console.log(a,b)	
}
fun(json) */

//数组的函数解构
/* let arr = ['vuesea','技术海','凌云的小跟班']
function fun(a,b,c) {
	console.log(a,b,c)
}
fun(...arr)
 */
//in()判断对象或者数组中是否存在某个值
/* let obj = {
	a: 'vuesea',
	b: '技术海'
}
console.log('a' in obj) */
//es5中判断的弊端:使用length属性进行判断，为0表示没有数组元素-->这样并不准确
/* let arr = [,,,,,]
console.log(arr.length) */
//es6  0指的是数组下标位置是否为空.
/* let arr = [,,,,,]
console.log(0 in arr)

let arr1 = ['vuesea','技术海']
console.log(0 in arr1) */

//数组的遍历方法 1.forEach	
/* let arr = ['vuesea', '技术海', '凌云的服务器']
arr.forEach((val,index)=>console.log(index,val)) */
//2.filter
/* let arr = ['vuesea','技术海','凌云的小跟班']
arr.filter(x=>console.log(x)) */
//3.some
/* let arr = ['vuesea', '技术海', '凌云的小跟班']
arr.some(x=>console.log(x)) */
//4.map 替换的作用  
/* let arr =['vuesea','技术海','凌云的小跟班']
console.log(arr.map(x=>'web')) */

//数组转换字符串
//1.join()
/* let arr = ['vuesea', '技术海', '凌云的小跟班']
console.log(arr.join('|')) */
//2.toString() 只能用逗号隔开
/* let arr = ['vuesea', '技术海', '凌云的小跟班']
console.log(arr.toString()) */

//ES6中的对象
//1.对象赋值
/* let name = 'vuesea'
let skill = 'web'
var obj = {
	name,
	skill
}
console.log(obj) */

//2.对象的Key值构建
/* let key = 'skill'
var obj = {
	[key]:'web'
}
console.log(obj.skill) */

//3.自定义对象方法
/* var obj = {
	add : function (a,b) {
		return a+b
	}
}
console.log(obj.add(1,2)) */

//4.对象Object.is()比较
//ES5的时候 经常使用 === 来判断
/* var obj1 = {
	name: 'vuesea'
}
var obj2 = {
	name: 'vuesea'
}
console.log(obj1.name === obj2.name)
//ES6 中提供了 is()
console.log(Object.is(obj1.name,obj2.name))
//二者区别 ===为同值相等，is()为严格相等
console.log(+0 === -0) //true
console.log(NaN===NaN) //false
console.log(Object.is(+0,-0)) //false
console.log(Object.is(NaN,NaN)) //true */

//5.对象合并 Object.assign()合并对象
var name = {name:'vuesea'}
var skill = {skill:'web'}
var love = {love:'凌云'}
let man = Object.assign(name,skill,love)
console.log(man)