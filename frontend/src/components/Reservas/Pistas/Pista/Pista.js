import React, { useState } from "react";

import Modal from "./../../../Modal/Modal";
import Horario from "./Horario";

const Pista = (props) => {
  const propsInitModal = {
    show: false,
    title: null,
  };
  const [pista, setPista] = useState(props.pista);
  const [showModal, setShowModal] = useState(false);
  const [propsModal, setPropsModal] = useState(propsInitModal);

  const handleModal = async (e) => {
    e.preventDefault();
    setPropsModal({
      show: true,
      title: pista.nombre,
    })

    if(showModal){
      await setShowModal(false);
    }
    
    await setShowModal(true);
  };

  return (
    <>
      <div className="m-reservas__pista" onClick={handleModal}>
        <img src="./img/pistas/default.svg" className="m-reservas__img" />
        <div className="m-reservas__pista--title">{pista.nombre}</div>
      </div>
      {showModal ? <Modal propsModal={propsModal} content={<Horario pista={pista}/>} /> : null}
    </>
  );
};

export default Pista;
