import React from "react";
import { Route } from "react-router-dom";

//import useUser from "./../../hooks/useUser";

const AppRoute = ({ component: Component, path, isPrivate, ...props }) => {

  //const { isLogged } = useUser();
  
  return (
    <Route
      exact path={path}
      render={(props) =>
        isPrivate /*&& !isLogged*/ ? (
          <div>Por favor, inicia sesión</div>
        ) : (
          <Component {...props} />
        )
      }
      {...props}
    />
  );
};

export default AppRoute;
