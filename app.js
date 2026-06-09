const Card = document.querySelector("#pokeKort")
// https://pokeapi.co/api/v2/pokemon/1/

let pokemon;

function ApiCall() {
    console.log(pokemon)
    const p = document.createElement("p")
    const text = document.createTextNode(pokemon.name);
    p.append(text)
    Card.appendChild(p)
}

async function Poke(u, index) {
    const res = await fetch(u + index);
    const data = await res.json();
    pokemon = await data;
    ApiCall()
}

let pokeurl = "https://pokeapi.co/api/v2/pokemon/"

for(let i = 0; i <= 1000; i++) {
    Poke(pokeurl, i)
    // pokeurl? console.log("jeg eksisterer"): console.log("jeg eksisterer ikke :(")
}


// let close = false
// while(close === false) {
//     console.log("hei på dei")
// }

// `hei hei ${}`