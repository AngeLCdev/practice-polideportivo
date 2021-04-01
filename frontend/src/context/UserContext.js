import React, { useState } from "react";

const Context = React.createContext({});

/*export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState();

  return <Context.Provider value={(jwt, setJWT)}>{children}</Context.Provider>;
}*/

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(
    () => window.sessionStorage.getItem('jwt')
  );

  //sessionStorage --> Hasta cerrar el navegador
  //localStorage --> Permanece aunque se ciere el navegador

  return (
    <Context.Provider
      value={{
        jwt,
        setJWT,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
