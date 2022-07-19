import React, { useState } from "react";
import Modal from "./modal";
import PropTypes from 'prop-types';


export const GifItem = ({title, url}) => {

    const [modalOpen, setModalOpen] = useState(false);

  return (
     

     <div className="card">
            
          <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        +
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    
    <img src={url} alt="gif" />
            <p  data-testid="test-title" >{title}</p>
            
            </div>
  );
}

GifItem.propTypes= { 
  title:PropTypes.string.isRequired,
url:PropTypes.string.isRequired

}

GifItem.defaultPropos={
  title:'Gif',
  url: '...'
}
        
