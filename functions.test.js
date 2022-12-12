const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions.js') 

test("returnTwo should return 2", () => {
    expect(returnTwo()).toEqual(2);
})

test ('greeting returns a greeting', () => {
    const james = greeting('James')
    expect(james).toEqual('Hello,James');
    const jill = greeting('Jill');
    expect(jill).toBe('Hello,Jill');
})

test ('add function returns sum of two numbers', () => {
    const three = add(1,2)
    expect (three).toEqual(3);

    const fourteen = add(5,9)
    expect (fourteen).toEqual(14);
})

//math functions 

describe("math challenges", () => {
    test('function will multiply both parameters', () => {
        const test1 = multiply(8,2)
        expect (test1).toEqual(16);

        const test2 = multiply(10,4)
        expect (test2).toEqual(40);
        })


test('function will divide both parameters', () => {
        const test1 = divide(8,2)
        expect (test1).toEqual(4);
    
        const test2 = divide(100,2)
        expect (test2).toEqual(50);
        })

test('function will subtract both parameters', () => {
        const test1 = subtract(8,2)
        expect (test1).toEqual(6);
        
        const test2 = subtract(100,200)
        expect (test2).toEqual(-100);
     })
    })