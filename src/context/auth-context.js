import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext({
  isLoggedIn: true,
  login: () => {},
  logout: () => {}
})

export const AuthProvider = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [ defaultBoard , setDefaultBoard ] = useState(1);

  const login = () => {
    
    navigate("board/"+defaultBoard);
    setIsLoggedIn(true); 
  }

  const logout = () => {
    localStorage.removeItem('token');
    navigate("login");
    setIsLoggedIn(false); 
  }
  const register = () => {
    navigate("Registerd");
    setIsRegistered(true);
    navigate("login");
  }
  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout, register}}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;