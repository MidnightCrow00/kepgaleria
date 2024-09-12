import Jatekter from "./Jatekter.js";

export default class Kartya {
  #lista = [];
  #taroloElem;
  constructor(lista, taroloElem) {
    this.#lista = lista;
    this.#taroloElem = taroloElem;
    this.#taroloElem.empty()
    this.galeriaKiIr();
  }
  galeriaKiIr() {
    this.#lista.forEach((elem) => {
      new Jatekter(elem, this.#taroloElem);
    });
  }

}