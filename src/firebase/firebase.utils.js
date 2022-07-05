// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDGrKvdaAK8l-bcHnuxJISr9Pa23TGJCg4",
    authDomain: "raw-db-7d647.firebaseapp.com",
    projectId: "raw-db-7d647",
    storageBucket: "raw-db-7d647.appspot.com",
    messagingSenderId: "36395048556",
    appId: "1:36395048556:web:e42eeae9a28ff75485c249",
    measurementId: "G-CLM4SCMGEV"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt : 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;

