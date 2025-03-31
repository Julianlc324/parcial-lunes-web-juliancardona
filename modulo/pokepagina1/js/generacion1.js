/* Pokemon iniciales */
const baseURL = 'https://pokeapi.co'
const endpoint = '/api/v2/pokemon/'
const url = `${baseURL}${endpoint}`

/* Buscador pokémon */
const obtenerPokemon =  () => {
	let obtenerCampo = document.getElementById('busca_pokemon')
	let valor = obtenerCampo.value
	buscaTuPokemon(valor)
}

const buscaTuPokemon = async (pokemon) => {
	const respuesta = await fetch(`${url}${pokemon}`)
  const dato = await respuesta.json()
	let etiquetaClase = document.getElementsByClassName(`article_buscar`)
	etiquetaClase[0].innerHTML = `
		<figure class=cajon_pokemon>
			<img src=/assets/img/pokemon/${dato.id}.png alt=${dato.name}>
		</figure>
		<div class=cajon_dato> 
			<h3> Numero ID: ${dato.id} </h3> 
			<h3> Nombre: ${dato.name} </h3>
			<h3> Altura: ${(dato.height)/10} </h3>
			<h3> Peso: ${(dato.weight)/10} </h3>
		</div>	
	`
}

/* Carga los 151 pokémon */
const cargarPokemonGeneracion1 = async () => {
  for(let i=1; i<=151; i++){
    const respuesta = await fetch(`${url}${i}`)
    const dato = await respuesta.json()
    let etiquetaClase = document.getElementsByClassName(`article${i}`)
    etiquetaClase[0].innerHTML = `
      <figure>
        <img src=/assets/img/pokemon/${dato.id}.png alt=${dato.name}>
        <h3 class=flex_subtitulo> Nº pokémon ${dato.id} </h3>
				<h3 class=flex_subtitulo > ${dato.name} </h3>
      </figure>
    `
  }
}
//Llamar funcion cuando cargue pagina
window.onload = cargarPokemonGeneracion1()