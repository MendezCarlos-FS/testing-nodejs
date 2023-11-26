const { add, subtract, multiply, divide, squareRoot, max } = require("./math");

describe("Testing basic math functions", () => {

    test("Should add two numbers", () => {
        expect(add(4, 4)).toBe(8);
    });
});

describe("Testing advanced math functions", () => {

});