import { cerrarSesion } from './cerrarSesion';
import { iniciarSesion } from './iniciarSesion';
import { contenidoChat } from './chat';
import '../style.css';

const $ = (e) => document.querySelector(e);

const botones = $('#botones');
const nombreUsuario = $('#nombreUsuario');
const contenido = $('#contenido');
const formulario = $('#formulario');

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    botones.innerHTML = /*html*/ `
      <button class="btn btn-outline-danger" id="btnCerrasSesion">Cerrar Sesion</button>
    `;
    nombreUsuario.textContent = user.displayName;
    cerrarSesion();
    formulario.classList = 'input-group fixed-bottom container py-3';
    contenidoChat(user);
  } else {
    console.log('no existe user');
    botones.innerHTML = /*html*/ `
      <button class="btn btn-outline-success mr-2" id="btnAcceder">Acceder</button>
    `;
    iniciarSesion();
    nombreUsuario.textContent = 'Chat';
    contenido.innerHTML = /*html*/ `
      <p class="text-center lead mt-5">Debes iniciar Sesion</p>
    `;
    formulario.classList = 'input-group fixed-bottom container py-3 d-none';
  }
});
