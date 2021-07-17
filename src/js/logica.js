import { Raton } from "./Raton";
import { Teclado } from "./Teclado";

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
    `<li>Id: ${objeto.id}, Tipo de entrada: ${objeto.tipoEntrada}, Marca: ${objeto.marca}`
  );
  return element;
};

const cargaForm = () => {
  form.onsubmit = (error) => {
    error.preventDefault();
    const tipoEntrada = document.querySelector("#tipo-entrada").value;
    const marca = document.querySelector("#marca").value;

    return { tipoEntrada, marca };
  };
};

const creaRaton = () => {
  const { tipoEntrada, marca } = cargaForm();
  const raton = new Raton(tipoEntrada, marca);
  const element = creaElemento(raton);
  ratones.append(element);
};

raton.addEventListener("click", creaRaton);
