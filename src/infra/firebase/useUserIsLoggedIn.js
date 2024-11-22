import { useEffect, createContext, useState, useContext } from 'react';

import { FirebaseRepository } from './FirebaseRepository';

const FirebaseAuthContext = createContext();

export const FirebaseAuthProvider = ({ children }) => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(null);
  const [loggedInAsGuest, setLoggedInAsGuest] = useState(false);

  useEffect(() => {
    setUserIsLoggedIn(FirebaseRepository.userIsLoggedIn());

    FirebaseRepository.addUserStateChangeEventListener((userIsLoggedIn) =>
      setUserIsLoggedIn(userIsLoggedIn)
    );
  }, []);

  function loginAsGuest() {
    setLoggedInAsGuest(true)
  }

  function doGuestLogout() {
    setLoggedInAsGuest(false)
  }

  return (
    <FirebaseAuthContext.Provider value={{ userIsLoggedIn, setUserIsLoggedIn, loggedInAsGuest, loginAsGuest, doGuestLogout }}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export const useUserIsLoggedIn = () => useContext(FirebaseAuthContext);

export default FirebaseAuthContext;
