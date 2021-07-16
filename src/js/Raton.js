import { DispositivosDeEntrada } from "./DispositivoDeEntrada";

export class Raton extends DispositivosDeEntrada {
  _idRaton;
  static contadorRatones = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  get getIdRaton() {
    return this._idRaton;
  }

  toString() {
    return `Id raton: ${this._idRaton}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
  }
}

