class Game {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/bg.jpg";
    this.isGameOn = true;
    this.chooseText = new Image();
    this.chooseText.src = "./images/mainText.png";
    this.mainCharacter = new MainCharacter();
    this.piedra = new Choose(30, 140, "piedra");
    this.papel = new Choose(30, 220, "papel");
    this.tijeras = new Choose(30, 300, "tijeras");
    this.lagarto = new Choose(30, 380, "lagarto");
    this.spock = new Choose(30, 460, "spock");
    this.chooseArr = [
      this.piedra,
      this.papel,
      this.tijeras,
      this.lagarto,
      this.spock,
    ];
    this.election1;
    this.election2;
  }

  //FUNCIONES
  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(this.chooseText, 0, 0, canvas.width, canvas.height);
  };

  gameOver = () => {
    this.isGameOn = false;
    canvas.style.display = "none";
    resultScreen.style.display = "flex";
  };

  mainCharacterCollision = () => {
    this.chooseArr.forEach((eachChoose, index) => {
      if (
        this.mainCharacter.x < eachChoose.x + eachChoose.w &&
        this.mainCharacter.x + this.mainCharacter.w > eachChoose.x &&
        this.mainCharacter.y < eachChoose.y + eachChoose.h &&
        this.mainCharacter.h + this.mainCharacter.y > eachChoose.y
      ) {
        console.log("seleccion jugador", eachChoose.selection);
        this.election1 = eachChoose.selection;
        this.gameOver();
        let randomNum1 = Math.random() * 4;
        let randomNum = Math.floor(randomNum1);
        this.election2 = this.chooseArr[randomNum].selection;
        console.log(this.election2);
        this.conditionals();
      }
    });
  };

  conditionals = () => {
    if (this.election1 === "piedra" && this.election2 === "tijeras") {
      console.log("piedra gana");
    } else if (this.election1 === "tijeras" && this.election2 === "lagarto") {
      console.log("gana tijeras");
    } else if (this.election1 === "lagarto" && this.election2 === "spock") {
      console.log("gana lagarto");
    } else if (this.election1 === "spock" && this.election2 === "tijeras") {
      console.log("gana spock");
    } else if (this.election1 === "tijeras" && this.election2 === "papel") {
      console.log("gana tijeras");
    } else if (this.election1 === "papel" && this.election2 === "spock") {
      console.log("gana papel");
    } else if (this.election1 === "spock" && this.election2 === "piedra") {
      console.log("gana spock");
    } else if (this.election1 === "piedra" && this.election2 === "lagarto") {
      console.log("gana piedra");
    } else if (this.election1 === "papel" && this.election2 === "piedra") {
      console.log("gana papel");
    } else if (this.election2 === "piedra" && this.election1 === "tijeras") {
      console.log("piedra gana");
    } else if (this.election2 === "tijeras" && this.election1 === "lagarto") {
      console.log("gana tijeras");
    } else if (this.election2 === "lagarto" && this.election1 === "spock") {
      console.log("gana lagarto");
    } else if (this.election2 === "spock" && this.election1 === "tijeras") {
      console.log("gana spock");
    } else if (this.election2 === "tijeras" && this.election1 === "papel") {
      console.log("gana tijeras");
    } else if (this.election2 === "papel" && this.election1 === "spock") {
      console.log("gana papel");
    } else if (this.election2 === "spock" && this.election1 === "piedra") {
      console.log("gana spock");
    } else if (this.election2 === "piedra" && this.election1 === "lagarto") {
      console.log("gana piedra");
    } else if (this.election2 === "papel" && this.election1 === "piedra") {
      console.log("gana papel");
    } else {
        console.log(empate)
    }
  };

  gameLoop = () => {
    //Dibujado de los elementos
    this.drawFondo();
    this.mainCharacter.drawMainCharacter();
    this.piedra.drawChoose();
    this.papel.drawChoose();
    this.tijeras.drawChoose();
    this.lagarto.drawChoose();
    this.spock.drawChoose();

    //Acciones y movimientos de los elementos
    this.mainCharacterCollision();

    //Control de la recursión
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
