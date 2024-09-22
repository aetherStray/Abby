// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Un segundo de su tiempo es una eternidad", time: 11 },
  { text: "un suspiro de su aliento es un llanto abismal", time: 16 },
  { text: "un amante en abandono quien va a regresar", time: 22 },
  { text: "en su frente el colmo de la triste humanidad", time: 27 },
  { text: "Con un ser converso", time: 33 },
  { text: "de otro universo", time: 37 },

  { text: "Algún dia te dejaré", time: 45 },
  { text: "por siempre de buscar", time: 47 },
  { text: "lo digo porque sé ", time: 50 },
  { text: "nos vamos a encontrar", time: 53 },
  { text: "en un púrpura atardecer ", time: 56 },
  { text: "que no se apagará", time: 58 },
  { text: "todos van a ver", time: 62 },
  { text: "un nuevo principío ", time: 64 },
  { text: "un encuentro del...", time: 67 },
  { text: "tercer tipo", time: 69 },

  { text: "¿Dónde se origina el viento que se oye pasar?", time: 82},
  { text: "¿Quién sabe de donde proviene y donde irá a parar?", time: 87 },
  { text: "así es andar", time: 93 },
  { text: "así es la libertad", time: 97 },

  { text: "Algún dia te dejaré", time: 105 },
  { text: "por siempre de buscar", time: 107 },
  { text: "lo digo porque sé ", time: 110 },
  { text: "nos vamos a encontrar", time: 113 },
  { text: "en un púrpura atardecer ", time: 116 },
  { text: "que no se apagará", time: 118 },
  { text: "todos van a ver", time: 121 },
  { text: "un nuevo principío ", time: 124 },
  { text: "un encuentro del...", time: 126 },
  { text: "tercer tipo", time: 129 },


  { text: "Todos te van a ver ", time: 168 },
  { text: "tambien los que no me creen", time: 170 },
  { text: "un nuevo principio ", time: 173 },
  { text: "sin estereotipos", time: 176 },
  { text: "un encuentro del...", time: 179 },
  { text: "tercer tipo ", time: 181},
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 100);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);