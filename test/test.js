var expect = require('chai').expect;
var index = require ('../index');

describe('add', function() {
    describe('#add()', function () {
        it('should return 4 when given 2 and 2', function () {
            expect(index.add(2,2)).to.equal(4);
        });
    });
});