import React, { useState, useEffect } from "react";


import useUser from "../../hooks/useUser";


const Logout = () => {

  const { isLogged, logout } = useUser();


  useEffect(() => {
      console.log(isLogged);
    if (isLogged) {
      logout();
      window.location.href = "/";
    }
  }, [isLogged]);
  return <></>;
};

export default Logout;
