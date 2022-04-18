//La importacion de react no es necesaria a no ser que queramos un archivos JSX
import { obtenerGif } from '../helpers/getGifs'
import { useState, useEffect } from "react"



export const useFetchGifs = ( cat ) => {

    const [ state, setState ] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        obtenerGif( cat )
                .then( imgs =>{
                        setState({
                            data: imgs,
                            loading: false
                        });
                })
            }, [ cat ])

    return state // { data: [], loading: true }

}

