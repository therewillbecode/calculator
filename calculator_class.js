/**
 * Created by Tom on 27/02/2016.
 */
'use strict';

class Calculator {

    constructor(name){
        this.name = name
    }

    set calcName(name){
        this.name = name;
    }

    get calcName(){
        return this.name
    }


    add(num1, num2){
        return num1 + num2;
    }

    divide(num1, num2){
        console.log(num1 / num2);
        return num1 / num2;
    }
}

class ScientificCalculator extends Calculator {
    square(x){
        return Math.pow(x,2);
    }
}

var f = new ScientificCalculator;

module.exports.Calculator = Calculator;
module.exports.ScientificCalculator = ScientificCalculator;