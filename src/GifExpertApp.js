import { useState } from "react";
import CategoriaAdd from "./components/CategoriaAdd";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {

    const [ categorias, setCategorias ] = useState([''])

    // const agregarCategoria = () => {         
    //     // setCategorias([ ...categorias, 'Cocomiel']);
    //     setCategorias( categorias => [...categorias, 'Cocomiel'])  
    // }

    return (
        <>
            <h2>GifExpertApp</h2>

            {/* App hija */}
            {/* Envio setCategorias como propiedad de la App */}
            <CategoriaAdd setCategorias={ setCategorias } />
            <hr/>


            {/* Ciclo for en React */}
            <ol>
                { 
                    categorias.map(  categoria  =>
                         <GifGrid  
                         key= { categoria }
                         cat= { categoria } 
                         />
                    ) 
                }
            </ol>

        </>


    );

}



export default GifExpertApp