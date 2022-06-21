//Hooks: no son mas que funciones encargadas de cumplir con una tarea en especifico y que realizan 
//un retorno de informacion.

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };



    /*
     useEffect:
     este hook nos permite lanzar efectos secuandarios, lo entendemos como un proceso a ejecutar cuando
     suceda algo. UseEffect posee 2 argumentos, un callback y luego una lista de dependencias que permite
     volver a ejecutar este callback.
     [] vacio, significa que el hook se dispara la primera vez que se crea el componente
    */
    useEffect(() => {
        getImages();
    }, []);



    return {
        images,
        isLoading
    };
};
