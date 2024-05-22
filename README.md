# REPOSITORIO DE GIF-EXPERT-APP

## Creación del proyecto VITE

1. Creamos el proyecto VITE desde la terminal
2. Abrimos la carpeta del proyecto en VSC
3. Borramos todos los archivos de la carpeta SRC, y conservamos únicamente el archivo `main.jsx`
4. Creamos el archivo `GifExpertApp.jsx` dentro de la capeta `src`
5. Creamos el functional component básico en el archivo `GifExpertApp.jsx`
6. Modificamos el arhivo `main.jsx` con los datos de la nueva aplicación
7. Instalamos en el proyecto las dependencias de node => `npm install`
8. Ejecutamos el proyecto de vite para que nos de la url donde va a estar corriendo, y la abrimos en el navegador
9. Creamos el API Key que vamos a necesitar para el proyecto en la página `https://developers.giphy.com/dashboard/`
10. Esta es la API Key `Gif-Expert-App` que arrojó: `FBnLAWobSO8vIem6cIBErIKlw3wrEq8M`
11. Finalmente creamos el repositorio en Git y GitHub, y hacemos push para quedar sincronizados

## Fetch API - Obtener las imágenes deseadas

A través de éste proceso vamos a obtener las imagenes de nuestra API para llevar a nuestro componente:

1. Vamos a esta url: `https://developers.giphy.com/docs/api/endpoint/#search`
2. El endpoint que vamos a tomar es el de search => `api.giphy.com/v1/gifs/search`, y en la misma sección de la url de dónde tomamos el endpoint, explican cuales son los `query parameters` requeridos que se deben y se pueden adicionar al endpoint, en este caso los requeridos son:
    - `api_key`: string(required)
    - `q`: string(required)
3. Pero antes de que nosotros lo vayamos a programar en React, es importante que lo probemos y sepamos como funciona
4. Abrimos la aplicación de `POSTMAN` y nos autenticamos
5. Seleccionamos nuestro `Workspace` o creamos uno
6. Creamos una pestaña con el `+`
7. Para hacer la prueba del endpoint, lo copiamos y lo pegamos en `GET` y lo enviamos, pero nos sale un error porque pide los `query parameters requeridos`
8. Entonces en la tabla escribimos los query parameters, en este caso:
    - KEY: `api_key`, VALUE: `1EVyvJBCejfX5Jimgl5soBS4gsXnoUeO`
    - Si le damos enviar, nos devuelve cero data, porque falta el otro query parameter
9. Escribimos en la tabla el query parameter que falta:
    - KEY: `q`, VALUE: `valorant`
    - Si le damos enviar, nos devuelve todas las imagenes
10. Copiamos la url completa que nos arroja, y la llevamos al componente de nuestra aplicación






