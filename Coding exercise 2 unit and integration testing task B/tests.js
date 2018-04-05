var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function () {
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:3000');
    });

    // write integration tests here in the form of "it should do something..."
    it('should have working number buttons', function () {
        running_total = element(by.css('#running_total'))
        element(by.css('#number2')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('2')
    })

    it('should have number buttons that when clicked update the displayrunning total', function () {
        running_total = element(by.css('#running_total'))
        element(by.css('#number2')).click();
        element(by.css('#number3')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('23')
    })

    it('can add two numbers', function () {
        running_total = element(by.css('#running_total'))
        element(by.css('#number2')).click();
        element(by.css('#operator_add')).click();
        element(by.css('#number3')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('5')
    })

    it('can subtract two numbers', function () {
        running_total = element(by.css('#running_total'))
        element(by.css('#number4')).click();
        element(by.css('#operator_subtract')).click();
        element(by.css('#number2')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('2')
    })

    it('can multiply two numbers', function () {
        running_total = element(by.css('#running_total'))
        element(by.css('#number4')).click();
        element(by.css('#operator_multiply')).click();
        element(by.css('#number2')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('8')
    })

    it('can divide two numbers', function () {
        running_total = element(by.css('#running_total'))
        element(by.css('#number4')).click();
        element(by.css('#operator_divide')).click();
        element(by.css('#number2')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('2')
    })

    it('can chain multiple operations together', function () {
        running_total = element(by.css('#running_total'))
        element(by.css('#number4')).click();
        element(by.css('#operator_add')).click();
        element(by.css('#number2')).click();
        element(by.css('#operator_add')).click();
        element(by.css('#number2')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('8')
    })

    it('can dislay negative number following calculation', function () {
        running_total = element(by.css('#running_total'))
        element(by.css('#number5')).click();
        element(by.css('#operator_subtract')).click();
        element(by.css('#number9')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('-4')
    })

    it('can handle negative calculations correctly', function () {
        running_total = element(by.css('#running_total'))
        element(by.css('#number5')).click();
        element(by.css('#operator_subtract')).click();
        element(by.css('#number9')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('-4');
        element(by.css('#operator_add')).click();
        element(by.css('#number2')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('-2');
    })

    it('can handle calculations with big numbers', function () {
        running_total = element(by.css('#running_total'))
        element(by.css('#number5')).click();
        element(by.css('#number0')).click();
        element(by.css('#number0')).click();
        element(by.css('#number0')).click();
        element(by.css('#number0')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('50000');
        element(by.css('#operator_divide')).click();
        element(by.css('#number2')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('25000');
    })

    it('should dislay error message on divide by zero', function () {
        running_total = element(by.css('#running_total'))
        element(by.css('#number5')).click();
        element(by.css('#operator_divide')).click();
        element(by.css('#number0')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal("Can't divide by zero");
    })

});

