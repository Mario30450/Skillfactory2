import React from "react";
import PropTypes from 'prop-types';
import '../components/modal';

function Modal({ setOpenModal }) {
  

  return (
    
      <div className="modalContainer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            
          >
            -
          </button>
        
       
       
         </div>
    
  );
}

export default Modal;


Modal.propTypes= { 
  setOpenModal:PropTypes.func.isRequired

}
