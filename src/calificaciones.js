// Funciones del sistema de estudiantes (UTP - Herramientas de Desarrollo)

function calcularPromedio(notas) {
  if (!Array.isArray(notas) || notas.length === 0) {
    throw new Error('Debe proporcionar al menos una nota');
  }
  return notas.reduce((a, b) => a + b, 0) / notas.length;
}

function estaAprobado(promedio) {
  return promedio >= 11;
}

module.exports = { calcularPromedio, estaAprobado };
