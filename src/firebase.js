import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB86ndVGKcFeWoGVSv_c8aCaoY0akS5kkg",
    authDomain: "film-chatroom.firebaseapp.com",
    projectId: "film-chatroom",
    storageBucket: "film-chatroom.appspot.com",
    messagingSenderId: "956016781672",
    appId: "1:956016781672:web:ddddbe42eab3f486df4edd"
})

const db = firebaseApp.firestore()

export default {db}