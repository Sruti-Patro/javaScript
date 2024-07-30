//nn bb ss u
let a=55.5
let b=null // typeof b is object
let c=false,d=true
let e=BigInt("456")
let i=BigInt("456")+BigInt("15")
let f="Sruti Patro"
let g=Symbol("i am a nice Symbol")
//symbol is used to distinguish components?? in reactjs??

let h=undefined
let j
console.log(a,b,c,d,e,f,g,h,i,j);
console.log(typeof g);
console.log(typeof null); //object
console.log(typeof undefined); //undefined
const obj={
    "Sruti":true,
    "Patro":"surname",
    "Gudli":55
}
console.log(obj["Sruti"],obj.Gudli);
// let abc = 12456781245678; x
let abc = 12456781245678n; //indicates implicit conversion to bignit
//typeof abc is undefined
const myFunction = function(){
    console.log("Sruti");
} // typeof myFunction is function (function object)