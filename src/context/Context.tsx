import React, { createContext, useEffect, useState } from 'react'

import { apiInterface } from '../constant/constant';

export const DatosContext = createContext<Array<apiInterface>>([])

type Props = {
    children: JSX.Element,
};


const Context = ({ children }: Props) => {

    const baseUrl = `https://api.spoonacular.com/recipes/random?apiKey=96c9a97fb35c4d8db9ca2aa681fe2f49&number=4&tags=`

    const [data, setData] = useState<Array<apiInterface>>([]);


    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(datos => setData(datos.recipes))
    }, []);

    return (
        <DatosContext.Provider value={data}>
            {children}
        </DatosContext.Provider>
    )
}

export default Context