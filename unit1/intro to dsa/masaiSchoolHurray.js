// You are provided an integer N.

// For all numbers in the range[1,N], includingNyou have to print a string as per the following rules:

// PrintMasai School, if the number is a multiple of both 5 and 7.
// PrintMasai. if the number is a multiple of 7 only.
// PrintSchool, if the number is a multiple of 5 only.
// Else in all other cases printHurray!

function masaiSchoolHurray(N) {
    // Write code here
    for (var i=1; i<=N; i++)
    {
        if (i%5===0 && i%7===0) {
            console.log("Masai School");
        } else if (i%7===0) {
            console.log("Masai");
      }  else if (i%5===0) {
          console.log("School");
      } else {
      console.log("Hurray!");
}
}
}