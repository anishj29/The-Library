import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCcNwGm6OIClebIx_K824lIfJkPeDssA54",
    authDomain: "la-project-3fd8e.firebaseapp.com",
    databaseURL: "https://la-project-3fd8e.firebaseio.com",
    projectId: "la-project-3fd8e",
    storageBucket: "la-project-3fd8e.appspot.com",
    messagingSenderId: "816345200412",
    appId: "1:816345200412:web:8d88e9041e10ec95396cd9",
    measurementId: "G-MQR88GMSTV"
});
export const db = firebase.firestore();
export default {
    auth: firebase.auth(),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        })
    },
    logout() {
      firebase.auth().signOut()
      .then(function() {})
      .catch(function(error) {
        console.log(error)});
    },

}
