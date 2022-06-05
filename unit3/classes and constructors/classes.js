//classes- these are the template for creating objects.

//syntax for classes is:->
// class className{
//     //constructor
//     //method
// }

//1.eg
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
console.log(per1,per2,per3,per3);

//2.eg (with method)
class Person{
    constructor(name,city){
        this.name=name
        this.city=city
    }
    welcome(){
        return "Welcome"+ this.name+"from"+this.city;
    }
}
var per1=new Person("Aman","Pune")
var per2=new Person("Anu","Pune")
console.log(per1,per2);
