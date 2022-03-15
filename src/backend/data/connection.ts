
import firebase from "firebase";
import "firebase/firestore"

if(!firebase.apps.length){
    firebase.initializeApp({
      apiKey: "AIzaSyDQs4bhmznBRPbMMtt545lnju6DCUYeNo8",
      authDomain: "routine-react-db.firebaseapp.com",
      projectId: "routine-react-db",
      storageBucket: "routine-react-db.appspot.com",
      messagingSenderId: "195255066075",
      appId: "1:195255066075:web:3accde9969361e34019bfe"
    })
}

export default firebase