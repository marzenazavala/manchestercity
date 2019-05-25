import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDf-0xNWFicW9Cfmu30lr0VJu6ZmFmu9PE",
  authDomain: "mcity-b1053.firebaseapp.com",
  databaseURL: "https://mcity-b1053.firebaseio.com",
  projectId: "mcity-b1053",
  storageBucket: "mcity-b1053.appspot.com",
  messagingSenderId: "2518728857",
  appId: "1:2518728857:web:113e1817ac94daa2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches')

export {
    firebase,
    firebaseMatches
}