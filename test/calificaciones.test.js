const test = require('node:test');
const assert = require('node:assert/strict');
const { calcularPromedio, estaAprobado } = require('../src/calificaciones');

test('promedio 12, 14, 16 = 14', () => {
  assert.equal(calcularPromedio([12, 14, 16]), 14);
});

test('lanza error si no hay notas', () => {
  assert.throws(() => calcularPromedio([]), /Debe proporcionar al menos una nota/);
});

test('aprueba con promedio 11 o superior', () => {
  assert.equal(estaAprobado(11), true);
});

test('desaprueba con promedio menor a 11', () => {
  assert.equal(estaAprobado(10.5), false);
});
