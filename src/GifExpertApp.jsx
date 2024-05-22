// no es necesario colocar la importación de React, después de la versión 17 de React, ya no es necesario estar importando React por todo lado, porque ya se sabe que estamos en un proyecto de 'React'
// import React from "react";

// recordemos que todas las aplicaciones de React no son más que un conjunto de componentes, un componente tiene dentro otros componentes, y así se va armando la aplicación
// la ventaja de trabajar con componentes es que si yo el día de mañana necesito reutilizarlo o poner ese mismo componente en otro lugar, simplemente lo uso, y si lo actualizo, lo actualizo en todos los lugares
// eventualmente tenemos que pensar que este componente 'GifExpertApp' hace referencia a toda la página que tenemos en el navegador
// esta aplicación vamos a dividirla en tres partes

import { useState } from "react";

// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";

// reorganizando las importaciones con el archivo de barril
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    
    // algo que nosotros vamos a ocupar es un listado de las categorías que quiero buscar, entonces quiero mantener un listado, y ese listado tengo que almacenarlo, y esa forma de almacenarla tiene que persistir conforme nosotros estamos trabajando en la aplicación, entonces cuando yo lo cambie de alguna manera tengo que volver a actualizar mi HTML
    // cuando queramos almacenar información y esa información tiene que cambiar el HTML, usualmente lo que ustedes primero deberían de pensar es , "necesitar algún Hook de React para mantener el estado"
    // usando useStateSnippet
    const [categories, setCategories] = useState([ 'One Punch' ]);
    
    const onAddCategory = (newCategory) => {
        // observamos que al darle clic al boton, el estado no cambia, por lo tanto no agrega el nuevo elemento
        // en React debemos suprimir la práctica de que el 'push' es lo que se usa para insertar elementos en un arreglo
        // la razón es porque el push es usado para mutar un objeto, y nosotros queremos evitar las mutaciones, y React hasta donde es posible, trata de no hacer mutaciones
        // categories.push('Valorant');

        // antes validamos si la nueva categoría ya existe en las categorias, si existe, le decimos que salga de la función
        // las mayusculas y las minúsculas, React las toma como letras diferentes, así que si queremos que las tome como igualesm tendriamos que convertirlas siempre a minusculas o mayusculas ...    
        if ( categories.includes( newCategory ) ) return;

        // entonces lo que tenemos que tratar de hacer es crear un nuevo arreglo, una forma de hacerlo es haciendo una copia de las categorías existente y luego agregar la nueva categoría
        setCategories([ newCategory, ...categories ]);

        // otra forma de hacerlo
        // setCategories( cat => [ ...cat, 'Valorant' ] );
    }

    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            {/* Lo ideal es que el componente 'AddCategory' me envíe directamente el valor del input que tengo que insertar, entonces vamos a hacer un ajuste */}
            <AddCategory
                // setCategories={ setCategories }
                // semantica: cuando tenemos un argumento, que inmediatamente se lo mandamos a una función, podriamos removerlos y dejar la función sola
                // onNewCategory={ event => onAddCategory(event) }
                onNewCategory={ onAddCategory }
            />

            {/* Listado de Gif */}
            {/* Para renderizar un listado basado en las categorías */}
            {/* <button onClick={ onAddCategory }>Agregar</button> */}
            
            {
                // como esta es una función de flecha que lo único que tiene es un return, no es necesario colocar el return de forma explicita, y quedaría de esta manera, sin el return y a cambio de las llaves, otro par de parentesis, es muy común verlo así
                categories.map( category => (
                    
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                
                    )
                    
                )

            }
            
        </>
    )
}