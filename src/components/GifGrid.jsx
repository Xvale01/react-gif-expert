import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({value}) => {

    const {images, isLoading} = useFetchGifs(value);
    console.log({isLoading});
    
    return (
    <>
       <h3>{value}</h3>
       {
            //se pone null porque el null no se renderiza
            isLoading ? <h2>Cargando...</h2> : null

            //otra manera de hacerlo
            //isLoading && <h2>Cargando...</h2>
       }

       <div className="card-grid">
            {
                images.map(  (image) => (
                    <GifItem 
                        key={image.id} 
                        {...image} //pasamos todas las props de image
                        // image = {image} //pasamos toda la imagen
                        // title = {image.title}
                        // url = {image.url}
                    />
                ))
            }
       </div>

    </>
    )
}


//como hago para que cuando cambio mi estado no vuelva a hacer la peticion http
//use Effect sirve para disparar efectos secundarios, el efecto secundario sería algun proceso que se