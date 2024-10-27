import { useEffect, createContext, useState, useContext } from 'react';

import { FirebaseRepository } from './FirebaseRepository';

const FirebaseAuthContext = createContext();

export const FirebaseAuthProvider = ({ children }) => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(null);

  useEffect(() => {
    setUserIsLoggedIn(FirebaseRepository.userIsLoggedIn());

    FirebaseRepository.addUserStateChangeEventListener((userIsLoggedIn) =>
      setUserIsLoggedIn(userIsLoggedIn)
    );
  }, []);

  return (
    <FirebaseAuthContext.Provider value={{ userIsLoggedIn, setUserIsLoggedIn }}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export const useUserIsLoggedIn = () => useContext(FirebaseAuthContext);

export default FirebaseAuthContext;
