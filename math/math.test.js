const { add, subtract, multiply, divide, squareRoot, max } = require("./math");

describe("Testing basic math functions", () => {

    test("Should add two numbers", () => {
        expect(add(4, 4)).toBe(8);
    });

    test("Should subtract two numbers", () => {
        expect(subtract(8, 4)).toBe(4);
    });

    test("Should multiply two numbers", () => {
        expect(multiply(4, 4)).toBe(16);
    });

    test("Should divide two numbers", () => {
        expect(divide(4, 4)).toBe(1);
    });
});

describe("Testing advanced math functions", () => {

    test("Should find the square root of a number", () => {
        expect(squareRoot(16)).toBe(4);
    });

    test("Should find the max of two numbers", () => {
        expect(max(1047, 4549)).toBe(4549);
    });
});