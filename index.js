let imgs = [
  { nombre: 01, img: `./img/01.jpg` },
  { nombre: 02, img: `./img/02.jpg` },
  { nombre: 03, img: `./img/03.jpg` },
  { nombre: 04, img: `./img/04.jpg` },
  { nombre: 05, img: `./img/05.jpg` },
  { nombre: 06, img: `./img/06.jpg` },
  { nombre: 07, img: `./img/07.jpg` },
  { nombre: 08, img: `./img/08.jpg` },
  { nombre: 09, img: `./img/01.jpg` },
  { nombre: 10, img: `./img/02.jpg` },
  { nombre: 11, img: `./img/03.jpg` },
  { nombre: 12, img: `./img/04.jpg` },
  { nombre: 13, img: `./img/05.jpg` },
  { nombre: 14, img: `./img/06.jpg` },
  { nombre: 15, img: `./img/07.jpg` },
  { nombre: 16, img: `./img/08.jpg` },
];

console.log(imgs);

//mostrar de forma aleatoria

imgs = imgs.sort(() => Math.random() - 0.5); //esto nos refresca las cartas de manera aleatoria
console.log(imgs);

// crear array nuevo duplicando el array mezclado

//NO SALÍA HACER UN ARRAY NUEVO DUPLICANDO, ASI QUE HE CREADO UN ARRAY DUPLICANDO A MANO. lUEGO SE MEZCLAN CON EL SORT.

//crear tablero

//En el HTML tendría que haber arriba un marcador <span id="resultados"></span> para mostrar los resultados de los match de cartas.
//También necesitaremos un div class="tablero" porque vamos a generar el tablero desde js

let tablero = document.querySelector("tablero"); //cogemos el div tablero que estará en html con ese id
let resultados = document.querySelector("resultados");
let cardElegida = [];
let cardElegidaId = [];
let cardGanar = [];

//vamos a hacer un for en la función para: crear cada casilla, asignarle una imagen, asignarle un id TAMBIEN UN ADDEVENTLISTENER para el click que hace el user
function crearTablero() {
  for (i = 0; i < imgs.length; i++) {
    let card = document.createElement("img"); //creamos cada casilla del tablero como "card"
    card.setAttribute("src", "img/carta.jpg"); // carta es la imagen de la tarjeta sin voltear, LA PODEMOS CAMBIAR
    card.setAttribute("data-id", i);
    card.addEventListener("click", darVuelta());
    tablero.appendChild(card); //le vamos metiendo al tablero todas las cartas creadas con su id y demás
  }
}

crearTablero();

//comprobar parejas

function parejas() {
  let cards = document.querySelectorAll("img");
  let opcion1 = cardElegidaId[0];
  let opcion2 = cardElegidaId[1];
  if (cardElegida[0] === cardElegida[1]) {
    alert(`has encontrado una pareja!`); //si las dos cartas con su id coinciden, sale un alert (que luego podemos eliminar) y las cards se quedan con la foto en blanco para indicar al usuario el match
    cards[opcion1].setAttribute("src", "img/match.jpg");
    cards[opcion2].setAttribute("src", "img/match.jpg");
    cardGanar.push(cardElegida); //metemos el match en el array vacío cardGanar para el contador de resultados
  } else {
    cards[opcion1].setAttribute("src", "img/carta.jpg"); //si no coinciden, se vuelven a poner con la imagen inicial
    cards[opcion2].setAttribute("src", "img/carta.jpg");
    alert(`inténtalo de nuevo`);
  }
  cardElegida = [];
  cardElegidaId = [];
  //limpiamos los array para poder dal vuelta de nuevo a las siguientes
  resultados.textContent = cardGanar.length; //cuando resultados sea igual a la mitad del array, es decir a 8, será que has ganado la partida
  if (cardsGanar.length === imgs.length / 2) {
    resultados.textContent = `Felicidades! Encotraste todas las parejas`;
  }
}

//dar vuelta a las cartas

function darVuelta() {
  let cardId = this.getAttribute("data-id"); //cogemos el id de la card que hemos creado en la función de crearTablero
  cardElegida.push(imgs[cardId].nombre); //cardElegida es un array vacío al hacemos un push de la card
  cardElegidaId.push(cardId); //cardElegidaId es otro array vacío al que hacemos un push con el id de la card
  this.setAttribute("src", imgs[cardId].img);
  if (cardElegida.length === 2) {
    setTimeout(parejas, 500);
  }
}
