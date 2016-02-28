/**
 * Created by Tom on 28/02/2016.
 */
'use strict';
var expect = require('chai').expect;
var cla = require ('../calculator_class');


describe('computations', function() {
    describe('#square()', function () {
        it('calculator object should return 4 when given 2 and 2', function () {
            let Scicalc = new cla.ScientificCalculator();
            expect(Scicalc.square(2)).to.equal(4);
        });
    });

// tests has properties
describe('methods exist?', function() {

    describe('#hasaddmethod()', function () {
        it('calculator object should have an add method', function () {
            let Scicalc = new cla.ScientificCalculator();
            expect(Scicalc).respondTo('square');
        });
    });