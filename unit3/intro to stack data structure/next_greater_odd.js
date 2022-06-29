// Description

// Given an array of N integers, Find the next greater element for each element in the array and if the next greater element does not exist take it as -1, You need
// to output the sum of numbers for which the next greater elements are odd and positive.



// Note: Do not consider -1 as odd number.


// Input
// Input Format:

// The first line contains T, the number of test cases.

// The first line of each test case contains N, the number of elements in the array.

// The next line contains N space separated integers denoting the elements of the array


// Constraints

// 1 <= T <= 10

// 1 <= N <= 10^5

// 0 <= A[i] <= 1005


// Output
// For each test case output the sum as mentioned in the problem in a new line.


// Sample Input 1 

// 1
// 5
// 2 3 5 8 3
// Sample Output 1

// 5
// Hint

// In Sample 1:

// N = 5

// Array : 2 3 5 8 3

// Next Greater Elements for each elements are as:

// 2 -> 3

// 3 -> 5

// 5 -> 8

// 8 -> -1

// 3 -> -1

// Numbers whose next greater elements are odd : 2, 3 , and we need to output the sum of all such numbers whose next greater number is odd, so output will be 2+3 = 5