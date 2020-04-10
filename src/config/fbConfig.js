import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC6-JFIydre4MVNSPDSU192gAJ99Kh8ZL8",
    authDomain: "net-ninja-marioplan-22fae.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-22fae.firebaseio.com",
    projectId: "net-ninja-marioplan-22fae",
    storageBucket: "net-ninja-marioplan-22fae.appspot.com",
    messagingSenderId: "398714476127",
    appId: "1:398714476127:web:3c1282c458d7e052b5adea",
    measurementId: "G-5VR8P3HK4K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots : true });

export default firebase