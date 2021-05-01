import React, {useState, useEffect} from "react";

import Pistas from "./../Pistas/Pistas";
import Modal from "./../../Modal/Modal";

const GrupoPistas = () => {
    const [deportes, setDeporte] = useState();

    const getDeportes = async () => {
        const command = await fetch("http://localhost:4000/api/maestros/deportes")
                .then(res => res.json())
                .then(data => setDeporte(data));
    }

    useEffect(() => {
        getDeportes();
        
    }, [])
  return (
    <>
        
        {deportes ? deportes.map((deporte) => (
            <Pistas deporte={deporte} key={deporte._id}/>
        )): 'No hay deportes'}
    </>
  );
};

export default GrupoPistas;
