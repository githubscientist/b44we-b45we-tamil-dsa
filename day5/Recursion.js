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
// function sayHello(times) {
//     if (times == 0) return;
//     console.log('hello');
//     sayHello(times-1);
// }

// sayHello(3);

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

// function print(number) {
//     if (number == 0) return;
//     console.log(number);
//     print(number - 1);
// }

// print(5);

/*
    Recursion Tree:

    print(5)
        - number = 5; 5 == 0; false
        - console.log(5)
        - print(4)
            - number = 4; 4 == 0; false
            - console.log(4)
            - print(3)
                - number = 3; 3 == 0; false
                - console.log(3)
                - print(2)
                    - number = 2; 2 == 0; false
                    - console.log(2)
                    - print(1)
                        - number = 1; 1 == 0; false
                        - console.log(1)
                        - print(0)
                            - number = 0; 0 == 0; true
*/

function print(number) {
    if (number == 0) return;

    print(number - 1);
    console.log(number);
}

print(5);

/*
    print(5)
        - number = 5; 5 == 0; false
        - print(4)
            - number = 4; 4 == 0; false
            - print(3)
                - number = 3; 3 == 0; false
                - print(2)
                    - number = 2; 2 == 0; false
                    - print(1)
                        - number = 1; 1 == 0; false
                        - print(0)
                            - number = 0; 0 == 0; true; return ✅
                        - console.log(number) 🕐
                    - console.log(number) 🕐
                - console.log(number) 🕐
            - console.log(number) 🕐
        - console.log(number) 🕐


    print(5)
*/

/*
    Problem: Write a recursion function to find and print the sum of first N natural numbers

    Input: 3
    Output: 6

    Explanation: 1 + 2 + 3 = 6

    Input: 5
    Output: 15

    Explanation: 1 + 2 + 3 + 4 + 5 = 15
*/

// recursive function to return the sum of first N natural numbers
function S(N) {
    
}

console.log(S(5)); // output: 15