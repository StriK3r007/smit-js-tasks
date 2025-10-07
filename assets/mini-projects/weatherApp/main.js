// * Weather Data Fetch
// api = http://api.weatherapi.com/v1/current.json?key=539c403662ee408eb60151203250410&q=London&aqi=no
// const staticApi = "http://api.weatherapi.com/v1/current.json?key=539c403662ee408eb60151203250410&q=London&aqi=no"


let searchedLocations = []
const weatherLocations = [
    { city: "Quetta", country: "PK", temperature: "29C" },
    { city: "Karachi", country: "PK", temperature: "30C" },
    { city: "Islamabad", country: "PK", temperature: "25C" },
]

const weatherSearchButton = document.getElementById("weather-search-button")
const weatherSearchLocation = document.getElementById("weather-search")
const weatherRender = document.getElementById("weather-render")
// const weatherClearButton = document.getElementById("weather-clear-button")

// * currentDate and day
const getCurrentDate = () => {
    const today = new Date()
    const day = today.getDate()
    const month = today.toLocaleString('default', { month: 'short' }) // "Oct", "Nov", etc.
    const year = today.getFullYear()
    return `${day} ${month} ${year}`
}
const getDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date()
    const day = days[date.getDay()]
    return day
}


weatherSearchButton.addEventListener("click", () => {
    const cityLocation = weatherSearchLocation.value
    if(!cityLocation) {
        console.log("Please type city name")
        return
    }

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=539c403662ee408eb60151203250410&q=${cityLocation}&aqi=no`
    // const apiUrl = `http://api.weatherapi.com/v1/current.json?key={my_key_here}&q=${cityLocation}&aqi=no`

    fetch(apiUrl)
        .then((res) => { return res.json() })
        .then((data) => {

            // weatherObjects
            const location = data.location;
            const current = data.current; 

            if (cityLocation === location.name) {
                if (!searchedLocations.some(item => item.location.name === location.name)) {
                    searchedLocations.push(data)
                }
            }

            weatherRender.innerHTML = ''

            searchedLocations.forEach(item => {
                const location = item.location;
                const current = item.current;

                weatherRender.innerHTML += `
            <div class="flex flex-col justify-between h-80 w-full bg-gradient-to-r from-green-300 to-cyan-400 hover:from-green-400 hover:to-cyan-500 transition p-4 rounded-2xl mt-4">
                <div>
                    <div>
                        <span class="font-bold">${getDay()}</span>
                    </div>
                    <div>
                        <span>${getCurrentDate()}</span>
                    </div>
                    <div class="flex items-center mt-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>
                            </svg>
                        </span>
                        <div class="flex flex-col pl-2">
                            <span>
                                ${location.name}
                            </span>
                            <span>
                                ${location.region}, ${location.country}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="self-center">
                    <div class="flex flex-col justify-center items-center">
                        <div>
                            <img class="w-30" src="${current.condition.icon}" alt="">
                        </div>
                        <div class="text-2xl font-bold">${current.temp_c} °C</div>
                        <div class="font-semibold">
                            <span>${current.condition.text}</span>
                        </div>
                        <div class="font-light">
                            <span>Feels like ${current.feelslike_c} °C</span>
                        </div>
                    </div>
                </div>
            </div>
        
        `
            })
        }).catch((error) => {
            console.log(error)
        })
})
// weatherLocations.forEach(item => {
//     if(cityLocation === item.city) {
//         if(!searchedLocations.some(weatherLocations => weatherLocations.city === item.city)) {
//             searchedLocations.push(item)
//         }
//     }
// })