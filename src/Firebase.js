// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import firestore from 'firebase/compat/firestore';
import {auth} from 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCH1faj3fDbZGyToIqt5q4pge6Gsf9KDxc",
    authDomain: "clone-2639c.firebaseapp.com",
    projectId: "clone-2639c",
    storageBucket: "clone-2639c.appspot.com",
    messagingSenderId: "933027311018",
    appId: "1:933027311018:web:b5f4fe75a0182292d44fd3",
    measurementId: "G-F3TS7284J1"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const authent=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export {db,authent,provider};