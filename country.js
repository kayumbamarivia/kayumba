function arrangeCountries(){
    let continent=document.getElementsByTagName("li");
    let africaCountries=document.getElementById("A");
    let europeancaCountries=document.getElementById("B");
    let asianCountries=document.getElementById("C");
    let americanCountries=document.getElementById("D");
    for (let i = 0; i < continent.length; i++) {
        if(i==0 || i==1 || i==2){
        let african=document.createElement("p");
        african.textContent+=continent[i].innerHTML;
        africaCountries.appendChild(african);
        }else if(i==3 || i==4 || i==5){
            let european=document.createElement("p");
        european.textContent+=continent[i].innerHTML;
        europeancaCountries.appendChild(european);
        }else if(i==6 || i==7){
            let asian=document.createElement("p");
        asian.textContent+=continent[i].innerHTML;
        asianCountries.appendChild(asian);
        }else{
            let american=document.createElement("p");
        american.textContent+=continent[i].innerHTML;
        americanCountries.appendChild(american);
        }
        
    }
}
// console.log("singleto pattern")
// let t = new function(name){
//     this.name="k"
//     this.do=function(){
//         return "Iam "+this.name
//     }
// }
// console.log(t.do());
// console.log("end")
// console.log("es6 class syntax")
// class r{
//     constructor(name,age){
//         this.name="k" 
//     }
// }
// console.log(r.name);
// console.log("end")
// console.log("object.create() method")
// let obj=Object.create(t);
// console.log(obj.name);
// console.log("end")
// console.log("function constructor and prototype")
// function y(){
// }
// y.prototype.name="k"
// let n= new y();
// console.log(n.name)
// console.log("end")
// console.log("function constructor")
// function x(name){
//     this.name=name
// }
// x.prototype={
//     eat:function(){
//         return "nice"
//     },
//     throw:function(){
//         return "don't"
//     }
// }
// x.prototype.eat=function(){
//     return "bad"
// }
// let s= new x();
// // s.name = "k"
// console.log(s.eat())
// console.log("end")
// class Person{
//     constructor(name,age){
//         this._name=name
//         this.age=age
//     }
//     get name(){
//         return this._name+" is "+this.age+" old"
//     }
//     set name(newName){
//          this._name=newName.toUpperCase();
//     }
// }
// let kayumba = new Person("kayumba",16);
// console.log(kayumba.name);
// kayumba.name="innocent";
// kayumba.age=12;
// console.log(kayumba.name);
// kayumba.name="patrick";
// kayumba.age=12;
// console.log(kayumba.name);
 
// console.log("start");
// let people={
//     first:"bwiza",
//     last:"sano",
//     age:12,
//     get intro(){
//         return this.first+" "+this.last+" is "+this.age+" years old"
//      },
//      set firstp(uper){
//          this.first=uper.toLowerCase()
//     },
//      set lastp(upe){
//          this.last=upe.toUpperCase()
//      }
// }
//  people.firstp="bwiza";
//  people.lastp="chantal";
// console.log(people.intro);
// console.log("end");