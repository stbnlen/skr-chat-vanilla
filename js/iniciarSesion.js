export const iniciarSesion = () => {
  const btnAcceder = document.getElementById('btnAcceder');

  btnAcceder.addEventListener('click', async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  });
};
