import Kartya from "./Kartya.js";

export default class Jatekter {
  #lista = [];
  #taroloElem;
  constructor(lista, taroloElem) {
    this.#lista = lista;
    this.#taroloElem = taroloElem;
    this.#taroloElem.empty();
    this.galeriaKiIr();
  }
  galeriaKiIr() {
    this.#lista.forEach((elem) => {
      new Kartya(elem, this.#taroloElem);
    });
  }
}
