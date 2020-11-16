import firebase from 'firebase/app';
import 'firebase/firebase-storage';
import 'firebase/firebase-firestore';
import 'firebase/analytics';



var firebaseConfig = {
    apiKey: "AIzaSyDKWI1f4J_81Au_UX4Cp9MPrrYOsOAir_s",
    authDomain: "blanket-001.firebaseapp.com",
    databaseURL: "https://blanket-001.firebaseio.com",
    projectId: "blanket-001",
    storageBucket: "blanket-001.appspot.com",
    messagingSenderId: "1095318653360",
    appId: "1:1095318653360:web:d45a4d5fb7a2b0ef18ee75",
    measurementId: "G-FLBY5HH0CL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };


