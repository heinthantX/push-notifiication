// Scripts for firebase and firebase messaging
importScripts(
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js'
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: 'AIzaSyCUcEOeSD4oa6a3IUytowcplQmmzoAOHKo',
  authDomain: 'shwekyar-mate.firebaseapp.com',
  projectId: 'shwekyar-mate',
  storageBucket: 'shwekyar-mate.appspot.com',
  messagingSenderId: '977742369232',
  appId: '1:977742369232:web:a3043711838a73a9a569d5',
  measurementId: 'G-D9L1G32S8P',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);
});
