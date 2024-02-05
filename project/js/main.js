
function convertToFahrenheit(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

let temperatureHistory = [];

while (true) {
    let userInput = prompt("Enter temperature in Fahrenheit (type 'exit' to end):");
    if (userInput.toLowerCase() === 'exit') {
        break; // Exit the loop if the user types 'exit'
    }
    let fahrenheitTemperature = parseFloat(userInput);
    if (!isNaN(fahrenheitTemperature)) {
        let celsiusTemperature = convertToFahrenheit(fahrenheitTemperature);
        let resultMessage = `${fahrenheitTemperature} degrees Fahrenheit is ${celsiusTemperature.toFixed(2)} degrees Celsius.`;
        temperatureHistory.push(resultMessage);
        console.log(resultMessage);
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
}
console.log("Temperature History Log:");
temperatureHistory.forEach((entry, index) => {
    console.log(`${index + 1}. ${entry}`);
});