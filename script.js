
const searchBt = document.getElementById("searchcard");
const resultDis = document.getElementById("result")



async function loadCards(){
    const count = document.querySelector("input").value
    const cardtype = document.getElementById("cardtypes").value.toLowerCase();

    let id = 1
    let found = 0
    
    resultDis.innerHTML = "";
    while(found < count){
        let cards = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        let data = await cards.json();

    const types = data.types.map(t => t.type.name)
    if(types.includes(cardtype)){
    resultDis.innerHTML += `<br>
    Name: ${data.name} <br>
    Height: ${data.height}<br>
    Weight: ${data.weight}<br>
    <img src="${data.sprites.front_default}" width="120">`
    found++;
    }  
   
    id++;
    
    }

}

searchBt.addEventListener("click", ()=>{
    loadCards()
})
