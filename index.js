let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let botonCalcular = document.getElementById("botonCalcular");
let promedioGeneral;

function mostrarCalificaciones() {
  let cf1 = Number(input1.value);
  let cf2 = Number(input2.value);
  let cf3 = Number(input3.value);
  promedioGeneral = ObtenerPromedioGeneral(cf1, cf2, cf3);

  console.log("Tu promedio general es " + promedioGeneral.toFixed(1))
  pasarCuatrimestre(8.5);
}

function ObtenerPromedioGeneral(a, b, c) {
  return (a + b + c) / 3;
}

function ObtenerPromedioFinal(promedioGeneral, examenFinal) {
  return (promedioGeneral + examenFinal) / 2;
}

function pasarCuatrimestre(promedioExentar) {
  if (promedioGeneral > promedioExentar) {
    console.log("Pasaste el cuatrimestre");
  } else {
    console.log("Tendras que hacer examen final");
  }
}
