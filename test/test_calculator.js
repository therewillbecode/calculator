'use strict';
var expect = require('chai').expect;
var cla = require ('../calculator_class');


// tests add and divide function
describe('computations', function() {
    describe('#add()', function () {
        it('calculator object should return 4 when given 2 and 2', function () {
            let calc = new cla.Calculator();
            expect(calc.add(2, 2)).to.equal(4);
        });
    });

    describe('#divide()', function () {
        it('calculator object should return 2 when 4 is divided by 2', function () {
            let calc = new cla.Calculator();
            expect(calc.divide(4, 2)).to.equal(2);
        });
    });
});

