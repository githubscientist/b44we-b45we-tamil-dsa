/**
 * @param {number} totalCandies
 * @param {number[]} candies
 * @param {number} i
 * @return {boolean}
 */
// return true, if the totalCandies is greater than all the other kids candies except the index i
// return false otherwise
// Time Complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     // assume true
//     let assumption = true;

//     // traverse/iterate the candies array
//     for(let index=0; index<candies.length; index++){
//         // for every element, compare and check whether the totalCandies is lesser than 
//         // any one candy
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 // if true => update the assumption
//                 assumption = false;
//             }
//         }
//     }   
    
//     // return the assumption
//     return assumption;
// }
// O(N)
// var isGreater = function(totalCandies, candies, i){
//     // assume true
//     let assumption = true;

//     // traverse/iterate the candies array
//     for(let index=0; index<candies.length; index++){
//         // for every element, compare and check whether the totalCandies is lesser than 
//         // any one candy
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 // if true => update the assumption
//                 assumption = false;
//                 break;
//             }
//         }
//     }   
    
//     // return the assumption
//     return assumption;
// }

// O(N)
// var isGreater = function(totalCandies, candies, i){

//     // traverse/iterate the candies array
//     for(let index=0; index<candies.length; index++){
//         // for every element, compare and check whether the totalCandies is lesser than 
//         // any one candy
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 // if true => update the assumption
//                 return false;
//             }
//         }
//     }   
    
//     // return the assumption
//     return true;
// }

// var isGreater = function(totalCandies, candies, i){

//     // traverse/iterate the candies array
//     for(let index=0; index<candies.length; index++){
//         // for every element, compare and check whether the totalCandies is lesser than 
//         // any one candy
//         if(totalCandies < candies[index]){
//             // if true => update the assumption
//             return false;
//         }
//     }   
    
//     // return the assumption
//     return true;
// }

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// Time Complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     // create / initialize an empty boolean array <- result
//     let result = [];

//     // traverse or iterate the candies array <- i
//     for(let i=0; i<candies.length; i++){
//         // for every element in the candies array
//         // find the total number of candies after adding extraCandies <- totalCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than all the other kids candies
//         i){f(isGreater(totalCandies, candies, i)
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else => push false to the result array
//             result.push(false);
//         }
//     }
        
//     // return the result boolean array
//     return result;
// };

// O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     // create / initialize an empty boolean array <- result
//     let result = [];

//     // find the greatest candy
//     let greatestCandy = Math.max(...candies);

//     // traverse or iterate the candies array <- i
//     for(let i=0; i<candies.length; i++){
//         // for every element in the candies array
//         // find the total number of candies after adding extraCandies <- totalCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than all the other kids candies
//         if(totalCandies >= greatestCandy){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else => push false to the result array
//             result.push(false);
//         }
//     }
        
//     // return the result boolean array
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(totalCandies >= greatestCandy){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         result.push(candies[i] + extraCandies >= greatestCandy);
//     }
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     candies.forEach(candy => {
//         result.push(candy + extraCandies >= greatestCandy);
//     });
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     // candies.forEach(candy => {
//     //     result.push(candy + extraCandies >= greatestCandy);
//     // });

//     result = candies.map(candy => {
//         return candy + extraCandies >= greatestCandy;
//     });
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => {
//         return candy + extraCandies >= greatestCandy;
//     });
// };

// O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => candy + extraCandies >= greatestCandy);
// };

// O(N^2)
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(candy => candy + extraCandies >= Math.max(...candies));
};

/*
    1. Problem Understanding

    candies = [2, 3, 5, 1, 3]
            i [0][1][2][3][4]
    
    extraCandies = 3


    result = [true, ]
           i [0]   [1][2][3][4]
    
    i = 0
        totalCandies = candies[i] + extraCandies
                     = 2 + 3
                     = 5
        isGreater(5, candies, 0) => true
            totalCandies = 5
            candies = [2, 3, 5, 1, 3]
                index [0][1][2][3][4]
            i = 0
            assumption = true
            index = 0
                not checked
            index = 1
                5 < 3 false
            index = 2
                5 < 5 false
            index = 3
                5 < 1 false
            index = 4
                5 < 3 false

    2. Algorithm
        - first approach: O(N^2)
        - second approach: O(N)

    // create / initialize an empty boolean array <- result

    // traverse or iterate the candies array <- i
        // for every element in the candies array
        // find the total number of candies after adding extraCandies <- totalCandies

        // check if the totalCandies is greater than all the other kids candies
            // if true => push true to the result array
            // else => push false to the result array
        
    // return the result boolean array

    3. Implementation
*/