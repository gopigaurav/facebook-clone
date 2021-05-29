import firebase from 'firebase';

// use the config object from firebase

const firebaseConfig = {
  apiKey: "AIzaSyD6iEwYYsGE8tQfmxhvCgy3wzxU3aISiKs",
  authDomain: "facebook-clone-d4b9c.firebaseapp.com",
  projectId: "facebook-clone-d4b9c",
  storageBucket: "facebook-clone-d4b9c.appspot.com",
  messagingSenderId: "152616007923",
  appId: "1:152616007923:web:4c359cc7341fb3d02f9f86",
  measurementId: "G-V9SGMVV584"
};

// initialize our app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initial database
const db = firebaseApp.firestore();

// set auth
const auth = firebase.auth();

// set provider
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;