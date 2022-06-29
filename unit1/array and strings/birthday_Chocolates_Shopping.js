// Your birthday is coming, and to celebrate it, you want to give chocolates to all the students of your class. There are M students in your class, and you have N rupees to spend on the chocolates. Now, you can buy  "Dairy Milk", "Shots" or "Eclairs". The cost of Dairy Milk is 5 Rs per chocolate, and the cost of Shots is 2 Rs per chocolate, and the cost of Eclairs is 1 Rs per chocolate. You only have N rupees saved from your pocket money, and you want to buy the most expensive chocolate possible for your classmates.

// Print "Dairy Milk", if you can buy M of them within N rupees, else if you can buy M Shots within N rupees, print "Shots", else if you can buy M eclairs within N rupees, print "Eclairs", else print "No Chocolates".

// Sample Input 1 

// 100
// 15
// Sample Output 1

// Dairy Milk
// Sample Input 2 

// 10
// 15
// Sample Output 2

// No Chocolates

function birthdayChocShopping(M,N){
    //write code here
    
    
        if(M*5<=N)
        {
            console.log("Dairy Milk");
        } else if(M*2<=N)
        {
            console.log("Shots");
        } else if(M<=N)
        {
            console.log("Eclairs");
        } else
        {
            console.log("No Chocolates");
        }
    
}
