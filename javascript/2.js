var array1 = [11, 22, 33, 44]
var array2 = [12, 23, 34]
var num = 2
array2.unshift(num, 0)
Array.prototype.splice.apply(array1, array2)
// ary1.splice(num, 0, ...ary2)