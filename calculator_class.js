/**
 * Created by Tom on 27/02/2016.
 */
'use strict';

class Calculator {
    constructor(name){
        this.name = name;
    }

    add(num1, num2) {
        return num1 + num2;
    }

    divide(num1, num2) {
        console.log(num1 / num2);
        return num1 / num2;
    }
}

module.exports.Calculator = Calculator;