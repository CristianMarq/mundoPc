import "./styles.css";
import { Raton } from "./js/Raton";
import { Teclado } from "./js/Teclado";

const form = document.querySelector("#form-dispositivo");
const teclado = document.querySelector("#teclado");
const teclados = document.querySelector("#teclados");
const raton = document.querySelector("#raton");
const ratones = document.querySelector("#ratones");

const stringToHtml = (string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(string, "text/html");
  return doc.body.firstChild;
};

const creaElemento = (objeto) => {
  const element = stringToHtml(
    `<li data-id="${objeto._id}">Tipo de entrada: ${objeto._tipoEntrada}, Marca: ${objeto._marca}`
  );
  return element;
};

const cargaFormRaton = () => {
  form.onsubmit = (error) => {
    error.preventDefault();
    const tipoEntrada = document.querySelector("#tipo-entrada").value;
    const marca = document.querySelector("#marca").value;

    creaRaton(tipoEntrada, marca);
  };
};

const cargaFormTeclado = () => {
  form.onsubmit = (error) => {
    error.preventDefault();
    const tipoEntrada = document.querySelector("#tipo-entrada").value;
    const marca = document.querySelector("#marca").value;

    creaTeclado(tipoEntrada, marca);
  };
};

const creaRaton = (tipoEntrada, marca) => {
  const raton = new Raton(tipoEntrada, marca);
  const element = creaElemento(raton);
  ratones.append(element);
};

const creaTeclado = (tipoEntrada, marca) => {
  const teclado = new Teclado(tipoEntrada, marca);
  const element = creaElemento(teclado);
  teclados.append(element);
};

raton.addEventListener("click", cargaFormRaton);
teclado.addEventListener("click", cargaFormTeclado);
