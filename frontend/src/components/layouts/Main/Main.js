import React from "react";

//Importamos el manejador de rutas
import { Switch } from "react-router-dom";

//Importamos los componentes
import AppRoute from "./../../Router/AppRoute";

//Importamos las rutas
import rutasGeneral from "./../../../config/routing/routes";



const Main = () => {

  return (
    <main className="g-main">
      <Switch>
        {rutasGeneral.map((rutaPadre) => {
          return rutaPadre.map((ruta) => {
            return (
              <AppRoute
                key={ruta.path}
                path={ruta.path}
                component={ruta.component}
                isPrivate={ruta.isPrivate}
              />
            );
          });
        })}
      </Switch>
      
    </main>
  );
};

export default Main;
