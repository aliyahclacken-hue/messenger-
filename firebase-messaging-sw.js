importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js");

importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js");

firebase.initializeApp({

  apiKey: "AIzaSyA0seDdHj7OhNf6hx2-AZIDn1qhQpbFLTk",

  authDomain: "messenger-e50bf.firebaseapp.com",

  databaseURL: "https://messenger-e50bf-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "messenger-e50bf",

  storageBucket: "messenger-e50bf.firebasestorage.app",

  messagingSenderId: "751067866902",

  appId: "1:751067866902:web:2a705579192497a5a4d237"

});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {

  const title = payload.notification?.title || "New message";

  const options = {

    body: payload.notification?.body || "You have a new message.",

    tag: payload.data?.chatId || "message",

    data: payload.data || {}

  };

  self.registration.showNotification(title, options);

});
 self.addEventListener("notificationclick", event => {

  event.notification.close();

  event.waitUntil(clients.openWindow("./"));

});
