/* Challenge Number 1*/
/* Difficulty: very easy*/
/*Create a function that takes two numbers as arguments and return their sum.*/
let result = func(4, 3);

function func(a, b) {
    return a + b;
}
/* Challenge Number 2*/
/* Difficulty: very easy*/
/*Write a function that takes an integer minutes and converts it to seconds..*/
var minut = 3
function func2(minut) {
    return result * 60;
}
/* Challenge Number 3*/
/* Difficulty: very easy*/
/*Create a function that takes a number as an argument, increments the number by +1 and returns the result.*/
number = 1;
function addition(number) {
    return result + 1;
}
/* Challenge Number 4*/
/* Difficulty: very easy*/
/*Write a function that takes the base and height of a triangle and return its area.*/
base = 3;
height = 2;
function triArea(base, height) {
    return (base * height) / 2;
}
/* Challenge Number 5*/
/* Difficulty: easy*/
/*Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.*/
bnum1 = toString(num1);
bnum2 = toString(num2);
function bitwiseAND(bnum1, bnum2) {
    return bnum1 & bnum2;
}
function bitwiseOR(bnum1, bnum2) {
    return bnum1 | bnum2;
}
function bitwiseXOR(bnum1, bnum2) {
    return bnum1 ^ bnum2;
}
/* Challenge Number 6*/
/* Difficulty: easy*/
/*Create a function that takes a number as an argument.
 Add up all the numbers from 1 to the number you passed to the function.
 For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.*/
var result = 0;
function addUp(num) {
    for (let i = 1; i < num; i++) {
        result = result + i;
    }
    return result;
}
/* Challenge Number 7*/
/* Difficulty: easy*/
/*Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.*/
var result = 0;
var num = 3;
function shiftToLeft(num, shift) {
    result = num * math.pow(2, shift);
    return result;
}
/* Challenge Number 8*/
/* Difficulty: easy*/
/*Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.*/
const numList = [1, 2, 3, 4, 5];
var min = 1000;
var max = 0;
function minMax(numList) {
    for (let i = 0; i < numList.length; i++) {
        if (numList[i] < min) {
            min = numList;
        }
        if (numList[i] > max) {
            max = numList[i];
        }
    }
}
/* Challenge Number 9*/
/* Difficulty: medium*/
/*Create a function which returns the number of true values there are in an array.*/
const boolArray = [true, false, false, true, false];
result = 0;
function countTrue(boolArray) {
    for (let i = 0; i < boolArray.length; i++) {
        if (boolArray[i] = true) {
            result = result + 1;
        }
    }
    return result;
}