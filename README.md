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

# GENERANDO EL BUILD DE PRODUCCION Y DESPLIEGUES

El `Build de producción` que vamos a hacer acá es lo que usualmente ustedes van a usar para crear la aplicación final de su aplicación, obviamente después de haber ejecutado todas las pruebas, y lo vamos a desplegar en github pages, tambien les voy a enseñar a utilizar git, porque hay que ponerlo ahí, si queremos desplegarlo en github.

## Desplegar en Netlify

1. `npm run dev` => para abrir la aplicación 
2. Asegurense antes de hacer algún despliegue en producción asegurense de que su aplicación esté lista
3. `control + c` => para cerrar la aplicación
4. Cerrar la ventana del navegador
5. Si previamente habiamos creado una carpeta `dist` de distribución para cualquier otra cosa, tenemos que eliminarla, y si nos fijamos en el archivo `.gitignore` esta carpeta tambien está ignorada, porque usualmente cualquier procedimiento que se ejecute, o cualquier archivo o carpeta que yo pueda generar mediante algún procedimiento, es decir, el `yarn build`, entonces no vale la pena tenerla en el repositorio, porque es código volatil, es decir, ya el día de mañana vuelvo hacer un 'build' y toda la información que esta en el repositorio no me interesa.
6. Ahora, es diferente a manejar las versiones de producción, usualmente cuando ustedes suben alguna versión de su aplicación de React por ejemplo, lo que ustedes van a querer hacer es crear algun tipo de versión de producción que ya esta lista, o la versión que nosotros desplegamos, por si acaso la nueva versión salió mal, ustedes simplemente puedan regresar a otras versiones, pero eso ya es propio de git.
7. Entonces, generamos la carpeta de distribución => `npm run build` y se genera automaticamente la carpeta `dist` en VSC
8. Vamos al siguiente link => `https://www.netlify.com/`, es totalmente gratuita la parte del servicio para hacer aplicaciones o despliegue de aplicaciones que no tengan un `backend`, es decir, nosotros estamos creando aplicaciones de React y eso es puro `frontend`, y todo ese frontend lo podemos desplegar aqui sin ningún problema. Es muy buena para nosotros probar rapidamente nuestra aplicación de producción, es muy rápido, es más rápido inclusive que hacer el 'http server' que les mostré en la sección pasada. Que no tengan backend signfica que el servidor del backend de la aplicación no está corriendo en 'Netlify', esta corriendo en otro lugar.
9. Creamos la cuenta ... nos autenticamos, sincronizamos con github y nos lleva al dashboard
10. Damos clic en `sites`, vamos a la carpeta `dist` de nuestra aplicación en el finder y la arrastramos hacia el espacio de netlify donde se importan las aplicaciones
11. Le damos `get started` y hace el despliegue, arrojandonos un link que podremos usar para ver nuestra aplicación
12. Si queremos cambiarle el dominio a la aplicación => `Site configuration/Site details/Change site name` y le cambio el nombre a uno único `gif-expert-app-kentor`
13. Si queremos volver a desplegarlo => `dashboard/Sites`, seleccionamos el sitio desplegado anteriormente, y arrastarmos nuevamente la carpeta `dist`, y listo, actualiza

## Preparación del proyecto - Git

Cuando ustedes esten trabajando en un proyecto, definitivamente les voy a recomendar fuertemente que usen algún tipo de control de versiones.

1. Primero tenemos que asegurarnos que tenemos un archivo `.gitignore`, que ya viene creado por defecto al momento de crear la aplicación, en este archivo ya se incluyen un monton de archivos que no necesitan ser parte del repositorio, porque son logs de mi computadora, los módulos de node, que si los borro accidentalmente los puedo reconstruir con `npm install` y listo
2. Iniciamos nuestro repositorio en git => `git init`
3. Preparamos todos los archivos del proyecto que tenemos hasta el momento que se hayan modificado => `git add .`
4. Hacemos el commit => `git commit -m "Primer commit"`
5. Si accidentalmente elimino algunos archivos de mi proyecto, despues de haber hecho el commit, puedo recuperar lo hecho hasta el último commit así => `git checkout -- .`

## Subir a Github

Cómo nota adicional a este procedimiento `git push -u origin main` es para establecer la rama origin como repositorio remoto por defecto de est repositorio local, esto debe hacerse para el primer 'push', pero de aqui en adelante podemos seguir utilizando el comando sin '-u', con este comando `git push origin main`.

## Desplegando aplicación en Github Pages

Si nosotros nos podemos analizar todos los archivos que tenemos en nuestra carpeta del proyecto, realmente no son nuestra aplicación de React, lo que tenemos es un proyecto de `Node` que nos sirve para generar nuestra aplicación que utiliza React, realmente el producto final es crear la aplicación que usa react, que se encuentra dentro de la carpeta `dist`.

Si nosotros cogieramos todo nuestro repositorio en `github` y lo trataramos de desplegar, no funcionaría, porque es un proyecto de Node.

Entonces si vamos en nuestro repositorio de `github` a `settings` y `pages`, tenemos información al respecto de que podemos desplegar.

Hay varias formas de desplegar en Github pages:
1. Cambiarle el nombre a la capeta `dist` por `docs`, por lo que el archivo `.gitignore` esta ignorando `dist`
2. Hacemos commit en git
3. Subimos los cambios a github
4. Vamos al repositorio en `github`, `settings`, `pages`
5. Seleccionamos la rama `main` y la carpeta `/docs`, y boton `save`. Esto es rapido pero se podria demorar hasta 15 minutos en algunos casos, no podremos entrar hasta que el recuadro azul, aparezca en verde.
6. Saco el link y cuando trate de abrirlo, me sale en blanco la página y unos errores:

`Failed to load resource: the server responded with a status of 404 ()` => index-D2LwPvR8.js:1
`Failed to load resource: the server responded with a status of 404 ()` => index-DQ2fAogY.css:1

Y esto es porque no esta tomando el directorio de la carpeta dónde se encuentran estos dos archivos dentro de la carpeta `docs`, y lo podemos arreglar de dos maneras:

1. Vamos al archivo `index.html` que se encuentra en la carpeta `docs` y corregimos agregando el punto a la dirección de los directorios:
`<script type="module" crossorigin src="./assets/index-D2LwPvR8.js"></script>`
`<link rel="stylesheet" crossorigin href="./assets/index-DQ2fAogY.css">`






