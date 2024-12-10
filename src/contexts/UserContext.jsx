import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Custom hook to use UserContext
export const useUserContext = () => useContext(UserContext);

// UserProvider component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.log("Initializing UserContext...");
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setCurrentUser(parsedUser);
      console.log("UserContext initialized with:", parsedUser);
    } else {
      console.log("No user found in sessionStorage.");
    }
  }, []); // Runs only once on mount

  const setUser = (userData) => {
    if (userData) {
      sessionStorage.setItem('user', JSON.stringify(userData));
      setCurrentUser(userData);
    } else {
      sessionStorage.removeItem('user');
      setCurrentUser(null);
    }
  };

  return (
    <UserContext.Provider value={{ currentUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
