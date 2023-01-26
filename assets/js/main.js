const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 8
let offset = 0;


/* o fetch nos restorna uma promise, 
quando fazemos uma requisição http, a resposta demora, requisiçã>rede>interpretar|>devolver>passar pelo browser isso chamamos de processamento acincono, que é o processamento q vai ser executado e eu não tenho a resposta de imediato, e a promessa, nada mais é a promessa de um resultado. Pra processar o sucesso de uma promise usamos o metodo .then()   */
 
function loadPokemonItens(offset, limit) {
      
 /* codigo de consumo de API */
/* requisição htp pra buscar a lista de pokemons */
pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
        
            <div class="detail">
                <ol class="types">
               ${pokemon.types.map((type) => `<li class="types ${type}">${type}</li>`).join('')}
                </ol>

                 <img src="${pokemon.photo}"
                 alt="${pokemon.name}">

            </div>
        </li>
    ` ).join('')

    pokemonList.innerHTML += newHtml 
})
    
}

loadPokemonItens(offset, limit)


loadMoreButton.addEventListener('click',() => {
    offset += limit
    
    loadPokemonItens(offset, limit)
} )