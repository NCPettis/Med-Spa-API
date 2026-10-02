console.log('Med Spa')
// GOAL use the supplement API to get ingredients and food with that compound in it
// API UV Index - https://currentuvindex.com/api/v1/uvi?latitude=40.6943&longitude=-73.9249
// Secondary API - https://currentuvindex.com/api?ref=freepublicapis.com
// By the index determine if patients can get a skin treatment or not
// Desired API - https://verifiedsupplementdata.com/api/v1/recommend/{supplement}/all.json

// `https://api.geocod.io/v2/geocode?api_key=ad26dd29ad9fba7ef761c1fbd11173132d36db9&q=${zipCode}`
// KEY - ad26dd29ad9fba7ef761c1fbd11173132d36db9
document.querySelector('button').addEventListener('click', getCity)

function getCity(){
    const zipCode = document.querySelector("#cityInput").value

    fetch(`https://api.geocod.io/v2/geocode?api_key=ad26dd29ad9fba7ef761c1fbd11173132d36db9&q=${zipCode}`)
        .then(res => res.json())
        .then((data) => {
        console.log(data)

        let latt = data.results[0].location.lat
        let lon = data.results[0].location.lng


    fetch(`https://currentuvindex.com/api/v1/uvi?latitude=${latt}&longitude=${lon}`)
        .then(res => res.json())
        .then((data) => {
        console.log(data)


        })
    })
}