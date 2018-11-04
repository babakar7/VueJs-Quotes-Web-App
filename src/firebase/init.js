
import firebase from 'firebase'
import firestore from 'firebase/firestore'
  // Initialize Firebase
  // Initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDkWc3CkxX35mbOmRDTGQ9pMp2UyWnvMb4",
    authDomain: "quotes-4cca1.firebaseapp.com",
    databaseURL: "https://quotes-4cca1.firebaseio.com",
    projectId: "quotes-4cca1",
    storageBucket: "quotes-4cca1.appspot.com",
    messagingSenderId: "414233891289"
  };
  const firebaseApp = firebase.initializeApp(config);

  firebaseApp.firestore().settings({timestampsInSnapshots:true})
//export firestore database
export default firebaseApp.firestore()
