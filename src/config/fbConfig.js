import firebase from 'firebase/app';
import 'firebase/firestore'; //import the db 
import 'firebase/auth';

const fbConfig = {
    apiKey: "AIzaSyC5SLm-hEfwUfdhixqioQisuMEpKJJMPaE",
    authDomain: "net-ninja-mario-plan-6c18b.firebaseapp.com",
    databaseURL: "https://net-ninja-mario-plan-6c18b.firebaseio.com",
    projectId: "net-ninja-mario-plan-6c18b",
    storageBucket: "net-ninja-mario-plan-6c18b.appspot.com",
    messagingSenderId: "862180046525",
    appId: "1:862180046525:web:65049f961edc5d13c629d4",
    measurementId: "G-9G245MKWXY"
  };

firebase.initializeApp(fbConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;