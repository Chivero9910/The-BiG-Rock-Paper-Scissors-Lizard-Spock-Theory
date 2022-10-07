// VARIABLES GLOBALES
//--------------------------------------------

const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#splash-screen");
const body = document.querySelector("body")
const startBtn = document.querySelector("#start-btn");
const resultScreen = document.querySelector("#result-screen");
const canvasResult = document.querySelector("#result-canvas");
let gameObj;
const buttonNext = document.createElement("button");
buttonNext.type = "button";
buttonNext.innerText = "Siguiente";
resultScreen.appendChild(buttonNext);
const winText = document.querySelector("#win-text");
const yourElection = document.querySelector("#your-election");
const rivalElection = document.querySelector("#rival-election");
const yourElection2 = document.querySelector("#your-election2");
const rivalElection2 = document.querySelector("#rival-election2");
const looseScreen = document.querySelector("#loose-screen");
const looseText = document.querySelector("#loose-text");
const buttonRetry = document.createElement("button");
buttonRetry.type = "button";
buttonRetry.innerText = "Vuelve a intentarlo";
looseScreen.appendChild(buttonRetry);
let score = 0;
const scoreSelectionFinal = document.querySelector("#numberScoreFinal");
const scoreSelection = document.querySelector("#numberScore")
const vs = document.querySelector("#vs2")
let faceObj;
const music = new Audio("./images/music.mp3");
music.play();
music.loop =true;
music.volume = 0.05


// STATE MANAGEMENT FUNCTIONS
//--------------------------------------------

const splashScreen = () => {
  startScreen.style.display = "flex"
  looseScreen.style.display = "none";
  resultScreen.style.display = "none";
  score = 0
}

const startGame = () => {
  //Ocultar la pantalla de inicio
  startScreen.style.display = "none";

  //Mostrar el canvas
  canvas.style.display = "block";

  //Nueva versión del juego
  gameObj = new Game();
  gameObj.gameLoop();
  gameObj.timer()
  
};

const newGame = () => {
  looseScreen.style.display = "none";
  resultScreen.style.display = "none";
  canvas.style.display = "block";
  gameObj = new Game();
  gameObj.gameLoop();
  gameObj.timer();
  faceObj = new Faces()
  faceObj.increaseSpeed()
  
};

// ADD EVENT LISTENERS
//--------------------------------------------

startBtn.addEventListener("click", startGame);
buttonNext.addEventListener("click", newGame);
buttonRetry.addEventListener("click", splashScreen);

//Movimiento mainCharacter
window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    gameObj.mainCharacter.mainCharacterX();
  } else if (event.code === "ArrowRight") {
    gameObj.mainCharacter.mainCharacterXPlus();
  } else if (event.code === "ArrowUp") {
    gameObj.mainCharacter.mainCharacterY();
  } else if (event.code === "ArrowDown") {
    gameObj.mainCharacter.mainCharacterYPlus();
  }
});
