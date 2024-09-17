export default class NagyKartya {
  #obj = {};
  #szuloElem;

  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.galeriaKiir();
    this.jobbELEM=$(".jobb")
    this.jobbELEM.on("click",()=>{ this.#esemenyTrigger("jobb")})
    this.balELEM=$(".bal")
    this.balELEM.on("click",()=>{ this.#esemenyTrigger("bal")})
  }

  galeriaKiir() {
    this.#szuloElem.append(`
          <button class="bal col-1"><<</button>
          <div class ="card col-10"> 
            <div class="card-body">
              <h3>${this.#obj.cim}</h3>
              <img src ="${this.#obj.kep}" alt = "${
      this.#obj.cim
    }" class ="card-img-top">
              <p>${this.#obj.leiras}</p>
            </div>
          </div>
          <button class="jobb col-1">>></button>
    `);
  }
  #esemenyTrigger(esemenynev){
    const e = new CustomEvent(esemenynev);
    window.dispatchEvent(e);
  }
  
}
