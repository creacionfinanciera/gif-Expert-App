// normalmente las importaciones tienen un orden jerarquico, primero React, luego las importaciones de terceros, luego nuestros componentes, y finalmente funcinoes que no son propiamente componentes o hooks
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    
    // Esto es para el manejo através de custom hooks
    const { images, isLoading } = useFetchGifs( category );
    console.log({ isLoading });
    
    return (
        <>
            <h3>{ category }</h3>
            {/* esto es un condicional para que si una imagen no ha cargado, muestre la etiqueta de cargando, de lo contrario no mostraria esta etiqueta */}
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            
            
            
            
            {/* si queremos dar estilos a una etiqueta de html, no podemos asignar una clase como lo hacemos normalmente, sino que en React tenemos que usar 'className' */}
            {/* <div class="card-grid">*/}
            <div className="card-grid">
                {
                    // ahora vamos a cargar los títulos de las imagenes
                    // images.map( image => (
                    //     <li key={ image.id }>{ image.title }</li>
                    // ))

                    // mejor uso desestructuración
                    // y necesito usar tambien una llave única, que en este caso se que es el 'id'
                    // esta es una forma muy buena de hacerlo
                    // images.map( ( image ) => (  
                    //     <GifItem
                    //         key={ image.id }
                    //         title={ image.title }
                    //         url={ image.url }
                    //     />
                    // ))

                    // y esta es otra forma de hacerlo, esparciendo las properties
                    // este método sirve para que el 'GifItem' reciba cada uno de las propiedades que tiene la imagen como properties, lo podemos ver en la consola/components y dando clic en una de las imagenes
                    // esto es super util porque asi nosotros tuvieramos 100 propiedades en ese objeto, muy facilmente las esparcimos todas, y el componente tiene acceso a cualquier que le digamos en 'GifItem'
                    // esto no puede tener ';' despues del parentesis amarillo, porque genera error
                    images.map(( image ) => (
                        <GifItem
                            key={ image.id }
                            { ...image }
                        />

                    ))


                }
                

            </div>        
        </>    
    )
}