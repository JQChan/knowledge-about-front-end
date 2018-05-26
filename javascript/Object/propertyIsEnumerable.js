import inherit from './inherit'

// 使用propertyIsEumerable，只有检测到是自有属性并且此属性的可枚举性为true时才返回true， 某些内置属性是不可枚举的，如toString
var o = inherit({y: 2})
console.log(o);
o.x = 1
console.log(o.propertyIsEnumerable("x"));
console.log(o.propertyIsEnumerable("y"));

console.log(Object.prototype.propertyIsEnumerable("toString"));
 