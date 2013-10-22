var SLICE$0 = Array.prototype.slice;"use strict";

function test11(){return 11}
console.log(test11() === 11)

function test12()
	{return 12}
console.log(test12() === 12)

function test13(){return 13}
console.log(test13() === 13)

function test14()
{return 14}

console.log(test14() === 14)

function test21(){return (1, "2")}
console.log(test21() === "2")

function test22()
	{return (1, "2")}
console.log(test22() === "2")

function test31($D$0){var a = $D$0.a;var rest = SLICE$0.call(arguments, 1);return [a, rest[0]]}
console.log(test31({a: 1}, 2, 3, 4).join("|") === [1, 2].join("|"))

function test32($D$1)
	{var a = $D$1.a;var rest = SLICE$0.call(arguments, 1);return [a, rest[0]]}
console.log(test32({a: 1}, 2, 3, 4).join("|") === [1, 2].join("|"))

function test33($D$2)//some comments
	{var a = $D$2.a;var rest = SLICE$0.call(arguments, 1);return [a, rest[0]]}

console.log(test33({a: 1}, 2, 3, 4).join("|") === [1, 2].join("|"))

function test34($D$3){var a = $D$3.a;var rest = SLICE$0.call(arguments, 1);return [
	a, rest[0]
]}
console.log(test34({a: 1}, 2, 3, 4).join("|") === [1, 2].join("|"))
