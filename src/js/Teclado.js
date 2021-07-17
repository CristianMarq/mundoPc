import { DispositivosDeEntrada } from "./DispositivoDeEntrada";

export class Teclado extends DispositivosDeEntrada {
  _id;
  static contadorTeclados = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._id = ++Teclado.contadorTeclados;
  }

  get getIdTeclado() {
    return this._idTeclado;
  }

  toString() {
    return `Id: ${this._id}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
  }
}
