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
let titulo = document.getElementById("tituloH1");
let promedioGeneral;
let promedioMateria;
let promedioFinal;
let logo = document.getElementById("logo");
let sadSong = new Audio("./assets/sadSong.mp3");
let goodSong = new Audio("./assets/goodSong.mp3");

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
    goodSong.play();
    divResultados.innerHTML = `
        <div class="divResultados" id="divResultados">
        <h1 style="color: #00ff15;">APROBASTE</h1>
        <img id="imgGIF" src="./assets/personajeLoop.gif" alt="">
        <h1>${promedioGeneral.toFixed(1)}</h1>
        <p>La materia se pasa con ${promedioMateria}, por lo que podras dormir tranquilo esta noche.</p>
        <button><a href="./index.html">IR AL INICIO</a></button>
    </div>
    `;
    let imgGIF = document.getElementById("imgGIF");
    titulo.style.display = "none";
    // setTimeout(() => {imgGIF.src = "./assets/personajeBaile.gif"}, 8500)
  } else {
    divResultados.innerHTML = `
    <div class="divResultados" id="divResultados">
        <h1 style="font-family: 'Sixtyfour Convergence';">REPROBASTE</h1>
        <img src="./assets/personajeTriste.png" alt="">
        <h1>${promedioGeneral.toFixed(1)}</h1>
        <p>La materia se pasa con ${promedioMateria}, tendras que hacer examen final.</p>
        <button id="btn1">IR AL INICIO</button>
    </div>
    `;
    titulo.style.display = "none";
    sadSong.play();
    let btn1 = document.getElementById("btn1");
    let frases = [
      "",
      "QUIERES IR AL INICIO?",
      "ENSERIO?",
      "NOLOSE AMIGO",
      "VE A ESTUDIAR MEJOR",
      "LO DIGO ENSERIO, ME PREOCUPO POR TI",
      "ES DECIR...",
      "SE QUE NO ES FACIL PARA NINGUNO",
      "REALMENTE PARECIA QUE TE ESFORZABAS",
      "PERO HEY...",
      "TODOS MERECEMOS SEGUNDAS OPORTUNIDADES",
      "ASI QUE, INICIEMOS DE NUEVO",
      "PERO ESTA VEZ, EN SERIO, ESTUDIA",
      "BUENA SUERTE",
    ];
    let contador = 0;

    btn1.addEventListener("click", () => {
      contador++;
      btn1.innerHTML = frases[contador];
      if (contador > 12) {
        btn1.innerHTML =
          "IR AL INICIO";
          window.location.replace("./index.html");
          sadSong.pause();
      }
    });
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
