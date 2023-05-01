// function sum1() {
//     let a = 10;
//     let b = 20;
//     let c = a + b;
//     console.log("output of sum1 is " + c)
// }
// sum1();


//Q.2
// function sum() {
//     console.log(`Sum of ${3}, ${4} is ${3 + 4}`);
// }
// sum();


//Q.3
// const sumOF = (a, b) => a + b;
// console.log(sumOF(3, 4));


// 4
// "Print output:
// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl();


//Q.5
// var x = 21;
// girl();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };


//Q.6
// var x = 21;
// a();
// b();

// function a() {

//     x = 20;
//     console.log(x);
// };
// function b() {

//     x = 40;
//     console.log(x);
// };

// console.log(x);



// Q.7
// function factorial(n) {
//     let result = 1;

//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(5));



//Q.8
// function FindSum(a, b) {
//     return a + b;
// }

// function DisplayData(data, batch) {
//     console.log(`i am from ${data} and My batch is EA${batch}`)
// }

// DisplayData("PrepBytes", FindSum(10, 9));


//  Q.9/
//"Guess the output
// Abc();
// const Abc = function () {
//     let value = 20;
//     console.log(value);
// };


//Q.10
// var a = 10;
// (function () {
//     console.log(a);
//     var a = 20;
// })(); 


//Q.11 
// "Guess the Output
const greet = function (name) {
    return function (m) {

        console.log(`Hi!! ${name}, ${m}`);
    }
}

const greet_message = greet('EA19');
greet_message('"Welcome To PrepBytes"');