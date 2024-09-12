export default class Jatekter {
    #obj={};
    #szuloElem;
    constructor(obj, szuloElem) {
        this.#obj=obj;
        this.#szuloElem= szuloElem;
        this.galeriaKiir();
        this.esemenyKezelo();

    }
    galeriaKiir(){
        this.#szuloElem.append(`
            <div class ="kep card col-lg-3 col-md-4 col-sm-6"> 
            <div class ="kep card-body"> 
            <h4 class="card-title">${this.#obj.cim}</h4>
            <img src ="${this.#obj.kep}" alt = "${this.#obj.cim}">
            <p>${this.#obj.leiras}</p>
            </div>
            </div>
            `)
    }
    
    esemenyKezelo() {
        this.#szuloElem.on("click", ()=>{
          const e=new CustomEvent("kiválaszt", {detail:this.#obj})
          window.dispatchEvent(e)
        });
      }
    
}