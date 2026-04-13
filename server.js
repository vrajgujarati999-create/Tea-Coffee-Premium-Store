// Firebase Authentication
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    // send user info to your server or save session
  })
  .catch((error) => {
    alert(error.message);
  });