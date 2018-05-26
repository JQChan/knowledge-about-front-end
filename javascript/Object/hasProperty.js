// 使用hasProperty()方法检测给定的名字是否是对象的自有属性
var o = {x: 1}

console.log(o.hasOwnProperty("x"));
console.log(o.hasOwnProperty("y"));
console.log(o.hasOwnProperty("toString"));
