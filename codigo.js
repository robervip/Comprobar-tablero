var columna=Number(prompt(`Escribe un número de columna`));
var fila=Number(prompt(`Escribe un número de fila`));

if (columna>6 || columna<1) {
  console.log(`Ese numero de columna NO es válido`);
}

if (fila>6 || fila<1) {
  console.log(`Ese numero de fila NO es válido`);
}
