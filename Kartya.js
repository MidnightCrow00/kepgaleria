export default class Kartya {
  #obj = {};
  #szuloElem;
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.galeriaKiir();
    this.kepElem=$(".kivalaszt:last")
    this.esemenyKezelo();
  }

  galeriaKiir() {
    this.#szuloElem.append(`
          <div class ="kivalaszt card col-lg-3 col-md-4 col-sm-6"> 
            <div class="card-body">
              <img src ="${this.#obj.kep}" alt = "${this.#obj.cim}" class ="card-img-top">
            </div>
          </div>
    `);
  }

  esemenyKezelo() {
    this.#szuloElem.on("click", () => {
      const e = new CustomEvent("kivalaszt", { detail: this.#obj });
      window.dispatchEvent(e);
    });
  }
}
