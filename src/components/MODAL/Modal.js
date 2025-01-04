import React from "react";
import "./Modal.css";

export const Modal = ({ onClose, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>what are you looking for???</h2>
        <p>you dont have enough money</p>
        <div className="modal-buttons">
          <button onClick={onClose}>back</button>
          <button onClick={onConfirm}>use deposit</button>
        </div>
      </div>
    </div>
  );
};
      
