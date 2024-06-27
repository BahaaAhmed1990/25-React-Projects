import React, { useState } from "react";
import Modal from "./Modal";
import "./styles.css";
function MoalParent() {
  const [openModal, setOpenModal] = useState(false);

  function handleClick() {
    setOpenModal(!openModal);
  }
  function handleClose() {
    setOpenModal(false);
  }
  return (
    <div>
      <button onClick={handleClick}>open modal</button>
      {openModal ? (
        <Modal
          header={<h1>Customize Header</h1>}
          body={<p>Customize Body</p>}
          footer={<h1>Customize Footer</h1>}
          onClose={handleClose}
        />
      ) : null}
    </div>
  );
}

export default MoalParent;
