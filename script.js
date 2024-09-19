let input = document.querySelector(".inputValue");
let button = document.querySelector(".button");
let temp = document.querySelector(".temp");
let description = document.querySelector(".desc");

button.addEventListener('click', function() {
    let cityName = input.value; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=066aae5d0a559577204e81b10c8e7286`)
    .then(response => {
        if (!response.ok) {
            throw new Error('City not found'); 
        }
        return response.json();
    })
    .then(displayData)
    .catch(err => alert('Please enter a valid city'));
})

const displayData = (weather) => {
    // Convert Kelvin to Celsius and limit to 2 decimal points
    let tempInCelsius = (weather.main.temp).toFixed(2);
    
    // Update the temperature and description in the DOM
    temp.innerText = `${tempInCelsius}℃`;
    description.innerText = `${weather.weather[0].main}`;
}
