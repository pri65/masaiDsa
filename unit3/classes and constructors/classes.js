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

//3.eg (with 2 methods)
class Rectangle{
    constructor(l,b){
        this.length=l;
        this.breadth=b;
    }
    area(){
        return this.length * this.breadth
    }
    totalPrice(price){
        return(this.length*this.breadth)*price;
    }
}
var rect1=new Rectangle(5,4)
console.log(rect1.area()) //20
console.log(rect1.totalPrice(1000)) //20000

//4.eg (creating arr using classes)(empty array)
class OurArray{
    constructor(){
        this.arr=[];
        this.length=0;
    }
    isEmpty(){
        if(this.arr.length===0){
            return true;
        } else {
            return false;
        }
    }
}
var arr=new OurArray();
console.log(arr.isEmpty()) // true;

//5.eg (arr not empty)
class OurArray{
    constructor(){
        this.arr=[];
        this.length=0;
    }
    isEmpty(){
        if(this.arr.length===0){
            return true;
        } else {
            return false;
        }
    }
    push(ele){
        this.arr[this.length]=ele;
        this.length+=1;
    }
}
var arr=new OurArray();
console.log(arr.isEmpty()) 
