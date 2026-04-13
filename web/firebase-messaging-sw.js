importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCxAQxp_pdJBHoHhZqpJZdtOMJOQGVXps8",
  authDomain: "test-c2d1d.firebaseapp.com",
  projectId: "test-c2d1d",
  messagingSenderId: "978999179050",
  appId: "1:978999179050:web:e1dec8b57664b45cb8d053",
});

const messaging = firebase.messaging();