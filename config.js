import firebase from 'firebase';
require('@firebase/firestore')

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCe5mA6VBaeot_bC8g3zZ0G2tJs6qW8eLY",
    authDomain: "book-santa-a704d.firebaseapp.com",
    databaseURL: "https://book-santa-a704d.firebaseio.com",
    projectId: "book-santa-a704d",
    storageBucket: "book-santa-a704d.appspot.com",
    messagingSenderId: "958841473860",
    appId: "1:958841473860:web:e6f812e7dd71d1979f2511"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  export default firebase.firestore();