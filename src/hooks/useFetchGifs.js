
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Un custom hook es un hook que yo voy a crear desde cero, usualmente lo que nosotros queremos con los hooks es que como eventualmente van a tener algún tipo de relación con algún estado o quiero reutilizar ciertas funcionalidades del mismo
// Usualmente los custom hook estan hechos de forma que les ayude a ustedes a ahorrarse un montón de código o mucha lógica en un componente, y ese custom hook lo van a poder reutilizar en otros hooks
// Nuevamente la idea es aplicar el principio "Don't repeat yourself"

export const useFetchGifs = ( category ) => {

    // sabemos que react cada vez que detecta un cambio en el componente lo vuelve a ejecutar para re dibujarlo, esto se refiere a que explicitamente React esta volviendo a ejecutar este componente, pero hay ciertas funciones especiales que pueden sobrevivir y mantener el estado, o ciertas funciones que le pueden decir a React, solo ejecutate una vez
    // con esta función, el segundo argumento en vacío [] permite que solamente se ejecute una vez en producción, a pesar de que en desarrollo se vea dos veces 
        
    // en este punto lo que queremos hacer es mostrar los títulos de todas las imagenes que estamos cargando, el 'getGifs' ya nos regresa las imagenes, y queremos usar esas imagenes para construir algo, en la sección del 'return'

    // una de las cosas a la que tal vez nos vamos a ver tentados es a tener un estado local dentro de este componente 'GifGrid', para mantener las imagenes que estan en 'useEffect', y ese estado tambien es preservado cuando se redibuja el componente
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, []);

    return {
        images: images,
        isLoading
    }

}
