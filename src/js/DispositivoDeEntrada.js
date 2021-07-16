export class DispositivosDeEntrada {
  _tipoEntrada;
  _marca;

  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get getTipoEntrada() {
    return this._tipoEntrada;
  }

  set setTipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  get getMarca() {
    return this._marca;
  }

  set setMarca(marca) {
    this._marca = marca;
  }
}
