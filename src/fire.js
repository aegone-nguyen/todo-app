import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB8SvxSB-lnf7hWYK6vhs-nVbXL8-7i5Gc",
  authDomain: "todo-49837.firebaseapp.com",
  databaseURL: "https://todo-49837.firebaseio.com",
  projectId: "todo-49837",
  storageBucket: "todo-49837.appspot.com",
  messagingSenderId: "91346053035",
  appId: "1:91346053035:web:30e40cf462efcbb3fe14ee"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
