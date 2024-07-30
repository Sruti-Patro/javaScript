let btel = document.createElement("button");
btel.innerText = "Switch to dark mode";

let bodyel = document.querySelector("body");
bodyel.append(btel);

let isDark = false;

console.dir(document.body)
console.log(bodyel.style.backgroundColor);

btel.onclick = () => {
    if (isDark) {
        bodyel.style.backgroundColor="white";
        document.querySelector("p").style.color="black";
        isDark=!isDark;
        btel.innerText="Switch to dark mode";
        console.log(bodyel.style.backgroundColor);
    } else {
        bodyel.style.backgroundColor="black";
        isDark=!isDark;
        document.querySelector("p").style.color="white";
        btel.innerText="Switch to light mode";
        console.log(bodyel.style.backgroundColor);
    }
};

btel.addEventListener("click",()=>{
    if (isDark) {
        bodyel.classList.add("light");
        bodyel.classList.remove("dark");
        btel.innerText="Switch to light mode";
    } else {
        bodyel.classList.add("dark");
        bodyel.classList.remove("light");
        btel.innerText="Switch to dark mode";
    }
})