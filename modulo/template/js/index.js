/* Pokemon iniciales */
const baseURL = 'https://pokeapi.co'
const endpoint = '/api/v2/pokemon/'
const url = `${baseURL}${endpoint}`

let contadorEtiqueta = 1;
const cargarPokemonInicial = async () => {
  const pokemonIds = [1,4,7,152,155,158, 252, 255, 258]
  for(let id of pokemonIds){
    const respuesta = await fetch(`${url}${id}`)
    const dato = await respuesta.json()
    let etiquetaClase = document.getElementsByClassName(`grid_article${contadorEtiqueta}`)
    etiquetaClase[0].innerHTML = `
      <figure>
        <img src=/assets/img/pokemon/${dato.id}.png alt=${dato.name}>
        <h3 class=flex_subtitulo> ${dato.name} </h3>
      </figure>
    `
    contadorEtiqueta++
  }
}
//Llamar funcion cuando cargue pagina
window.onload = cargarPokemonInicial()
