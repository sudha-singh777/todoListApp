import firebase from 'firebase';
//import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCE5IsMpWHd5STAgQGm4yjG7sZjd7sRHGo",
    authDomain: "todo-app-9a245.firebaseapp.com",
    databaseURL: "https://todo-app-9a245-default-rtdb.firebaseio.com",
    projectId: "todo-app-9a245",
    storageBucket: "todo-app-9a245.appspot.com",
    messagingSenderId: "119218743474",
    appId: "1:119218743474:web:cabfb623b76ea5f5e841ab",
    measurementId: "G-J8GGWR2RDQ"
}

firebase.initializeApp(firebaseConfig);

export default firebase;