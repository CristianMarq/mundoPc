import { DispositivosDeEntrada } from "./DispositivoDeEntrada";

export class Raton extends DispositivosDeEntrada {
  _id;
  static contadorRatones = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._id = ++Raton.contadorRatones;
  }

  get getIdRaton() {
    return this._id;
  }

  toString() {
    return `Id raton: ${this._id}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
  }
}
