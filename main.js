const kelvin = 0; // the temperature is 293 kelvin
let celsius = kelvin - 273; // calculates celsius based on kevlin temp
let fahrenheit = Math.floor(celsius * (9/5) + 32) // converts celsius to fahrenheit and rounds down to whole number
let newton = Math.floor(celsius * (33/100))
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.')
console.log('The temperature is ' + newton + ' degrees Newton.')
