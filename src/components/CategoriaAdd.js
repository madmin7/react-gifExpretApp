import { useState } from "react";
import PropTypes from 'prop-types'


const CategoriaAdd = ({ setCategorias }) => {


    const [ valorInput, setvalorInput ] = useState('')

    const agarrarValorInput = ( e ) => {
        setvalorInput( e.target.value )
    }


    const agarrarSubmit = ( e ) => {
        e.preventDefault();

        // trim() --> quita los valores de adelante y de atras
        if ( valorInput.trim().length > 1 ){
            setCategorias( categorias => [  valorInput, ...categorias ] );
            setvalorInput('');
        }

    }

    return (
        <form onSubmit={ agarrarSubmit }>
            <input 
            type="text"
            value= { valorInput }
            onChange= { agarrarValorInput }
            />
        </form>
    )
            
}

CategoriaAdd.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default CategoriaAdd