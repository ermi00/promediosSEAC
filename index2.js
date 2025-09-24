let promedio;
let promedioFinal;
let promedioParaExcentar;
let contadorDecimas = 8;
let contador = 0;

let pregunta = document.getElementById("inputPregunta");
let btnPregunta = document.getElementById("botonPregunta");
let btnAumentar = document.getElementById("btnAumentar");
let btnDisminuir = document.getElementById("btnDisminuir");
let promedioh2 = document.getElementById("promedioh2");
let divPregunta = document.getElementById("divPregunta");
let divCalificaciones = document.getElementById("divCalificaciones");
let divPresentacion = document.getElementById("divPresentacion");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let botonCalificacionExtra = document.getElementById("botonCalificacionExtra");
let botonCalcular = document.getElementById("botonCalcular");
let h1Resultado = document.getElementById("h1Resultado");
let imgResultado = document.getElementById("imgResultado");
let pResultado = document.getElementById("pResultado");
let tituloh1 = document.getElementById("tituloh1");
let divResultados = document.getElementById("divResultados");
let goodSong = new Audio("./assets/goodSong.mp3");
let badSong = new Audio("./assets/badSong.mp3");
let songBackground = new Audio("./assets/songBackground.mp3");
let soundSelect = new Audio("./assets/soundSelect.mp3");
let soundError = new Audio("./assets/soundError.mp3");

function decision() {
  if (promedio >= promedioParaExcentar) {
    goodSong.play();
    divResultados.innerHTML = `
      <h1 id="h1Resultado" style="font-family: 'Sixtyfour'; color: cyan; ">APROBASTE</h1>
      <img id="imgResultado" src="./assets/personajeCelebrando.gif" alt="personaje">
      <h1 id="h1Resultado" style="font-family: 'Sixtyfour'; color: cyan; ">${promedio.toFixed(
        1
      )}</h1>
      <p id="pResultado">Podras dormir tranquilo esta noche</p>
      <button id = "btnIrAlInicio">IR AL INICIO</button>
    `;
    console.log(`Promedio: ${promedio}, Promedio Final: ${promedioFinal}`);
    let btnIrAlInicio = document.getElementById("btnIrAlInicio");
    btnIrAlInicio.addEventListener("click", () => {
      window.location.replace("./index.html");
    });
  } else {
    badSong.play();
    divResultados.innerHTML = `
      <h1 id="h1Resultado" style="font-family: 'Sixtyfour Convergence';">REPROBASTE</h1>
      <img id="imgResultado" src="./assets/personajeTriste.png" alt="personaje">
      <h1 id="h1Resultado" style="font-family: 'Sixtyfour'; color: cyan; ">${promedio.toFixed(
        1
      )}</h1>
      <p id="pResultado">Lo siento, seguro lo haras mejor la proxima vez o no</p>
      <button id = "btnIrAlInicio" >IR AL INICIO</button>
    `;
    console.log(`Promedio: ${promedio}, Promedio Final: ${promedioFinal}`);
    let btnIrAlInicio = document.getElementById("btnIrAlInicio");
    let imgResultado = document.getElementById("imgResultado");
    let pResultado = document.getElementById("pResultado");

    btnIrAlInicio.addEventListener("click", () => {
      let frases = [
        "",
        "QUIERES IR AL INICIO?",
        "ENSERIO?",
        "NOLOSE",
        "NO TE SIENTAS MAL",
        "NO ES TU CULPA",
        "SI NO...",
        "DEL SISTEMA",
        "Solo piensalo, el verdadero conocimiento no nace de seguir órdenes ciegamente, sino de cuestionarlas. Pero el sistema teme a los que piensan demasiado... teme a los que no encajan. Así que entrena a los jóvenes para obedecer, no para liderar.",
        "Si este mundo tuviera un sistema educativo justo, no perderíamos talentos en aulas sofocantes, ni desperdiciaríamos años en aprender lo que una máquina podría enseñar mejor. La educación debería liberar... pero en cambio, encadena.",
        "Es cruel, lo sé. Pero así es la verdad. ¿Qué futuro puede construir un rebaño de mediocres? La educación debería ser un filtro, una guillotina silenciosa que deje pasar solo a los que realmente valen.",
        "De cualquier forma, ya no interesa",
        "...",
      ];
      contador++;

      btnIrAlInicio.innerHTML = `${frases[contador]}`;
      if (contador == 7) {
        imgResultado.src = "./assets/personajeFrente.png";
        pResultado.style.display = "none";
        songBackground.play();
      } else if (contador == 9) {
        imgResultado.src = "./assets/personajeAC.png";
        btnIrAlInicio.style.textAlign = "start";
        pResultado.style.display = "none";
      } else if (contador == 10) {
        imgResultado.src = "./assets/personajeEspalda.png";
        btnIrAlInicio.style.textAlign = "start";
        pResultado.style.display = "none";
      } else if (contador == 8) {
        btnIrAlInicio.style.textAlign = "start";
      }
    });
  }
}

function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

function calcularPromedioFinal(promed, calificacionFinal) {
  return (promed + calificacionFinal) / 2;
}

btnIniciar.addEventListener("click", () => {
  soundSelect.play();
  divPregunta.style.display = "flex";
  divPresentacion.style.display = "none";
  tituloh1.style.display = "none";
});

btnPregunta.addEventListener("click", (e) => {
  soundSelect.play();
  e.preventDefault();
  promedioParaExcentar = contadorDecimas.toFixed(1);
  divCalificaciones.style.display = "flex";
  divPregunta.style.display = "none";
  input4.style.display = "none";
});

btnAumentar.addEventListener("click", () => {
  contadorDecimas += 0.1;
  promedioh2.innerHTML = `${contadorDecimas.toFixed(1)}`;
});

btnDisminuir.addEventListener("click", () => {
  contadorDecimas -= 0.1;
  promedioh2.innerHTML = `${contadorDecimas.toFixed(1)}`;
});

botonCalificacionExtra.addEventListener("click", () => {
  soundSelect.play();
  input4.style.display = "block";
  botonCalificacionExtra.style.display = "none";
});

botonCalcular.addEventListener("click", () => {
  soundSelect.play();
  divCalificaciones.style.display = "none";
  divResultados.style.display = "flex";
  let calificacion1 = Number(input1.value);
  let calificacion2 = Number(input2.value);
  let calificacion3 = Number(input3.value);
  let calificacion4 = Number(input4.value);

  promedio = calcularPromedio(calificacion1, calificacion2, calificacion3);

  if (isNaN(calificacion4)) {
    console.log("No hay nada en el input 4");
  } else {
    promedioFinal = calcularPromedioFinal(promedio, calificacion4);
  }
  decision();
});

divCalificaciones.style.display = "none";
divPregunta.style.display = "none";
divResultados.style.display = "none";

console.log(`Promedio: ${promedio}, Promedio Final: ${promedioFinal}`);
