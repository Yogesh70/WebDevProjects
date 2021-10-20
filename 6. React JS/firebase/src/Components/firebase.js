import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp(
    {
        apiKey: "AIzaSyCqK7LVW2zD3Z3xjhFc21MPF-JXWnSXIr4",
        authDomain: "class-demo-d1a95.firebaseapp.com",
        projectId: "class-demo-d1a95",
        storageBucket: "class-demo-d1a95.appspot.com",
        messagingSenderId: "466410307897",
        appId: "1:466410307897:web:294acc9d4c34b23e6128e8"
    })

export default firebase;