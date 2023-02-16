/*    
      Author: Abraham V.S
      Date:   2/16/2023

      Filename: temperatureConversion.js
 */

function FahrenheitToCelsius (degree) {
      return (degree-32)/1.8
}

function CelsiusToFahrenheit(degree){
      return degree*1.8+32
}
      
var cValue = document.getElementById("cValue");
      cValue.onchange = function() {   
          var cDegree = cValue.value;
            document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
      };
      
var fValue = document.getElementById("fValue");
      fValue.onchange = function() {   
          var fDegree = fValue.value;
            document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
      };