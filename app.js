// Función que suma dos números
const sum = (a, b) => {
    return a + b;
}
console.log(sum(7, 3));

// Valores de conversión de un euro
let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07,  // US dollar
    "GBP": 0.87   // British pound
}

// Función que convierte euros a dólares
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs["USD"];
}

// Función que convierte dólares a yenes
const fromDollarToYen = function(dollars) {
    // Convertir dólares a euros
    const euros = dollars / oneEuroIs["USD"];
    // Convertir euros a yenes
    const yenes = euros * oneEuroIs["JPY"];
    return yenes;
}

// Función que convierte yenes a libras
const fromYenToPound = function(yenes) {
    // Convertir yenes a euros
    const euros = yenes / oneEuroIs["JPY"];
    // Convertir euros a libras
    const pounds = euros * oneEuroIs["GBP"];
    return pounds;
}

// Exportar todas las funciones
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
