import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB7sI-aool2txlkY1fUaHdFFI6F897OO24",
  authDomain: "clone-3900c.firebaseapp.com",
  databaseURL: "https://clone-3900c.firebaseio.com",
  projectId: "clone-3900c",
  storageBucket: "clone-3900c.appspot.com",
  messagingSenderId: "471556305849",
  appId: "1:471556305849:web:fce755c487714efee87c68",
  measurementId: "G-NFM82EYX4W"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();


{/*npm i firebase*/}
export {auth};