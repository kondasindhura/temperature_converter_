function convertTemp() {
    let tempInput = document.getElementById("tempInput").value;
    let tempSelect = document.getElementById("tempSelect").value;
    let result = document.getElementById("result");
    let convertedTemp;
  
    if (tempSelect === "celsius") {
      convertedTemp = (tempInput * 9/5) + 32;
      result.innerHTML = `${tempInput}°C = ${convertedTemp}°F`;
    } else if (tempSelect === "fahrenheit") {
      convertedTemp = (tempInput - 32) * 5/9;
      result.innerHTML = `${tempInput}°F = ${convertedTemp}°C`;
    } else if (tempSelect === "kelvin") {
      convertedTemp = tempInput - 273.15;
      result.innerHTML = `${tempInput}K = ${convertedTemp}°C`;
    }
  }