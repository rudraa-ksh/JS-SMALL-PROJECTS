function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;

    if (isNaN(temperature)) {
    document.getElementById("result").innerText = "Please enter a valid temperature.";
    return;
    }

    if (unit === "Celsius") {
    const Fahrenheit = (temperature * 9/5) + 32;
    document.getElementById("result").innerText = `Converted Temperature: ${Fahrenheit.toFixed(2)}°F`;
    } else {
    const Celsius = (temperature - 32) * 5/9;
    document.getElementById("result").innerText = `Converted Temperature: ${Celsius.toFixed(2)}°C`;
    } 
}