import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDts7le77P_xfJKEmw-yEpdeBReCQ_W_A4",
  authDomain: "storypolis.firebaseapp.com",
  databaseURL: "https://storypolis-default-rtdb.firebaseio.com",
  projectId: "storypolis",
  storageBucket: "storypolis.appspot.com",
  messagingSenderId: "404235644704",
  appId: "1:404235644704:web:497364e6233874d052f145"
};
  firebase.initializeApp(firebaseConfig);

    export default firebase.firestore();
    