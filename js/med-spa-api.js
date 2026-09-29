console.log('Med Spa')
// GOAL use the supplement API to get ingredients and food with that compound in it
// API UV Index - https://currentuvindex.com/api/v1/uvi?latitude=40.6943&longitude=-73.9249
// Secondary API - https://currentuvindex.com/api?ref=freepublicapis.com
// By the index determine if patients can get a skin treatment or not

document.querySelector('button').addEventListener('click', getCity)
let city = document.querySelector("#cityInput").value

function getCity(){
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&language=en&format=json`)
        .then(res => res.json())
        .then((data) => {
        console.log(data)








        })
    }