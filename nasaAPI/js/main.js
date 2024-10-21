const button = document.querySelector('#beginBtn')
button.addEventListener('click', getFacilities)
function getFacilities(){
button.classList.add('hidden')
const urlUno = `https://data.nasa.gov/resource/gvk9-iz74.json`
fetch(urlUno)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        const parentItem = document.querySelector('#facilitiesLocation')
        data.forEach(element => {
            const cityName = element.city
            const stateName = element.state
            const siteName = element.center
            const lat = element.location.latitude
            const lon = element.location.longitude
            const apiKey = 'fbc503b9b374492ab4914412241810'
            const urlDos = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`
            const li = document.createElement('li')
            parentItem.appendChild(li)
            // li.textContent = `${siteName} - ${cityName} - ${stateName}`

            fetch(urlDos)
                .then(res => res.json())
                .then(data => {
                    const temp = data.current.temp_f
                    const condition = data.current.condition.text
                    //weather forecast data api
            
                    // const 
                    li.textContent = `${siteName} - ${cityName} - ${stateName} ---- Conditions are ${condition} at ${temp} °F` 
                })

        })
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
