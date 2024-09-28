const sum = (a,b) => {
    return a + b;
}
console.log(sum(7,3));
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(dollars) {
    //convertir los dólares a euros
    /*
    1.07dólares>1euro
dollars>x euros
X=dollars*1/1.07

    */ 
const euros = dollars*1/1.07;

    //convertir euros a yenes
    /*
    1euro>156.5yenes
euros>x yenes
X=euros*156.5/1
    */


const yenes = euros*156.5/1;
    //retornar yenes

    return yenes;    
}
const fromYenToPound = function(yenes) {
    // Convertir yenes a euros 
    const euros = yenes / oneEuroIs["JPY"];
    
    // Convertir euros a libras 
    const pounds = euros * oneEuroIs["GBP"];
    
    // Retornar el valor en libras
    return pounds;
}

module.exports = { sum, fromEuroToDollar }