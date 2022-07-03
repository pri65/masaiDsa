// Description

// Given a linked list consisting of nodesand given a number N. The task is to find the nth nodefrom the end of the linked list.

// No need to take any input, just complete the function below and return the nth node.


// Input
// This is a function complete problem.

// Refer to sample input for understanding

// The first line contains the number nodes (t)

// Next t lines contains the nodes of the linked list

// Next line contains the number n

// t <= 1000

// list[i] <= 1000


// Output
// Complete the function


// Sample Input 1 

// 3
// 1
// 2
// 3
// 1
// Sample Output 1

// 3



const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
    var fir=head
    var sec=head
    var count=0
    while(count!=n) {
        fir=fir.next
        count++
    }
    while(fir!=null) {
        fir=fir.next
        sec=sec.next
    }
    return sec.data;
}
