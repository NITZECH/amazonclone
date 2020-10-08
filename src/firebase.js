import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCVT8fNsrWefMzipSuK6qsab-GYI3jeOSQ",
    authDomain: "clone-nitzech.firebaseapp.com",
    databaseURL: "https://clone-nitzech.firebaseio.com",
    projectId: "clone-nitzech",
    storageBucket: "clone-nitzech.appspot.com",
    messagingSenderId: "361167054695",
    appId: "1:361167054695:web:8d23dfb22648e68eecf1c2",
    measurementId: "G-HDB88E8D17"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };