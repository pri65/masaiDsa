// Description

// You are given an arrayAwithNelements. You are allowed toremove only one element, which makes thesum of all the remaining elements exactly divisible by 7.

// Your task is to find thefirst index of smallest elementthat can be removed from array. If there is no answer print-1.


// Input
// Input Format

// The first line contains a single integerN.

// Next line contains N space separated integers A[k] , (0 <= k < N).

// Constraints

// 1 <N< 100000

// 0 <A[k]< 1000000000


// Output
// Output Format

// Print a single line containing one integer, the first array index of the smallest element that CAN be removed, and -1 if there is no such element that he can remove!


// Sample Input 1 

// 5
// 14 7 8 2 4
// Sample Output 1

// 1


function applyBasicMaths(N,A){
    //write code here
    var total_sum=0;
    var smallest_cut = Infinity;
    var index_smallest_cut=-1;
    for (var i=0; i<N; i++)
    {
        total_sum=total_sum+A[i];
    }
    //console.log("total sum is :", total_sum);
    
    for (var i=0; i<N; i++)
    {
        var sum_without_cut=total_sum-A[i];
        if(sum_without_cut%7 == 0)
        {
          if(A[i]<smallest_cut)
          {
              smallest_cut=A[i];
              index_smallest_cut =i;
          }
        }
    }
    console.log(index_smallest_cut);
}

