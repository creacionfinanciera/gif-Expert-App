// Aqui deberíamos realizar una petición HTTP para traer la información del API, y con ese API poder tener en este componente una constante con un arreglo

export const getGifs = async(category) => {

    // importante colocar el principio el protocolo 'http://' porque la url viene de postman sin el protocolo
    // tambien al final sustituimos 'valorant' por la categoría    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=FBnLAWobSO8vIem6cIBErIKlw3wrEq8M&q=${ category }&limit=20`;

    // una vez tenemos el url vamos a hacer la petición http, y como es 'await', la función arriba debe ser 'async'
    const resp = await fetch( url );

    // a nosotros lo que nos interesa es tomar la 'data' que viene con las imagenes, nos damos cuenta que vienen 50, y solo queremos 20, entonces usamos el query parameter de limit en la url para modificarlo
    const { data } = await resp.json();
    
    // vemos que viene con muchisima información de la API, entonces vamos a extraer cierta información que necesitamos
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;

};