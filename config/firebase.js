import firebase from 'firebase/app';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCGGw8RL0XcTZo003RWBDp52yADBDlNwlc',
    authDomain: 'tcl-14-smart-shopping-list.firebaseapp.com',
    databaseURL: 'https://tcl-14-smart-shopping-list.firebaseio.com',
    projectId: 'tcl-14-smart-shopping-list',
    storageBucket: 'tcl-14-smart-shopping-list.appspot.com',
    messagingSenderId: '939033171046',
    appId: '1:939033171046:web:53cbe6fd4e5a4f600b09a7',
  });
}
