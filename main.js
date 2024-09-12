import { KEPEK } from "./adatok.js";
import Kartya from "./Kartya.js";

const taroloElem = $(".galeria");
const kivElem=$(".kivalasztott")
new Kartya(KEPEK, taroloElem);

const kivalasztottKepeklista=[]

$(window).on("kiválaszt",()=>{
    console.log(event.detail)
    KEPEK.push(event.detail)
    console.log(kivalasztottKepeklista)
    new Kartya(kivalasztottKepeklista,kivElem)
})


const galeriaElem = document.getElementsByClassName("galeria")[0];
const nagykepImg = document.querySelector(".nagykep img");
const nagykepElem = document.querySelector(".nagykep");
const kiskepElemek = document.querySelectorAll(".kep");

for (let index = 0; index < kiskepElemek.length; index++) {
    kiskepElemek[index].addEventListener("click", katt)
    
}

function katt(event){
    nagykepImg.src = event.target.src
}
let aktIndex =  0;

const jobbgombElem = document.querySelectorAll(".jobb")
for (let index = 0; index < jobbgombElem.length; index++) {
    jobbgombElem[index].addEventListener("click", function() {
        if (aktIndex < KEPEK.length - 1) {
            aktIndex++;
        } else {
            aktIndex = 0;
        }
        nagykepImg.src = KEPEK[aktIndex].kep;
    });
}

const balgombElem = document.querySelectorAll(".bal")
for (let index = 0; index < balgombElem.length; index++) {
    balgombElem[index].addEventListener("click", function() {
        if (aktIndex > 0) {
            aktIndex--;
        } else {
            aktIndex = KEPEK.length - 1; 
        }
        nagykepImg.src = KEPEK[aktIndex].kep;
    });
}



