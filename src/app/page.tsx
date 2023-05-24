'use client';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { useEffect, useState } from 'react';

export default function Home() {
  const [currentToken, setCurrentToken] = useState('');
  const test = () => {
    const firebaseConfig = {
      apiKey: 'AIzaSyCUcEOeSD4oa6a3IUytowcplQmmzoAOHKo',
      authDomain: 'shwekyar-mate.firebaseapp.com',
      projectId: 'shwekyar-mate',
      storageBucket: 'shwekyar-mate.appspot.com',
      messagingSenderId: '977742369232',
      appId: '1:977742369232:web:a3043711838a73a9a569d5',
      measurementId: 'G-D9L1G32S8P',
    };

    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);
    getToken(messaging, {
      vapidKey:
        'BEoQ5U2Ds6F9M6TNLnD48GKDv0_6ruYqvfrb9IQ4uh-aTMUzFnlDld0mmCHj3BeitGRUzjEGR8kDKIX9wopDC-g',
    }).then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        setCurrentToken(currentToken);
        console.log(currentToken);
        onMessage(messaging, (payload) => {
          console.log(payload);
        });
      } else {
        console.log('Requesting permission...');
        Notification.requestPermission().then((permission) => {
          if (permission == 'granted') {
            console.log('Notification permission granted.');
          }
        });
        console.log(
          'No registration token available. Request permission to generate one.'
        );
        // ...
      }
    });
  };
  useEffect(() => {
    test();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className=" text-white">{currentToken}</h1>
    </main>
  );
}
