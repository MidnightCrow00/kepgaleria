import { KEPEK } from "./adatok.js";
import Jatekter from "./Jatekter.js";

import NagyKartya from "./NagyKartya.js";

const taroloElem = $(".galeria");
const kivELEM = $(".kivalasztott");
let index = 0;

new NagyKartya(KEPEK[index],kivELEM)
new Jatekter(KEPEK, taroloElem);

$(window).on("kivalaszt",(event)=>{
    console.log(event.detail)
    //
    kivELEM.empty()
    index=event.detail.id
    new NagyKartya(event.detail,kivELEM)
 })
 
 $(window).on("jobb",(event)=>{  
     index++;
     if (index===KEPEK.length) {index=0}
     kivELEM.empty()
     new NagyKartya(KEPEK[index],kivELEM)
  })
  $(window).on("bal",(event)=>{  
     index--;
     if (index<0) {index=KEPEK.length-1}
     kivELEM.empty()
     new NagyKartya(KEPEK[index],kivELEM)
  })
