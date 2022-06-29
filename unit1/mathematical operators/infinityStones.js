// Description

// You are given five numbers, stored in variables with the following names

//  one, two, three, four, five, six
// The value stored in the variabletwo, five, sixhas been doubled, such that if initially the value was 3, it has become 6

// The value stored in the variablethree, fourhas been increased three times, such that if initially it was 3, it has become 9

// The value stored in the variableonehas not been changed.

// Find the sum of the updated values stored inone, two, three, four, five, six


// Input
// The first and the only line of input contains the values stored in the variableone, two, three, four, five, six


// Output
// Find the sum of the updated values stored inone, two, three, four, five, six


// Sample Input 1 

// 1 2 3 4 5 6
// Sample Output 1

// 48


function infinityStones(one, two, three, four, five, six) {
    console.log(one+(two*2)+(three*3)+(four*3)+(five*2)+(six*2));
        
    }
    