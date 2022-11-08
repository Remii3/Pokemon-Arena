import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCjQSNDUxfMModEL-QuthIq014uWoy5aBw',
  authDomain: 'warhammer-adventure.firebaseapp.com',
  databaseURL:
    'https://warhammer-adventure-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'warhammer-adventure',
  storageBucket: 'warhammer-adventure.appspot.com',
  messagingSenderId: '940466416973',
  appId: '1:940466416973:web:3435fa5d95b6ddd6dcdb04',
};

const AuthPage = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigate = useNavigate();

  const rerouteClickHandler = () => {
    navigate('/src/pages/AdventurePage.jsx');
  };
  return (
    <div>
      <div className="w-100 mt-5 text-center">
        <button
          className="btn btn-lg btn-primary"
          onClick={() => rerouteClickHandler()}
        >
          Begin your journey
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
