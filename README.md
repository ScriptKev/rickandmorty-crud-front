# Rick and Morty CRUD (Frontend)

- ![This is a alt text.](./src/assets/images/app-screenshot.png "Rick And Morty CRUD - Frontend App")

Aplicación web basada en la serie rick and morty, en esta app podras apreciar información de la serie, mas en especifico de sus personajes, lugares y episodios.

La aplicación tiene la posibilidad de modificar la lista de personajes (nombre, estado y la especie) con las siguientes acciones:

- Crear personaje
- Actualizar personaje
- Borrar personaje

## Tecnologias

- React - Inicializado con [Create React App](https://github.com/facebook/create-react-app).
- Wouter - Usado como un enrutador minificado para aplicaciones modernas de React, basada en hooks.
- Styled Components - Usado para estilos basado en css-in-js.

## Como Funciona

Al inicializar la App, esta te llevara a la ruta ```/personajes``` como la ruta raiz, donde se hara una petición de personajes a la API [Rick And Morty CRUD - API](https://github.com/ScriptKev/rickandmorty-crud-api) la cual tomara la información de los personajes, lugares y episodios de un base de datos MySQL.

En caso de que nuestra base de datos este vacia, nuestra API realizara otra peticion a la API [Rick And Morty API](https://rickandmortyapi.com) donde tomara la información de los personajes, lugares y episodios, y los incertara en la base de datos para exponerlos a nuestra aplicacion cliente.

## Rutas

- ```/personajes```
- ```/lugares```
- ```/episodios```
- ```/``` es redirigido a la ruta ```/personajes```

En caso de que se dirija a una ruta no existente, se mostrara una pagina 404 Not Found.
