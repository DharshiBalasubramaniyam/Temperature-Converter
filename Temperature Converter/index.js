let celsius = document.getElementById("c");
let fahrenheit = document.getElementById("f");
let kelvin = document.getElementById("k");
let reset = document.getElementById("reset");

console.log(celsius);
console.log(fahrenheit);
console.log(kelvin);

celsius.addEventListener("input", () => {
    console.log(celsius.value);
    if (celsius.value.length!=0) {
        fahrenheit.value = ((celsius.value*9/5)+32).toFixed(2);
        kelvin.value  =  (parseFloat(celsius.value) + 273.15).toFixed(2);
    }

    else {
        fahrenheit.value = "";
        kelvin.value  = "";
    }
}) 


fahrenheit.addEventListener("input", () => {
    console.log(fahrenheit.value);
    if (fahrenheit.value.length!=0) {
        celsius.value = ((fahrenheit.value-32)*5/9).toFixed(2);
        kelvin.value  =  (((fahrenheit.value-32)*5/9)+273.15).toFixed(2);;
    }

    else {
        celsius.value = "";
        kelvin.value  = "";
    }
}) 

kelvin.addEventListener("input", () => {
    console.log(kelvin.value);
    if (kelvin.value.length!=0) {
        celsius.value = (parseFloat(kelvin.value) - 273.15).toFixed(2);
        fahrenheit.value  = ((parseFloat(kelvin.value) - 273.15)*9/5+32).toFixed(2);
    }

    else {
        celsius.value = "";
       fahrenheit.value  = "";
    }
})

reset.addEventListener("click", () => {
    celsius.value = "";
    fahrenheit.value  = "";
    kelvin.value  = "";
})