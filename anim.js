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
  { text: "de otro universo", time: 35 },

  { text: "Algún dia te dejaré", time: 43 },
  { text: "por siempre de buscar", time: 45 },
  { text: "lo digo porque sé ", time: 48 },
  { text: "nos vamos a encontrar", time: 51 },
  { text: "en un púrpura atardecer ", time: 54 },
  { text: "que no se apagará", time: 56 },
  { text: "todos van a ver", time: 60 },
  { text: "un nuevo principío ", time: 62 },
  { text: "un encuentro del...", time: 65 },
  { text: "tercer tipo", time: 67 },

  { text: "¿Dónde se origina el viento que se oye pasar?", time: 80},
  { text: "¿Quién sabe de donde proviene y donde irá a parar?", time: 85 },
  { text: "así es andar", time: 91 },
  { text: "así es la libertad", time: 95 },

  { text: "Algún dia te dejaré", time: 103 },
  { text: "por siempre de buscar", time: 105 },
  { text: "lo digo porque sé ", time: 108 },
  { text: "nos vamos a encontrar", time: 111 },
  { text: "en un púrpura atardecer ", time: 114 },
  { text: "que no se apagará", time: 116 },
  { text: "todos van a ver", time: 119 },
  { text: "un nuevo principío ", time: 122 },
  { text: "un encuentro del...", time: 124 },
  { text: "tercer tipo", time: 127 },


  { text: "Todos te van a ver ", time: 168 },
  { text: "tambien los que no me creen", time: 170 },
  { text: "un nuevo principio ", time: 171 },
  { text: "sin estereotipos", time: 174 },
  { text: "un encuentro del...", time: 177 },
  { text: "tercer tipo ", time: 179},
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0; // Duración del efecto de aparición en segundos
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

