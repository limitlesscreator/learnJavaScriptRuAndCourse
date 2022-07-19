// When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).

// "2" > "12"

// True

// ‘0’
// ‘false’ // false wrapped in string.
// []
// {}
// function(){}



// ” or “” // empty string
// false
// 0
// null
// undefined
// NaN // not-a-number






// Object.is(). It takes two arguments and returns true if both the values and types are equal. Essentially, its identical to the === operator, but without its quirks.
// console.log(Object.is(NaN, NaN))
// console.log(Object.is(2, "2"))


///////////////////////////////////////////////////////////////////////////////////////////
// console.log(false + true)
// console.log('12' / '6')
// console.log(1 + 2 + 'number' + 15 + 3)
// console.log([1] > null)
// console.log('foo' + + 'bar')
// console.log('a' > 'b' && true)
// console.log('a' > 'b' && true || true)
// console.log('a' < 'b')
// console.log('true' == true)
// console.log(false == 'false')
// console.log(null == '')
// console.log(!!'false' == !!'true')
// console.log(['x'] == 'x')
// console.log([] + null + 1)
// console.log(0 || '0' && {})
// console.log([1,2,3] == [1,2,3])
// console.log([1,2,3] === [1,2,3])
// console.log("2" > "12")
// console.log("22" < "23")
// console.log(null == null)