//classes- these are the template for creating objects.

//syntax for classes is:->
// class className{
//     //constructor
//     //method
// }

class Person{
    constructor(name,city){
        this.name=name
        this.city=city
    }
}
var per1=new Person("Aman","Pune")
var per2=new Person("Anu","Pune")
var per3=new Person("Akash","Mumbai")
var per4=new Person("Atul","Goa")
console.log(per1,per2,per3);