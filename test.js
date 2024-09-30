// Importar las funciones desde app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba para la función sum
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// Prueba para la función fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

// Prueba para la función fromDollarToYen
test("Converting 10 dollars should give the correct amount of yenes", function() {
    const yenes = fromDollarToYen(10);
    const expected = (10 / 1.07) * 156.5;
    expect(yenes).toBeCloseTo(expected); // Usamos toBeCloseTo para posibles decimales
});

// Prueba para la función fromYenToPound
test("Converting 1000 yenes should give the correct amount of pounds", function() {
    const pounds = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected); // También usamos toBeCloseTo para los decimales
});
