import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBZapYZCaw0nj1XEVog2AaStVu4o-1gDWQ",
    authDomain: "mylorempicsum-14b91.firebaseapp.com",
    databaseURL: "https://mylorempicsum-14b91.firebaseio.com/",
    projectId: "mylorempicsum-14b91",
    storageBucket: "mylorempicsum-14b91.appspot.com",
    messagingSenderId: "1036843195016",
    appId: "1:1036843195016:web:a9897b2fa35ff6a9eb5d3d",
    measurementId: "G-LZBLR4VXB2"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();