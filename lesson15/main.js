function sum(a, b) {
	return a + b > 10;
}


let assert = require('chai').assert

describe("sum", function () {
	it("Тип данных true", function () {
		assert.typeOf(sum(2,2), "boolean")
	});
});

//

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

describe("arr", function () {
	it("num равна 5", function () {
		assert.equal(num, 5)
	});
});