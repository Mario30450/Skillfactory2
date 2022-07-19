
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {



  const {imagenes, loading} = useFetchGif(category);
 
  return (
    <>
        
        {/* Desplegar Listado */}
        <div className="card-grid">
          {
            loading ? <h2 /* className= "animate__bounceOutRight" */>Going...</h2> :
            imagenes.map(imagen => <GifItem key={imagen.id} {...imagen} />)
          }
        </div>            
    </>
  )
}



GifGrid.propTypes= { 
  category:PropTypes.string.isRequired,

}
