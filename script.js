const temperature = document.querySelector(".temperature input");
const result = document.querySelector(".result input");
const inputTemperatureUnit = document.querySelector(".temperature select");
const resultTemperatureUnit = document.querySelector(".result select");

temperature.oninput = function() {
   let inputTemperatureUnitValue = inputTemperatureUnit.value;
   let resultTemperatureUnitValue = resultTemperatureUnit.value;
   let inputTemperatureValue = temperature.value;
   let convertTemperature = 0;

   //from celcius to other unit
   let CelciusToKelvin = inputTemperatureUnitValue === "Celcius" && resultTemperatureUnitValue === "Kelvin";
   let CelciusToFahrenheit = inputTemperatureUnitValue === "Celcius" && resultTemperatureUnitValue === "Fahrenheit";
   
   //from kelvin to other unit
   let KelvinToCelcius = inputTemperatureUnitValue === "Kelvin" && resultTemperatureUnitValue === "Celcius";
   let KelvinToFahrenheit = inputTemperatureUnitValue === "Kelvin" && resultTemperatureUnitValue === "Fahrenheit";
   
    //from fahrenheit to other unit
   let FahrenheitToCelcius = inputTemperatureUnitValue === "Fahrenheit" && resultTemperatureUnitValue === "Celcius";
   let FahrenheitToKelvin = inputTemperatureUnitValue === "Fahrenheit" && resultTemperatureUnitValue === "Kelvin";

   //from same unit to same unit
   let SameTemperatureUnits = inputTemperatureUnitValue === resultTemperatureUnitValue;


   if(CelciusToKelvin) {
    convertTemperature = (inputTemperatureValue * 1) + 273.15;
    result.value = convertTemperature.toFixed(2);
   }

   else if (CelciusToFahrenheit) {
    convertTemperature = 9/5 * (inputTemperatureValue * 1) + 32;
    result.value = convertTemperature.toFixed(2);
   }

   else if (KelvinToCelcius) {
    convertTemperature = (inputTemperatureValue - 273.15);
    result.value = convertTemperature.toFixed(2);
   }

   else if (KelvinToFahrenheit) {
    convertTemperature = 9/5 * (inputTemperatureValue - 273.15) + 32;
    result.value = convertTemperature.toFixed(2);
   }

   else if (FahrenheitToCelcius) {
    convertTemperature = 5/9 * (inputTemperatureValue - 32);
    result.value = convertTemperature.toFixed(2);
   }

   else if (FahrenheitToKelvin) {
    convertTemperature = 5/9 * (inputTemperatureValue - 32) + 273.15;
    result.value = convertTemperature.toFixed(2);
   }

   else if (SameTemperatureUnits) {
    result.value = inputTemperatureValue;
   }
}