//1.
let s="Sruti"
let n=29
console.log(s+n);
console.log("-------1-------");
//2.
console.log(typeof s);
console.log(typeof n);
console.log(typeof s+n); //reads the syntax as (typeof s) + n
console.log(typeof n+n);
//console.log(typeof,s+n); //error at ,
console.log(typeof (s+n));
console.log("-------2-------");

/*


Sruti29 //this Sruti29 is a string because n is concatinated to sting Sruti as a string and not as a no.
-------1-------
string
number
string29
number29
string
-------2-------

*/

//3.
const obj={
    a:1,
    b:"Sruti"
}
console.log(obj);
/* 
3a) can obj=657.65555?
    ans) no, because obj const achi
*/
/*
3b) can i add a no. 66 to obj?
    ans) no, but the following can be done
*/
obj.a=5 //allowed
obj.c=null //allowed
console.log(obj); //allowed
//obj={} //error during run time
//obj=55 //error during run time
/*
    obj is a refrence to the object obj
    obj can have string no etc in key value pair (line 45) but not individually (line 48)
    i can make changes in the existing obj either add a new par or change the value of an existing key (line 44)
    this obj reference can not asign a new obj lie 47
*/

console.table([s,n]);
// console.table([variable1, variable2, ... , etc])