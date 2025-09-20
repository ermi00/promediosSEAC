let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let inputE = document.getElementById("inputE");
let inputPregunta = document.getElementById("inputPregunta");
let botonCalcular = document.getElementById("botonCalcular");
let botonCalificacionExtra = document.getElementById("botonCalificacionExtra");
let divResultados = document.getElementById("divResultados");
let divCalificaciones = document.getElementById("divCalificaciones");
let divPregunta = document.getElementById("divPregunta");
let pInstruccion = document.getElementById("pInstruccion");
let promedioGeneral;
let promedioMateria;
let promedioFinal;
let logo = document.getElementById("logo");

divCalificaciones.style.display = "none";
divResultados.style.display = "none";
inputE.style.display = "none";

botonCalificacionExtra.addEventListener("click", () => {
  inputE.style.display = "block";
  botonCalificacionExtra.style.display = "none";
});

function mostrarCalificaciones() {
  let cf1 = Number(input1.value);
  let cf2 = Number(input2.value);
  let cf3 = Number(input3.value);
  let cfE = Number(inputE.value);
  promedioGeneral = obtenerPromedioGeneral(cf1, cf2, cf3);

  if (cfE != null) {
    obtenerPromedioFinal(promedioGeneral, cfE);
    console.log("Tu promedio es " + obtenerPromedioFinal(promedioGeneral, cfE));
  }

  divResultados.style.display = "flex";
  divCalificaciones.style.display = "none";
  pInstruccion.innerHTML = "";
  pasarCuatrimestre(promedioMateria);
}

function obtenerPromedioGeneral(a, b, c) {
  return (a + b + c) / 3;
}

function obtenerPromedioFinal(promedioGeneral, examenFinal) {
  promedioFinal = (promedioGeneral + examenFinal) / 2;
  return (promedioGeneral + examenFinal) / 2;
}

function pasarCuatrimestre(promedioExentar) {
  if (promedioGeneral >= promedioExentar) {
    divResultados.innerHTML = `<h1>${promedioGeneral.toFixed(
      1
    )}</h1><p>¡Aprobaste!</p>`;
  } else {
    divResultados.innerHTML = `<h1>${promedioGeneral.toFixed(
      1
    )}</h1><p>La materia se excenta con <strong>${promedioMateria}</strong>, por lo que tendras que hacer examen final.</p>`;
  }
}

function obtenerPromedioParaExcentar() {
  promedioMateria = inputPregunta.value;
  divCalificaciones.style.display = "flex";
  divPregunta.style.display = "none";
  console.log(promedioMateria);
  pInstruccion.innerHTML = "Ingresa tus calificaciones";
  logo.style.display = "none";
  return promedioMateria;
}
