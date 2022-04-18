import React from 'react' // 
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { obtenerGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({ cat }) => {

    const { data:imagenes , loading } = useFetchGifs( cat )

  return (
    <>
        <h3 className= "animate__animated animate__bounce animate__fadeIn"> { cat }</h3>

        { loading && <p className= "animate__animated animate__bounce animate__flash">Cargando...</p> }

        <div className="card-grid">
            {
                imagenes.map( img => (
                    <GifGridItem 
                        key={ img.id}
                        { ...img }
                    />
                ))
            }
        </div>
    </>
  );
}
