import { DispositivosDeEntrada } from "./DispositivoDeEntrada";

export class Teclado extends DispositivosDeEntrada {
  _idTeclado;
  static contadorTeclados = 0;

  constructor(entrada, marca) {
    super(entrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }

  get getIdTeclado() {
    return this._idTeclado;
  }

  toString() {
    return `Id: ${this._idTeclado}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
  }
}


