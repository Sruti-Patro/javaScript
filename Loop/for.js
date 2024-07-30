
let a=4;
// let a=prompt("Enter the number you want to see the N series upto:")
// a=Number.parseInt(a);
for(let i=1;i<=a;i++)
    console.log(i);
//console.log(i);
/*let obj={
    Sruti:9.43,
    Patro:10.0,
    Gudli:9.5
}
for(let a in obj){
    console.log("cgpa of "+a+" are "+obj[a]);
}
for(let a in obj){
    console.log(a);
}
// for(let a in obj){
//     console.log("cgpa of "+a+" are "+obj.a);
// } //error in obj.a
for(let a of "sruti"){
    console.log(a);
}

    cgpa of Sruti are 9.43
    cgpa of Patro are 10
    cgpa of Gudli are 9.5
    Sruti
    Patro
    Gudli
    s
    r
    u
    t
    i
*/
//for each: can be used for string, array, object
array=[1,2,3,4,5,6,7,8,9,10];
array.forEach(element => {
    console.log(element);
});
//for in: can be used for string, object
const object={
    name:"Sruti",
    age:20,
    profession:"BTech Student"
};
for (const key in object) {
    console.log(key,"------------");
    console.log(`the key -${key} and its value: ${object[key]}`);
}
//for of: can be used for string, array