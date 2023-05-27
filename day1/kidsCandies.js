/**
 * @param {number} totalCandies
 * @param {number[]} candies
 * @param {number} i
 * @return {boolean}
 */
// return true, if the totalCandies is greater than all the other kids candies except the index i
// return false otherwise
var isGreater = function(totalCandies, candies, i){
    // assume true
    let assumption = true;

    // traverse/iterate the candies array
    for(let index=0; index<candies.length; index++){
        // for every element, compare and check whether the totalCandies is lesser than 
        // any one candy
        if(index != i){
            if(totalCandies < candies[index]){
                // if true => update the assumption
                assumption = false;
            }
        }
    }   
    
    // return the assumption
    return assumption;
}

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // create / initialize an empty boolean array <- result
    let result = [];

    // traverse or iterate the candies array <- i
    for(let i=0; i<candies.length; i++){
        // for every element in the candies array
        // find the total number of candies after adding extraCandies <- totalCandies
        let totalCandies = candies[i] + extraCandies;

        // check if the totalCandies is greater than all the other kids candies
        if(isGreater(totalCandies, candies, i)){
            // if true => push true to the result array
            result.push(true);
        } else {
            // else => push false to the result array
            result.push(false);
        }
    }
        
    // return the result boolean array
    return result;
};

/*
    1. Problem Understanding

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