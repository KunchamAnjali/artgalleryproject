// UserContext.js

import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [registrationDetails, setRegistrationDetails] = useState(null);

  return (
    <UserContext.Provider value={{ registrationDetails, setRegistrationDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
