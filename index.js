// function Person(name,age,home,hobby){
//     this.name = name;
//     this.age = age;
//     this.home = home;
//     this.hobby = hobby;
//     this.bio = function(){
//         console.log("My name is "+this.name+" I am "+this.age+" years old and I live at "+this.home+" I like "+this.hobby);
//     }
// }
// let kayumba = new Person("kayumba",17,"Huye","Basket");
// kayumba.bio();
// let innocent = new Person("INNOCENT",15,"Nyabihu","eating");
// innocent.bio();
function Person(){
    this.name
    this.age 
    this.home 
    this.hobby
    this.bio = function(){
        console.log("My name is "+this.name+" I am "+this.age+" years old and I live at "+this.home+" I like "+this.hobby);
    }
}
let kayumba = new Person();
kayumba.name="kayumba";
kayumba.age=27;
kayumba.home="Huye";
kayumba.hobby="basket ball";
kayumba.bio();
//  function Area(name,length,width,color){
//     this.name=name;
//     this.length=length;
//     this.width=width;
//     this.color=color;
//     this.Calculate = function(){
//         console.log("Iam "+this.name+" Iam "+this.length+"cm high and "+this.width+"cm wide and my area is "+this.length*this.width+"cm squared but I have perimetr also which is "+(this.length+this.width)*2+"cm do you know my color ? It is "+this.color)
//     }
//  }
//  let rect=new Area("Reactangle",10,5,"blue color");
//  rect.Calculate();
function Area(){
    this.name
    this.length
    this.width
    this.color
    this.Calculate = function(){
        console.log("Iam "+this.name+" Iam "+this.length+"cm high and "+this.width+"cm wide and my area is "+this.length*this.width+"cm squared but I have perimetr also which is "+(this.length+this.width)*2+"cm do you know my color ? It is "+this.color)
    }
 }
 let rect=new Area();
 rect.name="a Rctangle";
 rect.length=10;
 rect.width=5;
 rect.color="blue color";
 rect.Calculate();
