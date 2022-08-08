import firebase from 'firebase';

// use the config object from firebase

const firebaseConfig = {
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
