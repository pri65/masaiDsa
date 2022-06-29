// Description

// You are given an array stored in a variable with the namearr

// The size of the array is stored in a variable with the nameN

// You have to find the value of the equationx*y,

// where x - sum of even elements in the array
// and y - sum of odd elements in the array

// For example, consider the value stored inN = 4, andarr = [1 2 3 4]

// Therefore, the value ofx = 2 + 4 = 6, and the value ofy = 1 + 3 = 4

// Therefore, the value of the given equation =x*y = 6*4 = 24, which is the required answer


// Input
// The first line of the input contains the value stored inN

// The next line contains the elements of the array, which are stored inarr


// Output
// Print the value of the equation, as explained in the problem statement

// Sample Input 1 

// 4
// 1 2 3 4
// Sample Output 1

// 24
// Hint

// In the sample test case, the value stored inN = 4, andarr = [1 2 3 4]

// Therefore, the value ofx = 2 + 4 = 6, and the value ofy = 1 + 3 = 4

// Therefore, the value of the given equation =x*y = 6*4 = 24, which is the required answer


function playingWithArray(N, arr){
    // Write your code here!
    var x=0;
    var y=0;
    for (var i=0; i<arr.length; i++)
    {
        if(arr[i]%2==0)
        {
            x=x+arr[i];
        }
        else 
        {
            y=y+arr[i];
        }
       
    }
    console.log(x*y);
    }
    