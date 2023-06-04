/*
    Recursion: Algorithm

    Recursion is a function that calls itself!

    Example:

        sayHello()
*/

// normal function
// function definition
// function sayHello() {
//     console.log('hello');
// }

// // function call
// sayHello();
// // sayHello();



// recursion function
// function sayHello() {
//     console.log('hello');
//     sayHello();
// }

// sayHello();

/*
    Loop: Iteration - to execute a block of statement for some times as long as a condn is satisfied or until a condition is being met.
    Vs
    Recursion - to execute a block of statement again and again recursively until a condn is met

    Example: Problem: Write a function to print the message 'hello' 3 times
*/

// console.log('hello');
// console.log('hello');
// console.log('hello');

// iteration
// function sayHello() {
//     for (let i = 1; i <= 3; i++){
//         // this loop executed for 3 times
//         console.log('hello');
//     }
// }

// sayHello();

// recursion
function sayHello(times) {
    if (times == 0) return;
    console.log('hello');
    sayHello(times-1);
}

sayHello(3);

/*
    Recursion Tree:

    sayHello(3)
        - times = 3; 3 == 0; false ✓
        - console.log('hello') ✓
        - sayHello(2)
            - times = 2; 2 == 0; false ✓
            - console.log('hello') ✓
            - sayHello(1)
                - times = 1; 1 == 0; false ✓
                - console.log('hello') ✓
                - sayHello(0)
                    - times = 0; 0 == 0; true ; return ✓

    sayHello(3)

*/

// function printThis() {
//     console.log('print this');
// }

// printThis();
// console.log('print that');

// Problem:

/*
    Write a recursion function to print the values from N to 1

    Input: 3

    Output:
    3
    2
    1

    Input: 5
    Output: 
    5 
    4
    3
    2
    1
*/