var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
    beforeEach(function () {
        calculator = new Calculator()
    });

    // write unit tests here in the form of "it should do something..."
    // add 1+4 and get 5
    it('it can add', function () {
        calculator.numberClick(1);
        assert.equal(calculator.runningTotal, 1);
        calculator.operatorClick('+');
        assert.equal(calculator.runningTotal, 1);
        calculator.numberClick(4);
        assert.equal(calculator.runningTotal, 4);
        calculator.operatorClick('=');
        assert.equal(calculator.runningTotal, 5);

    })

    // subtract 7-4 and get 3
    it('it can subtract', function () {
        calculator.numberClick(7);
        assert.equal(calculator.runningTotal, 7);
        calculator.operatorClick('-');
        assert.equal(calculator.runningTotal, 7);
        calculator.numberClick(4);
        assert.equal(calculator.runningTotal, 4);
        calculator.operatorClick('=');
        assert.equal(calculator.runningTotal, 3);

    })

    // multiply 3x5 and get 15
    it('it can multiply', function () {
        calculator.numberClick(3);
        assert.equal(calculator.runningTotal, 3);
        calculator.operatorClick('*');
        assert.equal(calculator.runningTotal, 3);
        calculator.numberClick(5);
        assert.equal(calculator.runningTotal, 5);
        calculator.operatorClick('=');
        assert.equal(calculator.runningTotal, 15);
    })

    // divide 21/7 and get 3
    it('it can divide', function () {
        calculator.numberClick(21);
        assert.equal(calculator.runningTotal, 21);
        calculator.operatorClick('/');
        assert.equal(calculator.runningTotal, 21);
        calculator.numberClick(7);
        assert.equal(calculator.runningTotal, 7);
        calculator.operatorClick('=');
        assert.equal(calculator.runningTotal, 3);
    })


    // chain multiple operations together
    it('it can chain multiple operations together', function () {
        calculator.numberClick(4);
        assert.equal(calculator.runningTotal, 4);
        calculator.operatorClick('+');
        assert.equal(calculator.runningTotal, 4);
        calculator.numberClick(3);
        assert.equal(calculator.previousTotal, 4);
        assert.equal(calculator.runningTotal, 3);
        calculator.operatorClick('-');
        calculator.numberClick(2);
        calculator.operatorClick('=');
        assert.equal(calculator.runningTotal, 5);
    })

    // concatenate multiple number button clicks
    it('it can concatenate multiple number button clicks', function () {
        calculator.numberClick(4);
        assert.equal(calculator.runningTotal, 4);
        calculator.numberClick(4);
        assert.equal(calculator.runningTotal, 44);
        calculator.numberClick(4);
        assert.equal(calculator.runningTotal, 444);

    })

    // clear the running total without affecting the calculation

    it('it can clear the running total without affecting the calculation', function () {
        calculator.numberClick(4);
        assert.equal(calculator.runningTotal, 4);
        calculator.operatorClick('+')
        calculator.numberClick(3);
        assert.equal(calculator.runningTotal, 3);
        calculator.clearClick();
        assert.equal(calculator.runningTotal, 0);
        assert.equal(calculator.previousTotal, 4);
        calculator.numberClick(2);
        calculator.operatorClick('=');
        assert.equal(calculator.runningTotal, 6);
    })

    //separate test for add function as the previous test calls it within operatorClick
    it('has a separate add function that works correctly', function () {
        //add works by adding the parameter passed in to the previous total
        calculator.previousTotal = 2;
        calculator.add(2);
        assert.equal(calculator.runningTotal, 4);
    })

    //separate test for subtract function as the previous test calls it within operatorClick
    it('has a separate subtract function that works correctly', function () {
        //subtract works by subtracting the parameter passed in from the previous total
        calculator.previousTotal = 4;
        calculator.subtract(2);
        assert.equal(calculator.runningTotal, 2);
    })

    //separate test for multiply function as the previous test calls it within operatorClick
    it('has a separate multiply function that works correctly', function () {
        //multiply works by multiplying the parameter passed in with the previous total
        calculator.previousTotal = 4;
        calculator.multiply(2);
        assert.equal(calculator.runningTotal, 8);
    })

    //separate test for divide function as the previous test calls it within operatorClick
    it('has a separate divide function that works correctly', function () {
        //divide works by multiplying the parameter passed in with the previous total
        calculator.previousTotal = 4;
        calculator.divide(2);
        assert.equal(calculator.runningTotal, 2);
    })

    it('has capability for += addition to add number clicked to itself', function () {
        calculator.numberClick(2);
        calculator.operatorClick('+');
        calculator.operatorClick('=');
        assert.equal(calculator.runningTotal, 4);
    })

    it('has capability for -= subtraction to subtract number clicked from itself', function () {
        calculator.numberClick(2);
        calculator.operatorClick('-');
        calculator.operatorClick('=');
        assert.equal(calculator.runningTotal, 0);
    })

    it('has capability for *= multiplication to multiply the number clicked by itself', function () {
        calculator.numberClick(2);
        calculator.operatorClick('*');
        calculator.operatorClick('=');
        assert.equal(calculator.runningTotal, 4);
    })

    it('has capability for /= division to divide the number clicked by itself', function () {
        calculator.numberClick(4);
        calculator.operatorClick('/');
        calculator.operatorClick('=');
        assert.equal(calculator.runningTotal, 1);
    })

    //divide by zero returns Infinity
    it('has divide by zero returning Infinity', function () {
        calculator.numberClick(4);
        calculator.operatorClick('/');
        calculator.numberClick(0);
        calculator.operatorClick('=');
        assert.equal(calculator.runningTotal, 'Infinity');
    })

    it('can return negative number from calculation', function () {
        calculator.numberClick(5);
        calculator.operatorClick('-');
        calculator.numberClick(10);
        calculator.operatorClick('=');
        assert.equal(calculator.runningTotal, -5);
    })

    it('calculations on negative numbers work as expected', function () {
        calculator.numberClick(5);
        calculator.operatorClick('-');
        calculator.numberClick(10);
        calculator.operatorClick('=');
        assert.equal(calculator.runningTotal, -5);
        calculator.operatorClick('+');
        calculator.numberClick(3);
        calculator.operatorClick('=');
        assert.equal(calculator.runningTotal, -2);
    })




});
