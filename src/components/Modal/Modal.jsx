import React from "react";

function Modal({ header, body, footer, onClose }) {
  return (
    <div className="modal">
      <div className="modal-header">
        <p>{header ? header : "Modal Header"}</p>
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
      </div>
      <div className="modal-body">
        <p>{body ? body : "Modal Body"}</p>
      </div>
      <div className="modal-footer">
        <p>{footer ? footer : "Modal Footer"}</p>
      </div>
    </div>
  );
}

export default Modal;
