/*
    Time Complexity

    Either to compare one algorithm with another algorithm or to evaluate the performance of a single algorithm

        - time complexity
        - space complexity

    time complexity => amount of time taken by an algorithm to run!

    space complexity => amount of memory required by an algorithm to run

    Mathematical Notations: Asymptotic Notations

    1. Big - 'O' (Oh) - Upper Bound
    2. Big - 'Ω' (Omega) - Lower Bound
    3. Big - 'Θ' (Theta) - Tight Bound

    Situtaions/Cases: (Input)

    1. Worst Case
    2. Best Case
    3. Average Case

    Example:

    Algorithm : Linear Search

    Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    Case (first element): If the key = 1, Comparisons = 1 => Best Case => O(1) - abbr: Order of 1

    Case (middle element): If the key = 5, Comparisons = 5 => Average Case => O(N/2) => O(N)

    Case (last element): If the key = 10, Comparisons = 10 => N Comparisons => O(N)
         (element not present): If the key = 11, Comparisons = 10 => O(N)


    Time Complexity: Upper Bound, Worst Case - Big - 'O'
*/

/*
    Example: 1

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Options:

    O(1)
    O(logN)
    O(N)
    O(N logN)
    O(N^2)
    O(N^2 logN)
    O(N^3)
    O(N^3 logN)
    O(2^N)
    O(N!)

    Solution: O(N+M)

    let a = 0, b = 0; // declarations, conditionals, expressions, assignments
    => O(1), Constant Time

    for (i = 0; i < N; i++) {
        a = a + rand();
    }

    total executions = values of i
    i = 0, 1, 2, 3, 4, 5, 6, ..., N-1 => N

    
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    total executions = values of j
    j = 0, 1, 2, 3, 4, 5, 6,...., M-1 => M

    total time complexity, T(N, M) = 1 + N + M
                                   = N + M (Since 1 is constant)
                                   = O(N + M)
*/

/*
    Example: 2

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < N; j++) {
        b = b + rand();
    }

    Solution: O(N)

    Total time complexity, T(N) = 1 + N + N
                                = N + N
                                = 2N
                                = N
                                = O(N)
*/

/*
    Example: 3


    let M = N;
    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Time Complexity = 1 + N + N
                    = 2N
                    = O(N)
*/

/*
    Example: 4

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < M; j++) {
            b = b + rand();
        }
    }
    
    Time Complexity = 1 + N * M
                    = N * M
                    = O(N*M)
*/

/*
    Example: 5

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }
    
    Time Complexity = 1 + N * N
                    = N * N
                    = N^2
                    = O(N^2)

    Approach:

        1. Assume inputs
            N = 4
            
            N = 5

            N = 6

        2. Total executions

            N = 4,
                i = 0; j = 0, 1, 2, 3 => 4 times
                i = 1; j = 0, 1, 2, 3 => 4
                i = 2; j = 0, 1, 2, 3 => 4
                i = 3; j = 0, 1, 2, 3 => 4

                total executions = 4 + 4 + 4 + 4
                                 = 16

            N = 5,
                i = 0; j = 0, 1, 2, 3, 4 => 5 times
                i = 1; j = 0, 1, 2, 3, 4 => 5
                i = 2; j = 0, 1, 2, 3, 4 => 5
                i = 3; j = 0, 1, 2, 3, 4 => 5
                i = 4; j = 0, 1, 2, 3, 4 => 5

                total executions = 5 + 5 + 5 + 5 + 5
                                 = 25
        3. Generalize & find the relationship
            For N = 4, executions = 16
            For N = 5, executions = 25
            For N = 6, executions = 36

            O(N^2)
*/

/*
    Example: 6

    let a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }

    N = 5
        i = 0; j = 5, 4, 3, 2, 1 => 5
        i = 1; j = 5, 4, 3, 2 => 4
        i = 2; j = 5, 4, 3 => 3
        i = 3; j = 5, 4 => 2
        i = 4; j = 5 => 1

        Total executions = 5 + 4 + 3 + 2 + 1
                         = 15
    
    N = 5, executions = 15
    N = 6, executions = 21
    N = 10, executions = 55

    executions = sum of first N natural numbers
               = N + N-1 + N-2 + N-3 + N-4 + ... + 1 + 0
               = [N * (N+1)]/2
    
    N = 5, executions = [N * (N+1)]/2
                      = [5 * 6]/2
                      = 30/2
                      = 15
    
    Total time complexity, T(N) = 1 + [N * (N+1)]/2
                                = [N * (N+1)]/2
                                = 1/2 * [N * (N+1)]
                                = N * (N+1)
                                = N^2 + N [N is discarded, since N^2 is the highest polynomial]
                                = O(N^2)

*/

/*
    Example: 7

    int i, j, k = 0;
    for (i = n / 2; i <= n; i++) { 
        for (j = 2; j <= n; j = j * 2) {
            k = k + n / 2;
        }
    }

    Time Complexity = ?

    Outer loop: N/2 + 1

    n = 10
        i = 5, 6, 7, 8, 9, 10

    Inner loop:

        j = 2, 4, 8, 16, 32, 64, 128, ....N
    
    For N = 10; j = 2, 4, 8; executions = 3
    For N = 29; j = 2, 4, 8, 16; executions = 4
    For N = 30; j = 2, 4, 8, 16; executions = 4
    For N = 31; j = 2, 4, 8, 16; executions = 4
    For N = 40; j = 2, 4, 8, 16, 32; executions = 5

    2^X = N, X is unknown, Solve for X?

    Apply log2 on both the sides,

    log2(2^X) = log2(N)

    [log a^b = b log a]

    X log2(2) = log2(N)

    X(1) = log2(N)
    X = log2(N)

    N = 10, executions = log2(N)
                       = log2(10)
                       = 3
    
    Total time complexity = 1 + (N/2 + 1) * (log2(N))
                          = N/2 log2(N) + log2(N)
                          = N * log2(N) + log2(N)
                          = O(N * log2(N))
*/

// console.log(10, Math.log2(10));
// console.log(29, Math.log2(29));
// console.log(30, Math.log2(30));
// console.log(31, Math.log2(31));
// console.log(40, Math.log2(40));

/*
    O(2^N)

    Problem: Given an array of values, find how many ways we an select the values from the array for different selection group size, varying from 0 to N, where N -> total elements

    Input: [1, 2, 3]
    Output: 8

    0 values => ()
    1 value => (1), (2), (3)
    2 values => (1, 2), (2, 3), (1, 3)
    3 values => (1, 2, 3)

    Number of ways => 8

    Input: [1, 2, 3, 4]
    Output: 16

    0 values => ()
    1 value => (1), (2), (3), (4)
    2 values => (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)
    3 values => (1, 2, 3), (1, 2, 4), (1, 3, 4), (2, 3, 4)
    4 values => (1, 2, 3, 4)

    N = 3, executions = 8
    N = 4, executions = 16
    N = 5, executions = 32

    2^N


*/

/*
    N!

    Problem: Given a string S, find in how many ways we can re-arrange the characters of the string to form a new string.

    Input: 'abc'
    Output: 6

    abc
    acb
    bac
    bca
    cab
    cba

    Input: ab
    Output: 2

    ab
    ba

    Input: abcd
    Output: 24

    abcd
    abdc
    acdb
    acbd
    adbc
    adcb
    bacd
    ...
    ...

    N = 3, executions = 6
    N = 4, executions = 24
    N = 5, executons = 120

    N! = N * N-1 * N-2 * .... * 1

    5! = 5 * 4 * 3 * 2 * 1 
       = 120

    O(N!)
*/  