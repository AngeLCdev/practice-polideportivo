import { useCallback, useContext } from "react";
import Context from "../context/UserContext";
//import axios from "axios";

export default function useUser() {
  const { jwt, setJWT } = useContext(Context);

  const login = useCallback(
    async (resLogin) => {
      window.sessionStorage.setItem("jwt", JSON.stringify(resLogin));

      const dataSession = {
        token: resLogin.token,
        username: resLogin.username,
      };
      setJWT(dataSession);
    },
    [setJWT]
  );

  const logout = useCallback(() => {
    sessionStorage.removeItem("jwt");
    setJWT(false);
  }, [setJWT]);

  if(sessionStorage.getItem("jwt")){
    var tokenJwt = sessionStorage.getItem('jwt');
  }else{
    var tokenJwt = {};
  }
   

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    tokenSession: tokenJwt,
  };
}
