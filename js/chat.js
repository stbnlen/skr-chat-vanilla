const inputChat = document.getElementById('inputChat');

export const contenidoChat = (user) => {
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Si el Chat vacio
    if (!inputChat.value.trim()) {
      console.log('chao');
      return;
    }

    firebase
      .firestore()
      .collection('chat')
      .add({
        texto: inputChat.value,
        uid: user.uid,
        fecha: Date.now(),
        photo: user.photoURL,
      })
      .then((res) => console.log('mensaje guardado'))
      .catch((e) => console.log(e));

    inputChat.value = '';
  });

  firebase
    .firestore()
    .collection('chat')
    .orderBy('fecha')
    .onSnapshot((query) => {
      // console.log(query);
      contenido.innerHTML = '';
      query.forEach((doc) => {
        console.log(doc.data());
        if (doc.data().uid === user.uid) {
          contenido.innerHTML += /*html*/ `
            <div class="d-flex justify-content-end">
            <span class="badge badge-pill badge-primary">${
              doc.data().texto
            }</span>
            <span><img class="profile-photo" src=${user.photoURL} alt=${
            user.displayName
          } /></span>
            </div>
        `;
        } else {
          contenido.innerHTML += /*html*/ `
            <div class="d-flex justify-content-start">
            <span><img class="profile-photo" src=${doc.data().photo} alt=${
            user.displayName
          } /></span>
              <span class="badge badge-pill badge-secondary">${
                doc.data().texto
              }</span>
            </div>
          `;
        }
        contenido.scrollTop = contenido.scrollHeight;
      });
    });
};
