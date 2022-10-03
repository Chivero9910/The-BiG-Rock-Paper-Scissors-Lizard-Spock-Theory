// VARIABLES GLOBALES
//--------------------------------------------
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#splash-screen");
const startBtn = document.querySelector("#start-btn");
const gameOverScreen = document.querySelector("gameover-screen");
let gameObj;

// STATE MANAGEMENT FUNCTIONS
//--------------------------------------------

const startGame = () => {
  //Ocultar la pantalla de inicio
  startScreen.style.display = "none";

  //Mostrar el canvas
  canvas.style.display = "block";

  //Nueva versión del juego
  gameObj = new Game();
  gameObj.gameLoop();
};

// ADD EVENT LISTENERS
//--------------------------------------------

startBtn.addEventListener("click", startGame);

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
