var expect = require('chai').expect;
var index = require ('../index');

// tests add function
describe('add', function() {
    describe('#add()', function () {
        it('should return 4 when given 2 and 2', function () {
            expect(index.add(2,2)).to.equal(4);
        });
    });
});

// tests divide function
describe('divide', function() {
    describe('#add()', function () {
        it('should return 2 when 4 is divided by 2', function () {
            expect(index.divide(4, 2)).to.equal(2);
        });
    });
});