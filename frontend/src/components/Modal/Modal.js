import React, { useState, useEffect } from "react";

const Modal = (props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(props.propsModal.show);
  };

  const closeModal = () => {
    setShow(false);
  };
  useEffect(() => {
    console.log(props)
    handleShow();
  }, []);

  return (
    <>
      {show ? (
        <div className={show ? "m-modal" : "is-hidden m-modal"} id="m-modal">
          <div className="m-modal__content">
            <div className="m-modal__header">
              <div className="m-modal__title">{props.propsModal?.title}</div>
              <div className="m-modal--close" onClick={closeModal}>
                &times;
              </div>
            </div>
            <div className="m-modal__body">{props.content}</div>
            <div className="m-modal__footer">Pie del modal</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
