import { useState } from "react";

// export const AddCategory = ({ setCategories }) => {
export const AddCategory = ({ onNewCategory }) => {
    
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        // console.log( event.target.value );
        setInputValue( target.value );
    }

    // para evitar que se haga un refresh del navegador, al darle enter despues de escribir en el input del formulario
    const onSubmit = ( event ) => {
        event.preventDefault();
        // esta validación me sirve que al dar enter, estando vacío el input o con un solo caracter, no agregue un item vacío y me saque de la función
        const newInputValue = inputValue.trim();
        if ( newInputValue.length <= 1 ) return;
        // Así insertamos la nueva categoria
        // setCategories( categories => [ inputValue, ...categories ] )
        onNewCategory( newInputValue );
        
        // Asi borramos el input una vez se ha insertado la nueva categoria
        setInputValue('');
    }
    
    return (
        
        // Este código se puede resumir de la siguiente manera:
        // <form onSubmit={ (event) => onSubmit(event) }>
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}