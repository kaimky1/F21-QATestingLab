const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions.js')

test("Return two", () => {
    expect(returnTwo()).toBe(2)
});

test("Greeting Kai", () => {
    expect(greeting('Kai')).toBe('Hello Kai')
});
test("Greeting Jill", () => {
    expect(greeting('Jill')).toEqual('Hello Jill')
});

test("Should return sum of two numbers", () => {
    expect(add(2,3)).toBe(5);
});
test("Should return sum of two numbers", () => {
    expect(add(5,9)).toBe(14);
});

describe('basic arithmetic test', () => {
    test("Should return product of two numbers", () => {
        expect(multiply(1,2)).toBe(2);
    });
    test("Should return division of two numbers", () => {
        expect(divide(12,3)).toBe(4);
    });
    test("Should return difference of two numbers", () => {
        expect(subtract(9,5)).toBe(4);
    });
});



