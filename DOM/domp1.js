// // console.dir(window, "s1");
// // console.dir(window.document, "s2");
// // console.dir(document, "s3");
// // console.dir(document.body, "s4");
// // console.dir(document.body.childNodes[1], "s5");
// // console.dir(document.body.childNodes[2].innerText="Gudli", "s6");
// // console.log(document.body.childNodes[2].innerText="Gudli", "s6");
// // document.body.childNodes[1].innerText="Gudli";
// // let hvalue= document.getElementById("header");
// // let butto=document.querySelector(".butt");
// // console.dir(butto);
// // /*
// // butto
// // <button class=​"butt">​hi​</button>​
// // butto.tag
// // undefined
// // butto.tagName
// // 'BUTTON'
// // */
// // let head2=document.querySelector(".head2");
// // console.dir(head2);
// // head2.innerText=head2.innerText+" From sruti Patro";
// // let divs=document.querySelectorAll(".box");
// let b=document.createElement("button");
// console.dir(b);
// b.innerText="click";
// let divdev=document.querySelector(".appen");
// // divdev.append(b);
// // divdev.prepend(b);
// // divdev.after(b);
// divdev.before(b);
// // let i=1;
// // for (const div of divs) {
// //     div.innerText=div.innerText+`${i}`;
// //     i++;
// // }
// // let identificationn=head2.getAttribute("class");
// // console.log(identificationn);
// //console.dir prints the object

let button=document.createElement("button");
button.innerText="click me!"
button.style.backgroundColor="red";
button.style.color="white";
document.querySelector("body").prepend(button);
button.onclick=()=>{
    document.querySelector("h1").innerHTML="hi";
}
