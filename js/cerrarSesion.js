export const cerrarSesion = () => {
  const btnCerrarSesion = document.getElementById('btnCerrasSesion');

  btnCerrarSesion.addEventListener('click', () => {
    firebase.auth().signOut();
  });
};
