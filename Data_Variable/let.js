//Let,var,const difference
var a="Sruti";
console.log(a); //Sruti in white
a=null
console.log(a); //null in bold white
a=undefined
console.log(a);
//undefined in blur grey text
console.log("-----------1------------"); 
// var is used as global variable
// Ex:1
var b='Gudli'
console.log(b);
{
    var b="sruti" //globally manipulates b
    console.log(b)
}
console.log(b)
/*
    Gudli
    sruti
    sruti
*/
console.log("-----------2------------");
// Ex:2 var let 
var b='Gudli'
console.log(b);
{
    let b="sruti" //b is changed in the particular block
    console.log(b)
}
console.log(b)
/*
    Gudli
    sruti
    Gudli
*/
console.log("-----------3------------");
// Ex:3 let let
let c='Gudli'
console.log(c);
{
    let c="sruti" //
    console.log(c)
}
console.log(c)
console.log("------------4-----------");
let aa=5
console.log(aa);
//let aa=70.56 //error as using let a var can be declared only once but possible using var
aa=70.56 //syntactically correct
console.log(aa);


var b=5
console.log(b);
var b=55.65
console.log(b);
//reason why in this set of code variables decalred using var and having same name execute without any error
//but in let each let statement must have different variable name
console.log("-----------5------------");
// const application
const author='Sruti'
console.log(author,"author");
//const author =5 //this statement shows error
//author='Random' //this statement shows error
//let author=5 //this statement shows error