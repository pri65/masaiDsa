// You are provided the highest runs,N, ever scored in a cricket match till now, which is current highest record.

// You are also given current runs,Mscored by Sachin (Tendulkar) in a today's match.

// If Sachin breaks current record in that match, printBroken.
// If Sachin could not break that record, printNot Yet.
// If Sachin score exactly as current highest record, printWao.

// Sample Input 1 

// 264 200
// Sample Output 1

// Not Yet


function breakingTheRecord(n, m) {
    //write code here
    if(m>n) 
    {
    console.log("Broken");
    }
    else if(m<n)
    {
        console.log("Not Yet");
    }
    else
    {
        console.log("Wao");
    }
}
