//使用Object.create通过原型继承创建一个新的对象
function inherit(p) {
    if (p === null) throw TypeError()
    if (Object.create) {
        return Object.create(p)
    }
    var t = typeof p
    if (t !== 'object' && t !== 'function') throw TypeError()
    function f() {}
    f.prototype = p
    return new f()
}
//例子
var o = {x: "don't change this value"}
var a = inherit(o)
console.log(a);
console.log(a.x);
a.x = "it will not change o.x value"
a
o

export default inherit;