//使用in运算符判断某个属性是否存在于某个对象中，自有属性和继承属性都可以检测到

//in运算符可以区分不存在的属性和存在但值为undefined的属性
var o = {x: 1}

console.log("x" in o);
console.log("y" in o);
console.log("toString" in o);
