import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


// a diferencia de un functional component que se recibirian props, aqui se pueden recibir 
// un objeto pero debe desestructurarse o argumentos posicionales
export const useFetchGifs = (value) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true); //cuando se carga por primera vez 

    //getImages debe ser llamado de alguna manera en el useEffect si no se quiere que se dispare x cantidad de veces
    const getImages = async() => {
        const newImages = await getGifs(value);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( ()=> {
        getImages();
    },[])

    //tambien se puede hacer de la siguiente manera:
    // useEffect( ()=> {
    //    getGifs(value)
    //         .then(newImages => setImages(newImages));
    // },[])

    return {
        images,
        isLoading
    }
}

//un hook no es mas que una funcion que devuelve algo
//dejo de ser un functional component porque no devuelve un jsx


//Ahora las imagenes se encuentran en el hook y no en las props