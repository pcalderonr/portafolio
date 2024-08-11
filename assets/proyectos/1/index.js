
/*
Crear un formulario
Al enviar el formulario obtener la informacion
Crear un objeto pelicula
Agregar el objeto pelicula a el array de peliculas
Mostrar el Array por consola.
*/ 


let peliculas = [];

let formulario = document.querySelector("form");
let inputTitle = document.querySelector("#titulo");
let inputDescription = document.querySelector("#descripcion");
let inputUrl = document.querySelector("#url");

function crearPelicula(titulo,descripcion,imagen){
    let pelicula={};
    pelicula.titulo=titulo;
    pelicula.descripcion=descripcion;
    pelicula.imagen=imagen;
    return pelicula
}

function rederizar(){
    let html=`<div class="row">`;
    for (let index = 0; index < peliculas.length; index++) {
        const element = peliculas[index];
        html+=`<div class="col-4 mb-3"><div class="card">
        <img src="${element.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${element.titulo}</h5>
        <p class="card-text">${element.descripcion}</p>
        </div>
        </div>
        </div>`;
    }
    html+=`</div>`;
    document.querySelector("#galeria").innerHTML=html;
}

formulario.addEventListener("submit", event =>{
    event.preventDefault();
    let titulo = inputTitle.value;
    let imagen=inputUrl.value;
    let descripcion=inputDescription.value;
    let nueva_pelicula = crearPelicula(titulo,descripcion,imagen);
    peliculas.push(nueva_pelicula);
    console.log(peliculas);
    rederizar();
});
