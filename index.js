let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let botonCalcular = document.getElementById("botonCalcular");
let divResultados = document.getElementById("divResultados");
let promedioGeneral;
let promedioMateria;

divResultados.style.display = "none";

function mostrarCalificaciones() {
  let cf1 = Number(input1.value);
  let cf2 = Number(input2.value);
  let cf3 = Number(input3.value);
  promedioGeneral = ObtenerPromedioGeneral(cf1, cf2, cf3);

  divResultados.style.display = "flex"
  pasarCuatrimestre(8.5);
  cambiarResultados();
}

function ObtenerPromedioGeneral(a, b, c) {
  return (a + b + c) / 3;
}

function ObtenerPromedioFinal(promedioGeneral, examenFinal) {
  return (promedioGeneral + examenFinal) / 2;
}

function pasarCuatrimestre(promedioExentar) {
  if (promedioGeneral > promedioExentar) {
    divResultados.innerHTML = `<h1>${promedioGeneral.toFixed(1)}</h1><p>¡Aprobaste!</p>`;
  } else {
    divResultados.innerHTML = `<h1>${promedioGeneral.toFixed(1)}</h1><p>Tendras que hacer examen final</p>`;
  }
}
