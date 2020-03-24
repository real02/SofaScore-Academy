const listaPokemona = document.getElementById("listaPokemona")
const cache = {}

const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`
    var res
    var data

    try {
        res = await fetch(url)
    } catch (error) {
        //print some message
    }
    try {
        data = await res.json()
    } catch (error) {
        //print some message
    }

    const pokemon = data.results.map((result, index) => ({
        ...result,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
    }))
    displayPokemon(pokemon)
}

const displayPokemon = (pokemon) => {
    const pokemonHTMLString = pokemon.map(poke => `
        <li>
            <div class="flex-container">
                <img onClick="selectPokemon(${poke.id})" style="width:120px;" src="${poke.image}" title="Click for more info"/>
                <h2>${poke.id}. ${poke.name}</h2>
                <span style="color:red" onclick="this.parentElement.style.display='none'" class="deleteButton">DELETE</span>
            </div>
        </li>
        `).join("")
    listaPokemona.innerHTML = pokemonHTMLString
}

const selectPokemon = async (id) => {
    if (!cache[id]) {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const res = await fetch(url)
        const pokemon = await res.json()
        cache[id] = pokemon
        console.log(cache)
        displayPopup(pokemon)
    }
    else {
        displayPopup(cache[id])
    }
}

const displayPopup = (pokemon) => {
    const type = pokemon.types.map(type =>
        type.type.name).join(', ')
    const image = pokemon.sprites['front_default']
    const htmlString = `
        <div class="popup">
            <button id="closeBtn" onClick="closePopup()">Close</button>
            <div class="card">
                <img class="card-image" src="${image}" />
                <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                <p><small>Height: </small>${pokemon.height} | <small>Weight: </small>${pokemon.weight} | 
                <small>Type: </small>${type}
            </div>    
        </div>
    `
    listaPokemona.innerHTML = htmlString + listaPokemona.innerHTML
    console.log(htmlString)
}

const closePopup = () => {
    const popup = document.querySelector(".popup")
    popup.parentElement.removeChild(popup)
}

fetchPokemon()
