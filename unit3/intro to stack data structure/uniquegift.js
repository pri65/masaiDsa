// Description

// You are visiting a friend at her housewarming party. When you arrive at her house, you see a queue of people standing outside waiting to go inside. Everybody is holding a present in their hands, and since there aren't many gift shops nearby, most of them end up buying the same gift for her. As more and more people keep joining the queue, you are curious to find the first unique gift in the line. You sit and examine the row after a new person arrives; when he does, you examine the queue from front to back to find out which is the first different gift and add it to your list.

// Note-If after a new person arrives no gift is unique in the queue add '#' to the output


// Input
// The first line contains the number of test cases (t)

// The next t lines contains a string of alphabets arranged randomly, each alphabet represents a unique gift.


// 1 <= length of the string <= 20

// 1<=t<=10000


// Output
// You have to output t strings after processing the stream of lowercase alphabets from the input strings


// Sample Input 1 

// 2
// abadbc
// abcabc
// Sample Output 1

// aabbdd
// aaabc#


function runProgram(input){
    input=input.trim().split('\n')
    var tc=+input[0]
    var line=1;
    for(var i=0; i<tc; i++)
    {
        var str=input[line]
        line++;
        check(str);
    }
    
}

function check(str){
    ans=""
    count_obj={}
    uniq_que=[]
    
    for(var i=0; i<str.length; i++)
    {
        gift=str[i];
        if(count_obj[gift]==undefined)
        {
            count_obj[gift]=1;
        } else {
            count_obj[gift]++;
        }
        uniq_que.push(gift);
        while(uniq_que.length!=0)
        {
            if(count_obj[uniq_que[0]]>1)
            {
                uniq_que.shift()
            } else {
                ans+=(uniq_que[0])
                break;
            }
        }
        if(uniq_que.length==0)
        {
            ans+=("#");
        }
    }
   console.log(ans)
}
 

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}